'use client';

import Link from 'next/link';
import { Group, Avatar, Title } from '@mantine/core';

import classes from './logo.module.css';

export function Logo() {
  return (
    <Link href="/" className={classes.link}>
      <Group wrap="nowrap">
        <Avatar variant="filled" className={classes.avatar} visibleFrom="xs">
          JA
        </Avatar>
        <Title order={1} className={classes.title}>
          JonnXor.is
        </Title>
      </Group>
    </Link>
  );
}
