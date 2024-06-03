"use client";

import {
  type MantineSize,
  rem,
  AppShell,
  AppShellMain,
  AppShellHeader,
  AppShellNavbar,
  AppShellFooter,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";

import { Header } from "@components/header";
import { Navbar } from "@components/navbar";
import { Footer } from "@components/footer";

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function DefaultLayout({ children }: Props) {
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
      footer={{ height: { [breakpoint]: "auto" } }}
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
      </AppShellMain>
      <AppShellFooter>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
