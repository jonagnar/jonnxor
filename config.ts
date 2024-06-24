import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'is' as const;
export const locales = ['is', 'en-GB'] as const;

export const pathnames = {
  '/': '/',
  '/image/[id]': {
    is: '/mynd/[id]',
    'en-GB': '/image/[id]',
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix: LocalePrefix<typeof locales> = 'as-needed';
