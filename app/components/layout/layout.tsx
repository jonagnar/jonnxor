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
import { Footer } from "@components/footer";

import classes from "./layout.module.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function Layout({ children }: Props) {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [opened, { toggle }] = useDisclosure();
  const breakpoint: MantineSize = "sm";

  return (
    <AppShell
      header={{
        height: 60,
        offset: true,
        collapsed: !pinned,
      }}
      navbar={{
        width: 300,
        collapsed: { desktop: true, mobile: !opened },
        breakpoint,
      }}
      padding="md"
    >
      <AppShellHeader>
        <Header opened={opened} toggle={toggle} breakpoint={breakpoint} />
      </AppShellHeader>
      <AppShellNavbar>
        <Navbar />
      </AppShellNavbar>
      <AppShellMain pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {children}
        <Footer />
      </AppShellMain>
    </AppShell>
  );
}
