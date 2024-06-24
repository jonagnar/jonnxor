import createMiddleware from 'next-intl/middleware';

import { localePrefix, defaultLocale, locales } from '@/config';

export default createMiddleware({
  localeDetection: false,
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
    '/(is|en-GB)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
