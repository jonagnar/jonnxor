'use client';

import { forwardRef } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useMantineColorScheme, type ActionIconProps, ActionIcon } from '@mantine/core';

import classes from './color-scheme-toggle.module.css';

export type ColorSchemeToggleProps = ActionIconProps & {};

export const ColorSchemeToggle = forwardRef<HTMLButtonElement, ColorSchemeToggleProps>(
  (props, ref) => {
    const { toggleColorScheme } = useMantineColorScheme();

    const handleToggle = () => {
      toggleColorScheme();
    };

    return (
      <ActionIcon ref={ref} {...props} onClick={handleToggle}>
        <IconSun className={classes.light} style={{ width: '70%', height: '70%' }} />
        <IconMoon className={classes.dark} style={{ width: '70%', height: '70%' }} />
      </ActionIcon>
    );
  }
);

export default ColorSchemeToggle;
