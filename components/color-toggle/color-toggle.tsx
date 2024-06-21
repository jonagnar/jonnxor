'use client';

import cx from 'clsx';
import { useTranslations } from 'next-intl';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme, Tooltip } from '@mantine/core';

import classes from './color-toggle.module.css';

export function ColorToggle() {
  const t = useTranslations('toolbar');
  const { toggleColorScheme } = useMantineColorScheme();

  function toggleColor() {
    toggleColorScheme();
  }

  return (
    <Tooltip label={t('theme')}>
      <ActionIcon variant="filled" onClick={toggleColor} className={classes.color}>
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
}
