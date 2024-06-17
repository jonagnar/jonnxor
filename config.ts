import { LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'is' as const;
export const locales = ['is', 'en'] as const;

export const pathnames = {
  '/': '/',
};

export const localePrefix: LocalePrefix<typeof locales> = 'as-needed';
export const localeDetection = false;
