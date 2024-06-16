import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['is', 'en'] as const;
export const localePrefix = 'never';
export const defaultLocale = 'is' as const;
export const localeDetection = false;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
