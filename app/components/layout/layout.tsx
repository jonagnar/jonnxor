"use client";

import {
  type MantineSize,
  rem,
  AppShell,
  AppShellMain,
  AppShellHeader,
  AppShellNavbar,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";

import { Header } from "@components/header";
import { Navbar } from "@components/navbar";

import classes from "./layout.module.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function Layout({ children }: Props) {
  const pinned = useHeadroom({ fixedAt: 160 });
  const [opened, { toggle }] = useDisclosure();
  const breakpoint: MantineSize = "sm";

  return (
    <AppShell
      header={{
        height: 80,
        offset: true,
        collapsed: !pinned,
      }}
      navbar={{
        width: 300,
        collapsed: { desktop: true, mobile: !opened },
        breakpoint,
      }}
    >
      <AppShellHeader className={classes.header}>
        <Header toggle={toggle} breakpoint={breakpoint} />
      </AppShellHeader>
      <AppShellNavbar className={classes.navbar}>
        <Navbar />
      </AppShellNavbar>
      <AppShellMain pt={`calc(${rem(80)} + var(--mantine-spacing-md))`}>
        {children}
      </AppShellMain>
    </AppShell>
  );
}
