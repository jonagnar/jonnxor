'use client';

import cx from 'clsx';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';

import classes from './color-scheme-toggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ActionIcon
      size="input-sm"
      variant="default"
      onClick={toggleColorScheme}
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}
