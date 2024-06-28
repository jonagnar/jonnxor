'use client';

import { forwardRef } from 'react';
import { IconPrinter } from '@tabler/icons-react';
import { type ActionIconProps, ActionIcon } from '@mantine/core';

export type PrintProps = ActionIconProps & {};

export const Print = forwardRef<HTMLButtonElement, PrintProps>((props, ref) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <ActionIcon ref={ref} variant="filled" {...props} onClick={handlePrint}>
      <IconPrinter style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
});

export default Print;
