/* eslint-disable @next/next/no-img-element */

'use client';

import clsx from 'clsx';
import { type BoxProps, Box } from '@mantine/core';

import selfie from '@/public/selfie.jpg';
import classes from './selfie.module.css';

export type SelfieProps = BoxProps & {};

export function Selfie({ className, ...props }: SelfieProps) {
  return (
    <Box {...props} className={clsx(classes.figure, className)}>
      <img src={selfie.src} alt="Jón Agnar Stefánsson" className={classes.img} />
    </Box>
  );
}

export default Selfie;
