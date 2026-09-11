export function AccompanimentVisual() {
  return <figure className="accompaniment-visual">
    {/* Static responsive derivatives: no runtime image transformation needed. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/accompagnement-organisation-960.webp"
      srcSet="/images/accompagnement-organisation-480.webp 480w, /images/accompagnement-organisation-960.webp 960w"
      sizes="(max-width: 760px) calc(100vw - 40px), 560px"
      width={960} height={640} loading="lazy" decoding="async"
      alt="Illustration : une main organise des tâches dispersées en un parcours de travail clair."/>
    <figcaption>Comprendre, organiser, puis avancer ensemble. Illustration conceptuelle créée avec l’IA.</figcaption>
  </figure>;
}
