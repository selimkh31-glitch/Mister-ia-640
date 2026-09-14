import Link from "@/components/site-link";
export const metadata={title:"Design Lab | Mister IA 64",robots:{index:false,follow:false}};
const concepts=[
  ["A","Editorial Brutal","/design-lab/editorial","Typographie expressive, beaucoup de vide, sensation studio éditorial premium."],
  ["B","Swiss Signal","/design-lab/signal","Grille stricte, signalétique, chiffres, impact commercial très direct."],
  ["C","Kinetic Atelier","/design-lab/kinetic","Atelier sombre, rythme horizontal, tension graphique et motion contrôlée."]
];
export default function Page(){return <main style={{minHeight:"100vh",background:"#101612",color:"#f4f1e8",padding:"clamp(80px,10vw,150px) 5vw"}}><p style={{fontSize:11,fontWeight:700,letterSpacing:".16em"}}>MISTER IA 64 — DESIGN LAB</p><h1 style={{fontSize:"clamp(4rem,10vw,10rem)",lineHeight:.86,letterSpacing:"-.07em",margin:"30px 0 80px",maxWidth:1200}}>Trois directions.<br/>Une seule survivra.</h1><div style={{borderTop:"1px solid #52605a"}}>{concepts.map(([code,name,href,desc])=><Link key={code} href={href} style={{display:"grid",gridTemplateColumns:"100px minmax(220px,.7fr) 1fr",gap:30,alignItems:"center",padding:"32px 0",borderBottom:"1px solid #52605a",color:"inherit",textDecoration:"none"}}><span style={{fontFamily:"Georgia,serif",fontSize:34,fontStyle:"italic",color:"#e7fa67"}}>{code}</span><strong style={{fontSize:"clamp(1.5rem,3vw,3rem)"}}>{name}</strong><span style={{maxWidth:580,lineHeight:1.6,color:"#b9c3bd"}}>{desc}</span></Link>)}</div></main>}
