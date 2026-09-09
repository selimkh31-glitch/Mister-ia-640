import { MessageCircle } from "lucide-react";

export const whatsappUrl = "https://wa.me/33601998010";
export function WhatsAppButton({ className = "button whatsapp-button", children = "Parlons sur WhatsApp" }: { className?: string; children?: React.ReactNode }) {
  return <a href={whatsappUrl} className={className} target="_blank" rel="noopener noreferrer" aria-label="Contacter Mister IA 64 sur WhatsApp, nouvelle fenêtre"><MessageCircle size={19} aria-hidden="true"/>{children}</a>;
}
export function WhatsAppFloating() {
  return <WhatsAppButton className="whatsapp-floating">WhatsApp</WhatsAppButton>;
}
