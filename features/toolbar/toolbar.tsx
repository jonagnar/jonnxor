'use client';

import { type GroupProps, Group } from '@mantine/core';

import { Print } from '@/features/print/print';
import { Download } from '@/features/download/download';
import { ColorSchemeToggle } from '@/features/color-scheme-toggle/color-scheme-toggle';
import { TranslationSwitcher } from '../tranlsation-switcher/translation-switcher';

export type ToolbarProps = GroupProps & {};

export function Toolbar({ ...props }: ToolbarProps) {
  return (
    <Group {...props}>
      <Download />
      <Print />
      <ColorSchemeToggle />
      <TranslationSwitcher />
    </Group>
  );
}

export default Toolbar;
