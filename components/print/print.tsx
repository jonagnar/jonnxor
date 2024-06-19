'use client';

import { Button, useComputedColorScheme } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import classes from './print.module.css';

export function Print() {
  const t = useTranslations('toolbar');
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const color = computedColorScheme === 'dark' ? 'yellow' : 'blue';

  function print() {
    window.print();
  }

  return (
    <Button
      size="sm"
      color={color}
      variant="filled"
      onClick={print}
      className={classes.button}
      leftSection={<IconPrinter className={classes.icon} stroke={1.5} />}
    >
      {t('print')}
    </Button>
  );
}
