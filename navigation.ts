import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'is' as const;
export const locales = ['is', 'en'] as const;
export const localePrefix = 'never'; // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});
