'use client';

import { Container, Group, Burger } from '@mantine/core';

import { PageHeader } from '@/features/page-header/page-header';
import { LocaleToggle } from '@/features/locale-toggle/locale-toggle';

type Props = {
  opened: boolean;
  toggle: () => void;
};

export function AppHeader({ opened, toggle }: Props) {
  return (
    <Container h="100%">
      <Group h="100%" wrap="nowrap">
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Group justify="space-between" style={{ flex: 1 }}>
          <PageHeader />
          <Group ml="xl" visibleFrom="xs">
            <LocaleToggle />
          </Group>
        </Group>
      </Group>
    </Container>
  );
}
