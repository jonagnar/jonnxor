'use client';

import { Container, Group } from '@mantine/core';

import { Toolbar } from '@/features/toolbar/toolbar';
import { Breadcrumbs } from '@/features/breadcrumbs/breadcrumbs';

export function AppFooter() {
  return (
    <Container h="100%">
      <Group h="100%" justify="space-between" style={{ flex: 1 }}>
        <Toolbar visibleFrom="xs" style={{ flexDirection: 'row-reverse' }} />
        <Breadcrumbs />
      </Group>
    </Container>
  );
}
