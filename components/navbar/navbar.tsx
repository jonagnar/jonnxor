'use client';

import { Button } from '@mantine/core';
import { Link } from '@/navigation';

export function Navbar() {
  return (
    <>
      <Button component={Link} href="/about" size="sm" variant="default">
        About
      </Button>
    </>
  );
}
