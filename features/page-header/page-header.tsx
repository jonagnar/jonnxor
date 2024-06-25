'use client';

import { Group, Avatar, Title } from '@mantine/core';

import Link from '@/components/link/link';

import classes from './page-header.module.css';

export function PageHeader() {
  return (
    <Link href="/" style={{ display: 'inline-block' }} className={classes.link}>
      <Group wrap="nowrap">
        <Avatar variant="filled" className={classes.avatar}>
          JA
        </Avatar>
        <Title order={1}>JonnXor.is</Title>
      </Group>
    </Link>
  );
}
