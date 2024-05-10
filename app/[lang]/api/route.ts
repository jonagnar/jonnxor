import { Locale } from "@/app/[lang]/dictionaries";

export async function GET(
  request: Request,
  { params }: { params: { lang: Locale } }
) {
  return Response.json({ request, lang: params.lang });
}
