'use client';

import {
  rem,
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
import { useDisclosure, useHeadroom } from '@mantine/hooks';

import { Navbar } from '@components/navbar/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell
      header={{ height: 60, collapsed: !pinned, offset: true }}
      navbar={{ width: 300, breakpoint: 'xs', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShellHeader className="hidden-print">
        <Container h="100%">
          <Group h="100%" wrap="nowrap">
            <Burger size="sm" opened={opened} onClick={toggle} hiddenFrom="xs" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Group wrap="nowrap">
                <ActionIcon size={30} radius={30} aria-label="logo">
                  JA
                </ActionIcon>
                <Title order={1} size={30} lh={1}>
                  JonnXor.is
                </Title>
              </Group>
              <Group ml="xl" gap={0} visibleFrom="xs">
                <Navbar />
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

      <AppShellMain pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>{children}</AppShellMain>
    </AppShell>
  );
}
