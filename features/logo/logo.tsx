'use client';

import { useTranslations } from 'next-intl';
import { Group, Avatar, Title } from '@mantine/core';

import Link from '@/components/link/link';

import classes from './logo.module.css';

export function Logo() {
  const t = useTranslations();

  return (
    <Link href="/" className={classes.link}>
      <Group wrap="nowrap">
        <Avatar variant="filled" className={classes.avatar} visibleFrom="xs">
          {t('header.logo')}
        </Avatar>
        <Title order={1} className={classes.title}>
          {t('header.title')}
        </Title>
      </Group>
    </Link>
  );
}

export default Logo;
