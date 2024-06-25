'use client';

import { Container, Center } from '@mantine/core';

import Selfie from '@/features/selfie/selfie';

export function Navigation() {
  return (
    <Container h="100%">
      <Center h="100%">
        <Selfie />
      </Center>
    </Container>
  );
}
