'use client';

import { IconPdf } from '@tabler/icons-react';
import { type MouseEvent, forwardRef } from 'react';
import { type ElementProps, type ActionIconProps, ActionIcon } from '@mantine/core';

export type PDFProps = ActionIconProps & ElementProps<'button', keyof ActionIconProps> & {};

export const PDF = forwardRef<HTMLButtonElement, PDFProps>(({ onClick, ...props }, ref) => {
  const handlePDF = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <ActionIcon ref={ref} variant="filled" {...props} onClick={handlePDF}>
      <IconPdf style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
});

export default PDF;
