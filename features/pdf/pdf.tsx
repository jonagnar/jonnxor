'use client';

import { useLocale } from 'next-intl';
import { IconPdf } from '@tabler/icons-react';
import { type MouseEvent, forwardRef } from 'react';
import { type ElementProps, type ActionIconProps, ActionIcon } from '@mantine/core';

export type PDFProps = ActionIconProps & ElementProps<'a', keyof ActionIconProps> & {};

export const PDF = forwardRef<HTMLAnchorElement, PDFProps>(({ onClick, ...props }, ref) => {
  const locale = useLocale();

  const handlePDF = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
  };

  return (
    <ActionIcon
      ref={ref}
      onClick={handlePDF}
      {...props}
      component="a"
      href={`/jon-agnar-stefansson-cv-${locale === 'is' ? 'is' : 'en'}.pdf`}
      target="_blank"
      download
    >
      <IconPdf style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
});

export default PDF;
