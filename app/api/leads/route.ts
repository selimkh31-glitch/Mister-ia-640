export async function POST() {
  return Response.json(
    { error: "Formulaire non activé. Aucune demande n’est enregistrée ou envoyée." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
