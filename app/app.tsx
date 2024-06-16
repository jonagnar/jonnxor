'use client';

import { MouseEvent } from 'react';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {
  Title,
  Group,
  Burger,
  AppShell,
  Container,
  ActionIcon,
  ScrollArea,
  AppShellMain,
  AppShellHeader,
  AppShellNavbar,
  AppShellSection,
} from '@mantine/core';

import { Print } from '@/components/print/print';
import { Navbar } from '@/components/navbar/navbar';
import { ColorSchemeToggle } from '@/components/color-scheme-toggle/color-scheme-toggle';

import { Link, usePathname } from '@/navigation';

export function App({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 + 60 }); //! <-- Magic number do not touch
  const pathname = usePathname();

  const blur = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  };

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader className="header">
        <Container h="100%">
          <Group h="100%" wrap="nowrap">
            <Burger size="sm" opened={opened} onClick={toggle} hiddenFrom="xs" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Link href="/" className="logo" onClick={blur}>
                <Group wrap="nowrap">
                  <ActionIcon
                    size={30}
                    radius={30}
                    component="div"
                    className="logo__icon"
                    aria-label="logo"
                  >
                    JA
                  </ActionIcon>
                  <Title order={1} size={30} lh={1}>
                    JonnXor.is
                  </Title>
                </Group>
              </Link>
              <Group ml="xl" gap="md" visibleFrom="xs">
                {pathname === '/' ? <Print /> : null}
                <Navbar />
                <ColorSchemeToggle />
              </Group>
            </Group>
          </Group>
        </Container>
      </AppShellHeader>

      <AppShellNavbar p="md">
        <AppShellSection>Navbar header</AppShellSection>
        <AppShellSection grow my="md" component={ScrollArea}>
          <Navbar />
        </AppShellSection>
        <AppShell.Section>Navbar footer – always at the bottom</AppShell.Section>
      </AppShellNavbar>

      <AppShellMain className="main">{children}</AppShellMain>
    </AppShell>
  );
}
