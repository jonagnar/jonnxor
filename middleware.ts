import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from '@/navigation';

export default createMiddleware({
  // Used when no locale matches
  defaultLocale,
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(is|en)/:path*'],
};
