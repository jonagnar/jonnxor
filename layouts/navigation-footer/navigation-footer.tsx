'use client';

import { Container } from '@mantine/core';

import { Toolbar } from '@/features/toolbar/toolbar';

export function NavigationFooter() {
  return (
    <Container h="100%">
      <Toolbar h="100%" justify="space-evenly" />
    </Container>
  );
}
