'use client';

import { useTranslations } from 'next-intl';
import { Title, Text, Button, Container, Group } from '@mantine/core';

import classes from './server-error.module.css';

type Props = {
  reset: () => void;
};

export function ServerError({ reset }: Props) {
  const t = useTranslations();

  return (
    <Container px={20} className={classes.root}>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>{t('error.title')}</Title>
      <Text size="lg" ta="center" className={classes.description}>
        {t('error.description')}
      </Text>
      <Group justify="center">
        <Button variant="white" size="md" onClick={reset}>
          Refresh the page
        </Button>
      </Group>
    </Container>
  );
}
