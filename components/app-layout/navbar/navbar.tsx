'use client';

import { useTranslations } from 'next-intl';
import { Title, Group, AppShellSection, Avatar } from '@mantine/core';

import { Link, usePathname } from '@/navigation';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './navbar.module.css';

export function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <>
      <AppShellSection className={classes.header}>
        <Group className={classes.wrapper}>
          <Title order={2} className={classes.title}>
            {t('title')}
          </Title>
        </Group>
      </AppShellSection>
      <AppShellSection grow className={classes.content}>
        <Avatar
          src="profile.jpg"
          alt="Jón Agnar Stefánsson"
          className={classes.avatar}
          component={Link}
          href="/"
        >
          JA
        </Avatar>
      </AppShellSection>
      <AppShellSection className={classes.footer}>
        <Group className={classes.toolbar}>
          <ColorToggle />
          {pathname === '/' ? <Print /> : null}
          <LocaleToggle />
        </Group>
      </AppShellSection>
    </>
  );
}
