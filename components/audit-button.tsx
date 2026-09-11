import { ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "@/components/whatsapp";

const message = "Bonjour, je souhaite un audit IA personnalisé à 99 € pour mon entreprise. Mon activité : … La tâche qui me prend le plus de temps : …";
export function AuditButton({ children = "Demander mon audit personnalisé", className = "button" }: { children?: React.ReactNode; className?: string }) {
  return <a className={className} href={`${whatsappUrl}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label="Demander un audit personnalisé à 99 € sur WhatsApp, nouvelle fenêtre">{children}<ArrowUpRight size={18} aria-hidden="true"/></a>;
}
