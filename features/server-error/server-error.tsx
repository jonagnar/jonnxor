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
    <Container h="100vh" fluid px={20} className={classes.root}>
      <div className={classes.label}>500</div>
      <Title className={classes.title}>{t('error.title')}</Title>
      <Text size="lg" ta="center" className={classes.description}>
        {t('error.text')}
      </Text>
      <Group justify="center">
        <Button variant="white" size="md" onClick={reset}>
          {t('error.reset')}
        </Button>
      </Group>
    </Container>
  );
}

export default ServerError;
