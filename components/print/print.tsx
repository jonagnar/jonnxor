'use client';

import { Button } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import classes from './print.module.css';

export function Print() {
  const t = useTranslations('Action');
  const leftSection = <IconPrinter className={classes.icon} stroke={1.5} />;

  function print() {
    window.print();
  }

  return (
    <Button size="sm" onClick={print} variant="filled" leftSection={leftSection}>
      {t('print')}
    </Button>
  );
}
