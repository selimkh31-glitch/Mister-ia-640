"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main id="main" className="wrap not-found"><h1>Un problème de chargement.</h1><p>Réessayez dans un instant.</p><button className="button" onClick={reset}>Réessayer</button></main>}
