import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

import { locales, localePrefix, pathnames } from '@/config';

export const { Link, redirect, getPathname, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    localePrefix,
    pathnames,
    locales,
  });
