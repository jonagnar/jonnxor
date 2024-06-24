'use client';

import { IconSun, IconMoon } from '@tabler/icons-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

import classes from './color-scheme-toggle.module.css';

export function ColorSchemeToggle() {
  const { toggleColorScheme } = useMantineColorScheme();

  const toggleColor = () => {
    toggleColorScheme();
  };

  return (
    <ActionIcon size="xl" onClick={toggleColor}>
      <IconSun className={classes.light} />
      <IconMoon className={classes.dark} />
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
