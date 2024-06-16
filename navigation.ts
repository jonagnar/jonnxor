import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['is', 'en'];
export const localePrefix = 'never';
export const defaultLocale = 'is';
export const localeDetection = false;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
