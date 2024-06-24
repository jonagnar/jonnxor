'use client';

import { IconPdf } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

export function Download() {
  const download = () => null;

  return (
    <ActionIcon size="xl" onClick={download} aria-label="Download PDF">
      <IconPdf />
    </ActionIcon>
  );
}

export default Download;
