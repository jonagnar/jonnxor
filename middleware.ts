import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from '@/navigation';

export default createMiddleware({
  // Used when no locale matches
  localeDetection: false,
  defaultLocale,
  localePrefix,
  locales,
});

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
