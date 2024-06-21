'use client';

import { IconPrinter } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Tooltip } from '@mantine/core';

import classes from './print-toggle.module.css';

export function PrintToggle() {
  const t = useTranslations('toolbar');

  function print() {
    window.print();
  }

  return (
    <Tooltip label={t('print')} className={classes.tooltip}>
      <ActionIcon variant="filled" onClick={print} className={classes.print}>
        <IconPrinter className={classes.icon} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
