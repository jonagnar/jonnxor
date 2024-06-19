'use client';

import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

import { selectOpened } from '@/lib/features/navbar/navbarSlice';
import { useAppSelector } from '@/lib/hooks';

import { Header } from './header';
import { Navbar } from './navbar';
import { Footer } from './footer';

import classes from './app-layout.module.css';

export type Props = {
  children?: React.ReactNode;
};

export function AppLayout({ children }: Props) {
  const opened = useAppSelector(selectOpened);
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
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
