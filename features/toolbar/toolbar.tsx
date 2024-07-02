'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { type GroupProps, Group, TooltipGroup, Tooltip } from '@mantine/core';

import { PDF } from '@/features/pdf/pdf';
import { Print } from '@/features/print/print';
import { ColorSchemeToggle } from '@/features/color-scheme-toggle/color-scheme-toggle';

import classes from './toolbar.module.css';

export type ToolbarProps = GroupProps & {
  toggle?: () => void;
  reverse?: boolean;
  withColorSchemeToggle?: boolean;
};

export function Toolbar({
  toggle,
  reverse,
  withColorSchemeToggle = true,
  className,
  ...props
}: ToolbarProps) {
  const t = useTranslations();

  return (
    <TooltipGroup>
      <Group {...props} className={clsx(className, reverse && classes.reverse)}>
        <Tooltip label={t('toolbar.pdf')} className={classes.tooltip}>
          <PDF size={40} onClick={toggle} />
        </Tooltip>
        <Tooltip label={t('toolbar.print')} className={classes.tooltip}>
          <Print size={40} onClick={toggle} />
        </Tooltip>
        {withColorSchemeToggle && (
          <Tooltip label={t('toolbar.color-scheme')} className={classes.tooltip}>
            <ColorSchemeToggle size={40} onClick={toggle} />
          </Tooltip>
        )}
      </Group>
    </TooltipGroup>
  );
}

export default Toolbar;
