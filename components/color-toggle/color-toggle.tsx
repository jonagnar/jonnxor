'use client';

import cx from 'clsx';
import { useTranslations } from 'next-intl';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

import classes from './color-toggle.module.css';

export function ColorToggle() {
  const t = useTranslations('toolbar');
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const color = computedColorScheme === 'dark' ? 'yellow' : 'blue';

  function toggleColor() {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ActionIcon
      size="input-sm"
      color={color}
      variant="filled"
      onClick={toggleColor}
      className={classes.toggle}
      aria-label={t('toggle-color')}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
