'use client';

import { Button } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import classes from './print.module.css';

export function Print() {
  const t = useTranslations('Actions');

  const print = () => {
    window.print();
  };

  return (
    <Button
      leftSection={<IconPrinter className={classes.icon} stroke={1.5} />}
      size="sm"
      onClick={print}
      variant="default"
    >
      {t('print')}
    </Button>
  );
}
