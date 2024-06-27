'use client';

import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {
  rem,
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellSection,
  AppShellMain,
  AppShellFooter,
} from '@mantine/core';

import { AppHeader } from '@/layouts/app-header/app-header';
import { AppFooter } from '@/layouts/app-footer/app-footer';
import { Navigation } from '@/layouts/navigation/navigation';
import { NavigationHeader } from '@/layouts/navigation-header/navigation-header';
import { NavigationFooter } from '@/layouts/navigation-footer/navigation-footer';

import classes from './app-layout.module.css';

type Props = {
  children: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{
        width: 300,
        breakpoint: 'xs',
        collapsed: { desktop: true, mobile: !opened },
      }}
      footer={{ height: 60 }}
      padding="md"
    >
      <AppShellHeader className={classes.header}>
        <AppHeader opened={opened} toggle={toggle} />
      </AppShellHeader>
      <AppShellNavbar p="md" className={classes.navbar}>
        <AppShellSection h={60}>
          <NavigationHeader />
        </AppShellSection>
        <AppShellSection h={`calc(100% - ${rem(120)})`} my="md">
          <Navigation />
        </AppShellSection>
        <AppShellSection h={60}>
          <NavigationFooter />
        </AppShellSection>
      </AppShellNavbar>
      <AppShellMain className={classes.main}>{children}</AppShellMain>
      <AppShellFooter className={classes.footer}>
        <AppFooter />
      </AppShellFooter>
    </AppShell>
  );
}

export default AppLayout;
