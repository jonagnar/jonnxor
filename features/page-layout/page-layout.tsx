'use client';

import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import {
  AppShell,
  AppShellHeader,
  AppShellNavbar,
  AppShellSection,
  AppShellMain,
  AppShellFooter,
  Group,
  Title,
  Burger,
  ScrollArea,
  Center,
} from '@mantine/core';

import { Logo } from '@/features/logo/logo';
import { Toolbar } from '@/features/toolbar/toolbar';
import { ProfilePicture } from '@/features/profile-picture/profile-picture';

import classes from './page-layout.module.css';

type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Clean up on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 320,
        breakpoint: 'xs',
        collapsed: { desktop: true, mobile: !opened },
      }}
      footer={{ height: 80 }}
      padding="md"
    >
      <AppShellHeader px="md" className={classes.header}>
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Group h="100%" gap="md" justify="space-between" wrap="nowrap" style={{ flex: 1 }}>
            <Burger size={24} opened={opened} onClick={toggle} hiddenFrom="xs" />
            <Logo />
          </Group>
          <Toolbar visibleFrom="xs" />
        </Group>
      </AppShellHeader>
      <AppShellMain className={classes.main}>{children}</AppShellMain>
      <AppShellNavbar p="md" className={classes.navbar}>
        <AppShellSection>
          <Group h="100%" justify="center">
            <Title order={2} size={24} textWrap="wrap" className={classes.title}>
              Jón Agnar Stefánsson
            </Title>
          </Group>
        </AppShellSection>
        <AppShellSection my="lg" grow component={ScrollArea}>
          <Center h="100%">
            <ProfilePicture />
          </Center>
        </AppShellSection>
        <AppShellSection>
          <Toolbar toggle={toggle} reverse justify="space-evenly" />
        </AppShellSection>
      </AppShellNavbar>
      <AppShellFooter px="md" className={classes.footer}>
        <Group h="100%" wrap="nowrap" className={classes.wrapper}>
          <Toolbar reverse visibleFrom="xs" />
        </Group>
      </AppShellFooter>
    </AppShell>
  );
}
