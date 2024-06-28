'use client';

import clsx from 'clsx';
import { type AvatarProps, Avatar } from '@mantine/core';

import pro from '@/public/pro.jpg';

import classes from './selfie.module.css';

export type SelfieProps = AvatarProps & {};

export function Selfie({ className, ...props }: SelfieProps) {
  return (
    <Avatar src={pro.src} alt="Jón Agnar" {...props} className={clsx(classes.selfie, className)}>
      JA
    </Avatar>
  );
}

export default Selfie;
