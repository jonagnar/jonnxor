'use client';

import { useTranslations } from 'next-intl';
import { Container, Box, Title, Text } from '@mantine/core';

import { Illustration } from './illustration';

import classes from './nothing-found.module.css';

export function NothingFound() {
  const t = useTranslations();

  return (
    <Container px={20} className={classes.root}>
      <Box className={classes.inner}>
        <Illustration className={classes.image} />
        <Box className={classes.content}>
          <Title className={classes.title}>{t('not-found-page.title')}</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            {t('not-found-page.description')}
          </Text>
        </Box>
      </Box>
    </Container>
  );
}

export default NothingFound;
