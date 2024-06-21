'use client';

import { useHeadroom } from '@mantine/hooks';
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from '@mantine/core';

import { useNavbarContext } from '@/context/navbar';

import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

import classes from './app-layout.module.css';

export type Props = {
  children?: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  const [opened] = useNavbarContext();
  const pinned = useHeadroom({ fixedAt: 160 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
      padding={0}
      className={classes.app}
    >
      <AppShellHeader className={classes.header}>
        <Header />
      </AppShellHeader>
      <AppShellNavbar className={classes.navbar}>
        <Navbar />
      </AppShellNavbar>
      <AppShellMain className={classes.main}>{children}</AppShellMain>
      <AppShellFooter className={classes.footer}>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
