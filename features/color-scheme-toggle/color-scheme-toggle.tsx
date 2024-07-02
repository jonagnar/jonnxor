'use client';

import { IconSun, IconMoon } from '@tabler/icons-react';
import { type MouseEvent, forwardRef } from 'react';
import {
  type ElementProps,
  type ActionIconProps,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';

import classes from './color-scheme-toggle.module.css';

export type ColorSchemeToggleProps = ActionIconProps &
  ElementProps<'button', keyof ActionIconProps> & {};

export const ColorSchemeToggle = forwardRef<HTMLButtonElement, ColorSchemeToggleProps>(
  ({ onClick, ...props }, ref) => {
    const { toggleColorScheme } = useMantineColorScheme();

    const handleToggle = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
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
