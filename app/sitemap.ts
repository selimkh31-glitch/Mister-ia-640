import { pages } from "@/lib/content";
import { absolute, site } from "@/lib/site";
export default function sitemap(){if(site.review)return [];return [...new Set(['/', '/services','/solutions','/guides','/diagnostic','/contact',...pages.filter(x=>!['/mentions-legales','/confidentialite'].includes(x.path)).map(x=>x.path)])].map(path=>({url:absolute(path)}))}
