import { Container, Skeleton } from '@mantine/core';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Container>
      <Skeleton />
    </Container>
  );
}
