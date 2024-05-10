import { match } from "@formatjs/intl-localematcher";
import { NextRequest } from "next/server";
import Negotiator from "negotiator";

export const LOCALES = ["is", "en"];
export const DEFAULT_LOCALE = "is";

export function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE); // -> 'is'
}
