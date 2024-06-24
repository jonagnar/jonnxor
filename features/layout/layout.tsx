'use client';

import { MouseEvent } from 'react';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import {
  rem,
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellMain,
  AppShellFooter,
  Container,
  Group,
  Burger,
  Avatar,
  Title,
  Center,
  Breadcrumbs,
} from '@mantine/core';

import Link from '@/components/link/link';
import { Selfie } from '@/features/selfie/selfie';
import { Toolbar } from '@/features/toolbar/toolbar';

import classes from './layout.module.css';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 120 });

  const blur = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur();
  };

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
        <Container h="100%">
          <Group h="100%" wrap="nowrap">
            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
              <Link href="/" onClick={blur} style={{ display: 'inline-block' }}>
                <Group wrap="nowrap">
                  <Avatar variant="filled">JA</Avatar>
                  <Title order={1}>JonnXor.is</Title>
                </Group>
              </Link>
              <Toolbar ml="xl" visibleFrom="xs" />
            </Group>
          </Group>
        </Container>
      </AppShellHeader>
      <AppShellNavbar p="md" className={classes.navbar}>
        <AppShell.Section h={60}>
          <Container h="100%">
            <Center h="100%">
              <Title order={2} textWrap="nowrap">
                Jón Agnar (Xor) Stefánsson
              </Title>
            </Center>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={`calc(100% - ${rem(120)})`} my="md">
          <Container h="100%">
            <Center h="100%">
              <Selfie />
            </Center>
          </Container>
        </AppShell.Section>
        <AppShell.Section h={60}>
          <Container h="100%">
            <Toolbar h="100%" justify="space-evenly" />
          </Container>
        </AppShell.Section>
      </AppShellNavbar>
      <AppShellMain py={`calc(${rem(60)} + var(--mantine-spacing-xl))`} className={classes.main}>
        {children}
      </AppShellMain>
      <AppShellFooter className={classes.footer}>
        <Container h="100%">
          <Group h="100%" justify="space-between" style={{ flex: 1 }}>
            <Toolbar visibleFrom="xs" style={{ flexDirection: 'row-reverse' }} />
            <Breadcrumbs ml="xl">
              <Link href="/" onClick={blur}>
                JonnXor.is
              </Link>
            </Breadcrumbs>
          </Group>
        </Container>
      </AppShellFooter>
    </AppShell>
  );
}

export default Layout;
