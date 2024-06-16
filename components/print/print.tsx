'use client';

import { Button } from '@mantine/core';
import { IconPrinter } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import classes from './print.module.css';

export function Print() {
  const t = useTranslations('Actions');

  const handleClick = () => {
    window.print();
  };

  return (
    <Button
      leftSection={<IconPrinter className={classes.icon} stroke={1.5} />}
      size="sm"
      variant="default"
      onClick={handleClick}
    >
      {t('print')}
    </Button>
  );
}
