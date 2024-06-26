'use client';

import { type GroupProps, Group } from '@mantine/core';

import { Print } from '@/features/print/print';
import { Download } from '@/features/download/download';
import { ColorSchemeToggle } from '@/features/color-scheme-toggle/color-scheme-toggle';

export type ToolbarProps = GroupProps & {};

export function Toolbar({ ...props }: ToolbarProps) {
  return (
    <Group {...props}>
      <Download />
      <Print />
      <ColorSchemeToggle />
    </Group>
  );
}

export default Toolbar;
