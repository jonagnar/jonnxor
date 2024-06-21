'use client';

import { Container, Grid, GridCol, Text, Group } from '@mantine/core';
import { useTranslations } from 'next-intl';

export type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  const t = useTranslations('home');

  return (
    <Container component="section">
      <Group component="header" justify="space-between">
        ...
      </Group>

      <Grid>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Text>{t('text')}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 7 }}>{children}</GridCol>
      </Grid>

      <Grid>
        <GridCol span={{ base: 12, xs: 7 }}>
          <Text>{t('text')}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Text>{t('text')}</Text>
        </GridCol>
      </Grid>

      <Group component="footer" justify="space-around">
        ...
      </Group>
    </Container>
  );
}
