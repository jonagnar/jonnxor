'use client';

import { IconPdf } from '@tabler/icons-react';
import { forwardRef } from 'react';
import { type ActionIconProps, ActionIcon } from '@mantine/core';

export type PDFProps = ActionIconProps & {};

export const PDF = forwardRef<HTMLButtonElement, PDFProps>((props, ref) => {
  const handlePDF = () => {};

  return (
    <ActionIcon ref={ref} variant="filled" {...props} onClick={handlePDF}>
      <IconPdf style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
});

export default PDF;
