'use client';

import cx from 'clsx';
import { Group, TooltipGroup } from '@mantine/core';

import { usePathname } from '@/navigation';

import { PDFToggle } from '@/components/pdf-toggle/pdf-toggle';
import { PrintToggle } from '@/components/print-toggle/print-toggle';
import { ColorToggle } from '@/components/color-toggle/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle/locale-toggle';

import classes from './toolbar.module.css';

export type Props = {
  className?: string;
};

export function Toolbar({ className }: Props) {
  const pathname = usePathname();

  return (
    <TooltipGroup>
      <Group className={cx(classes.tooltip, className)}>
        <LocaleToggle />
        {pathname === '/' ? <PrintToggle /> : null}
        {pathname === '/' ? <PDFToggle /> : null}
        <ColorToggle />
      </Group>
    </TooltipGroup>
  );
}
