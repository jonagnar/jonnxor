'use client';

import { IconPrinter } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

export function Print() {
  const print = () => {
    window.print();
  };

  return (
    <ActionIcon size="xl" onClick={print} aria-label="Print">
      <IconPrinter />
    </ActionIcon>
  );
}

export default Print;
