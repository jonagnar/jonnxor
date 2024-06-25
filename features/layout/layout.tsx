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

import { AppHeader } from '@/features/app-header/app-header';
import { AppFooter } from '@/features/app-footer/app-footer';
import { Navigation } from '@/features/navigation/navigation';
import { NavigationHeader } from '@/features/navigation-header/navigation-header';
import { NavigationFooter } from '@/features/navigation-footer/navigation-footer';

import classes from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
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

export default Layout;
