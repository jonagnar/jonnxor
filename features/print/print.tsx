'use client';

import { IconPrinter } from '@tabler/icons-react';
import { type MouseEvent, forwardRef } from 'react';
import { type ActionIconProps, ActionIcon, ElementProps } from '@mantine/core';

export type PrintProps = ActionIconProps & ElementProps<'button', keyof ActionIconProps> & {};

export const Print = forwardRef<HTMLButtonElement, PrintProps>(({ onClick, ...props }, ref) => {
  const handlePrint = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    window.print();
  };

  return (
    <ActionIcon ref={ref} {...props} onClick={handlePrint}>
      <IconPrinter style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
});
