import { MetadataRoute } from 'next';

import { locales, defaultLocale } from '@/config';

// Adapt this as necessary
const pathnames = ['/'];
const host = 'https://jonnxor.is';

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(pathname, locale)])),
    },
  }));
}
