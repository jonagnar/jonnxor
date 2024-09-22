'use client';

import clsx from 'clsx';
import { type GroupProps, Group, TooltipGroup, Tooltip } from '@mantine/core';

import { Download } from '@/features/download/download';
import { Print } from '@/features/print/print';

import classes from './toolbar.module.css';

export type ToolbarProps = GroupProps & {
  toggle?: () => void;
  reverse?: boolean;
};

export function Toolbar({ toggle, reverse, className, ...props }: ToolbarProps) {
  return (
    <TooltipGroup>
      <Group {...props} className={clsx(className, reverse && classes.reverse)}>
        <Tooltip label="Download" className={classes.tooltip}>
          <Download onClick={toggle} variant="filled" />
        </Tooltip>
        <Tooltip label="Print" className={classes.tooltip}>
          <Print size={40} onClick={toggle} variant="filled" />
        </Tooltip>
      </Group>
    </TooltipGroup>
  );
}
