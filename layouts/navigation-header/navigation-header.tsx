'use client';

import { Container, Center, Title } from '@mantine/core';

export function NavigationHeader() {
  return (
    <Container h="100%">
      <Center h="100%">
        <Title order={2} textWrap="nowrap">
          Jón Agnar (Xor) Stefánsson
        </Title>
      </Center>
    </Container>
  );
}
