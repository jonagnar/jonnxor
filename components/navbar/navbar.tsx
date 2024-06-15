'use client';

import { UnstyledButton } from '@mantine/core';
import classes from './navbar.module.css';

export function Navbar() {
  return (
    <>
      <UnstyledButton className={classes.control}>Home</UnstyledButton>
      <UnstyledButton className={classes.control}>About</UnstyledButton>
    </>
  );
}
