'use client';

import { Avatar } from '@mantine/core';

import pro from '@/public/pro.jpg';

import classes from './selfie.module.css';

export function Selfie() {
  return (
    <Avatar src={pro.src} alt="Jón Agnar (Xor) Stefánsson" className={classes.selfie}>
      JA
    </Avatar>
  );
}

export default Selfie;
