'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

import { Header } from '@/components/header';
import { Navbar } from '@/components/navbar';
import { Main } from '@/components/main';
import { Footer } from '@/components/footer';

export function PageLayout({ title, children }: { title?: string; children?: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 }); //! <-- Magic number do not touch
  const breakpoint = 'xs';

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint, collapsed: { desktop: true, mobile: !opened } }}
      footer={{ height: 60 }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} breakpoint={breakpoint} />
      <Navbar />
      <Main title={title}>{children}</Main>
      <Footer breakpoint={breakpoint} />
    </AppShell>
  );
}
