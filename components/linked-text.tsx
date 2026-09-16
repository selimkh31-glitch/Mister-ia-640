import type { ReactNode } from "react";
import Link from "@/components/site-link";

export function linkedPlainText(text: string) {
  return text.replace(/\[([^\]]+)\]\((\/[^)\s]+)\)/g, "$1");
}

export function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(/\[([^\]]+)\]\((\/[^)\s]+)\)/g)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(<Link key={index} href={match[2]}>{match[1]}</Link>);
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
