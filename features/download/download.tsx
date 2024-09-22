'use client';

import { type MouseEvent, forwardRef } from 'react';
import { type ElementProps, type ButtonProps, Button } from '@mantine/core';

export type DownloadProps = ButtonProps & ElementProps<'a', keyof ButtonProps> & {};

export const Download = forwardRef<HTMLAnchorElement, DownloadProps>(
  ({ onClick, ...props }, ref) => {
    const handleDownload = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
    };

    return (
      <Button
        ref={ref}
        onClick={handleDownload}
        {...props}
        component="a"
        href="/jon-agnar-stefansson.zip"
        target="_blank"
        download
      >
        Download
      </Button>
    );
  }
);
