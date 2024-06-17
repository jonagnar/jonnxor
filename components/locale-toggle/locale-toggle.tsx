'use client';

import { useLocale } from 'next-intl';
import { ActionIcon } from '@mantine/core';
import { IconLanguage } from '@tabler/icons-react';

import classes from './locale-toggle.module.css';

export function LocaleToggle() {
  const locale = useLocale();

  function toggleLocale() {
    // eslint-disable-next-line no-console
    console.log('Toggle locale', locale);
  }

  return (
    <ActionIcon size="input-sm" variant="filled" onClick={toggleLocale} aria-label="Toggle locale">
      <IconLanguage className={classes.icon} stroke={1.5} />
    </ActionIcon>
  );
}
