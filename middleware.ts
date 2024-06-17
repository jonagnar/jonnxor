import createMiddleware from 'next-intl/middleware';

import { localePrefix, defaultLocale, locales, localeDetection } from '@/config';

export default createMiddleware({
  localeDetection,
  defaultLocale,
  localePrefix,
  locales,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en|is)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
};
