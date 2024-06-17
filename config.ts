import { LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'en' as const;
export const locales = ['en', 'is'] as const;

export const localePrefix: LocalePrefix<typeof locales> = 'never';
export const localeDetection = false;
