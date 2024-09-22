/* eslint-disable @next/next/no-img-element */

'use client';

import clsx from 'clsx';
import { type BoxProps, Box } from '@mantine/core';

import picture from '@/public/jon-agnar-stefansson/profile-picture.jpg';
import classes from './profile-picture.module.css';

export type SelfieProps = BoxProps & {};

export function ProfilePicture({ className, ...props }: SelfieProps) {
  return (
    <Box {...props} className={clsx(classes.figure, className)}>
      <img src={picture.src} alt="Jón Agnar Stefánsson" className={classes.img} />
    </Box>
  );
}
