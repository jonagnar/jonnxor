'use client';

import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';

export function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();

  return (
    <Button
      size="sm"
      href="/about"
      component={Link}
      variant={pathname === '/about' ? 'filled' : 'default'}
    >
      {t('about')}
    </Button>
  );
}
