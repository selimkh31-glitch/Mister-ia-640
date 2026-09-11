import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';

const origin = process.env.SITE_URL || 'https://mister-ia-64.dev';
const root = '.next/server/app';
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const files = walk(root).filter(p => p.endsWith('.html') && !p.includes('/_'));
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1],m[2].replaceAll('&amp;','&')]));
const docs = new Map();
for (const file of files) {
  const route = '/'+path.relative(root,file).replace(/\.html$/,'').replace(/^index$/,'');
  const raw=fs.readFileSync(file,'utf8');
  const html=raw.replace(/<script(?![^>]*type="application\/ld\+json")[\s\S]*?<\/script>/g,'');
  docs.set(route,{raw,html,file});
}
const titles=new Set(),descriptions=new Set();
let links=0,images=0,schemas=0;
for(const [route,{html}] of docs){
  const tags=[...html.matchAll(/<(?:meta|link|img)\b[^>]*>/g)].map(m=>attrs(m[0]));
  const meta=name=>tags.find(t=>t.name===name||t.property===name)?.content;
  const title=html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title&&!titles.has(title),`${route}: missing/duplicate title`);titles.add(title);
  const description=meta('description');assert(description&&!descriptions.has(description),`${route}: missing/duplicate description`);descriptions.add(description);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${route}: h1`);
  assert.equal(new URL(tags.find(t=>t.rel==='canonical')?.href).href,new URL(origin+route).href,`${route}: canonical`);
  assert(meta('og:title')&&meta('og:description')&&meta('twitter:title')&&meta('twitter:description'),`${route}: social metadata`);
  assert.equal(new URL(meta('og:url')).href,new URL(origin+route).href,`${route}: OG URL`);
  assert.equal(meta('robots')?.includes('noindex'),['/mentions-legales','/confidentialite'].includes(route),`${route}: robots`);
  for(const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)){
    const schema=JSON.parse(m[1]);assert(schema['@context']==='https://schema.org');
    assert(!/"(?:aggregateRating|reviewRating)"/.test(m[1]),`${route}: unsupported rating`);schemas++;
  }
  for(const m of html.matchAll(/<img\b[^>]*>/g)){
    const a=attrs(m[0]);assert('alt' in a&&+a.width>0&&+a.height>0,`${route}: image attributes`);
    for(const src of [a.src,...(a.srcSet||a.srcset||'').split(',').filter(Boolean).map(s=>s.trim().split(' ')[0])]){
      if(src?.startsWith('/')&&!src.startsWith('/_next/'))assert(fs.existsSync('public'+src),`${route}: missing image ${src}`);
    }images++;
  }
  for(const m of html.matchAll(/<a\b[^>]*>/g)){
    const href=attrs(m[0]).href;if(!href||(!href.startsWith('/')&&!href.startsWith('#')))continue;
    const u=new URL(href,origin+route);const target=docs.get(u.pathname);
    assert(target||u.pathname==='/contact',`${route}: missing route ${href}`);
    if(u.hash&&target)assert(target.html.includes(`id="${decodeURIComponent(u.hash.slice(1))}"`),`${route}: missing anchor ${href}`);
    links++;
  }
}
const sitemap=fs.readFileSync(root+'/sitemap.xml.body','utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);
assert.equal(new Set(urls).size,urls.length);
for(const url of urls){const u=new URL(url);assert.equal(u.origin,origin);assert(!['/mentions-legales','/confidentialite'].includes(u.pathname));assert(docs.has(u.pathname)||u.pathname==='/contact');}
for(const route of docs.keys())if(!['/mentions-legales','/confidentialite'].includes(route))assert(urls.includes(origin+route));
const robots=fs.readFileSync(root+'/robots.txt.body','utf8');assert(robots.includes('Allow: /'));assert(robots.includes(`Sitemap: ${origin}/sitemap.xml`));assert(!/^Disallow: \/$/m.test(robots));
const home=docs.get('/').raw;
const assets=[...new Set([...home.matchAll(/(?:src|href)="([^"?]+\.(?:js|css))/g)].map(m=>m[1]))];
const weights=assets.map(p=>{const b=fs.readFileSync('.next/'+p.replace('/_next/',''));return {path:p,bytes:b.length,gzip:gzipSync(b).length};});
console.log(JSON.stringify({pages:docs.size,sitemapUrls:urls.length,links,images,schemas,homeHTMLBytes:Buffer.byteLength(home),assets:weights},null,2));
