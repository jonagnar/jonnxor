import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'is' as const;
export const locales = ['is', 'en'] as const;

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'never';
