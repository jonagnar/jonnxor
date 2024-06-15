'use client';

import { Button } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';

import classes from './print.module.css';

export function Print() {
  return (
    <Button
      leftSection={<IconPrinter className={classes.icon} stroke={1.5} />}
      size="sm"
      variant="default"
      onClick={() => window.print()}
    >
      Print
    </Button>
  );
}
