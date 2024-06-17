'use client';

import {
  Text,
  Title,
  Stack,
  Group,
  ScrollArea,
  AppShellNavbar,
  AppShellSection,
} from '@mantine/core';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './navbar.module.css';

export function Navbar() {
  return (
    <AppShellNavbar>
      <AppShellSection px="md" className={classes.header}>
        <Stack h="100%" justify="center">
          <Title order={3} textWrap="nowrap">
            Jón Agnar Stefánsson
          </Title>
          <Title order={4} textWrap="nowrap">
            Tölvunarfærðingur - Vefforritari
          </Title>
        </Stack>
      </AppShellSection>
      <AppShellSection grow px="md" my="md" component={ScrollArea}>
        <Text>TODO: Avatar / Profile picture</Text>
      </AppShellSection>
      <AppShellSection px="md" className={classes.footer}>
        <Group h="100%" justify="space-between" wrap="nowrap">
          <ColorToggle />
          <Group mx="xl" grow style={{ flex: 1 }}>
            <Print />
          </Group>
          <LocaleToggle />
        </Group>
      </AppShellSection>
    </AppShellNavbar>
  );
}
