import { site, absolute } from "@/lib/site";
export default function robots(){return {rules:{userAgent:'*',...(site.review?{disallow:'/'}:{allow:'/',disallow:['/api/']})},...(!site.review?{sitemap:absolute('/sitemap.xml')}:{})}}
