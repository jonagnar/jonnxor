'use client';

import { useTranslations } from 'next-intl';
import { Title, Group, AppShellSection } from '@mantine/core';

import { Toolbar } from '@/components/toolbar/toolbar';
import { ProfilePhoto } from '@/components/profile-photo/profile-photo';

import classes from './navbar.module.css';

export function Navbar() {
  const t = useTranslations('navigation');

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
        <ProfilePhoto className={classes.avatar} />
      </AppShellSection>
      <AppShellSection className={classes.footer}>
        <Toolbar className={classes.toolbar} />
      </AppShellSection>
    </>
  );
}
