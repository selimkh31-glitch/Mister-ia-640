import DiagnosticTool from "@/components/diagnostic-tool";
import { absolute } from "@/lib/site";
export const metadata={title:'Estimateur gratuit du potentiel d’automatisation',description:'Estimez le temps potentiellement libérable sur une tâche. Formule transparente, sans email et sans transmission de vos réponses.',alternates:{canonical:absolute('/diagnostic')}};
export default function Page(){return <main id="main" className="wrap"><header className="page-hero"><p className="eyebrow">OUTIL GRATUIT · SANS EMAIL</p><h1>Et si vous récupériez<br/>un peu de temps ?</h1><p className="lead">Faites varier vos hypothèses pour explorer l’intérêt d’une automatisation. Un premier repère avant de regarder votre processus en détail.</p></header><DiagnosticTool/></main>}
