'use client';

import { ActionIcon } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

export function Print() {
  const print = () => {
    window.print();
  };

  return (
    <ActionIcon size="xl" onClick={print}>
      <IconPrinter />
    </ActionIcon>
  );
}

export default Print;
