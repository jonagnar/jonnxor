'use client';

import { IconPdf } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Tooltip } from '@mantine/core';

import classes from './pdf-toggle.module.css';

export function PDFToggle() {
  const t = useTranslations('toolbar');

  function pdf() {
    window.print();
  }

  return (
    <Tooltip label={t('pdf')} className={classes.tooltip}>
      <ActionIcon variant="filled" onClick={pdf} className={classes.pdf}>
        <IconPdf className={classes.icon} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
