import type { AnchorHTMLAttributes } from 'react';
// Ordinary links preserve server-rendered navigation without client router work.
export default function SiteLink(props:AnchorHTMLAttributes<HTMLAnchorElement>){return <a {...props}/>}
