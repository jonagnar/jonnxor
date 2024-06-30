'use client';

import { useTranslations } from 'next-intl';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellSection,
  AppShellMain,
  AppShellFooter,
  Group,
  Title,
  Burger,
  ScrollArea,
} from '@mantine/core';

import { Logo } from '@/features/logo/logo';
import { Selfie } from '@/features/selfie/selfie';
import { Toolbar } from '@/features/toolbar/toolbar';
import { Breadcrumbs } from '@/features/breadcrumbs/breadcrumbs';

import classes from './app-layout.module.css';

type Props = {
  children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  const t = useTranslations();
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 160 });

  return (
    <AppShell
      header={{ height: 80, collapsed: !pinned, offset: true }}
      navbar={{
        width: 320,
        breakpoint: 'xs',
        collapsed: { desktop: true, mobile: !opened },
      }}
      footer={{ height: 80 }}
      padding="md"
    >
      <AppShellHeader px="md" className={classes.header}>
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Group h="100%" gap="md" justify="space-between" wrap="nowrap" style={{ flex: 1 }}>
            <Burger size={24} opened={opened} onClick={toggle} hiddenFrom="xs" />
            <Logo />
          </Group>
          <Toolbar visibleFrom="xs" />
        </Group>
      </AppShellHeader>
      <AppShellNavbar p="md" className={classes.navbar}>
        <AppShellSection>
          <Group h="100%" justify="center">
            <Title order={2} size={24} textWrap="wrap" className={classes.title}>
              {t('navigation.title')}
            </Title>
          </Group>
        </AppShellSection>
        <AppShellSection my="lg" grow component={ScrollArea}>
          <Selfie />
        </AppShellSection>
        <AppShellSection>
          <Toolbar reverse justify="space-evenly" />
        </AppShellSection>
      </AppShellNavbar>
      <AppShellMain className={classes.main}>{children}</AppShellMain>
      <AppShellFooter px="md" className={classes.footer}>
        <Group h="100%" wrap="nowrap" className={classes.wrapper}>
          <Toolbar reverse withColorSchemeToggle={false} visibleFrom="xs" />
          <Breadcrumbs />
        </Group>
      </AppShellFooter>
    </AppShell>
  );
}

export default AppLayout;
