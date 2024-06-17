'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';

const height = 60;
const breakpoint = 'xs';

export function PageLayout({ title, children }: { title: string; children?: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: height * 2 }); //! <-- Magic number do not touch

  return (
    <AppShell
      header={{ height, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint, collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
    >
      <Header opened={opened} toggle={toggle} breakpoint={breakpoint} />
      <Navbar />
      <Main title={title}>{children}</Main>
      <Footer breakpoint={breakpoint} />
    </AppShell>
  );
}
