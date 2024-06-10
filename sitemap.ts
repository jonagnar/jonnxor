import { MetadataRoute } from "next";

// Can be imported from shared config
const defaultLocale = "en" as const;
const locales = ["is", "en"] as const;

// Adapt this as necessary
const pathnames = ["/"];
const host = "https://jonnxor.is";

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
  }

  return pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)])
      ),
    },
  }));
}
