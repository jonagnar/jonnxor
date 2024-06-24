'use client';

import { forwardRef } from 'react';
import { createPolymorphicComponent, type GroupProps, Group } from '@mantine/core';

import { Print } from '@/features/print/print';
import { Download } from '@/features/download/download';
import { ColorSchemeToggle } from '@/features/color-scheme-toggle/color-scheme-toggle';

export type ToolbarProps = GroupProps & {};

export const Toolbar = createPolymorphicComponent<'div', ToolbarProps>(
  forwardRef<HTMLDivElement, ToolbarProps>(({ ...props }, ref) => (
    <Group component="div" {...props} ref={ref}>
      <ColorSchemeToggle />
      <Download />
      <Print />
    </Group>
  ))
);

export default Toolbar;
