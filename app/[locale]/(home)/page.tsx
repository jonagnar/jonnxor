import { Container, Grid, GridCol, Group, Title, Text } from '@mantine/core';
import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import { Selfie } from '@/features/selfie/selfie';
import { Social } from '@/features/social/social';

export type Props = { params: { locale: string } };

export default async function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <Container h="100%">
      <Grid>
        <GridCol span={{ base: 12, xs: 7 }} visibleFrom="xs">
          <Selfie />
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Group justify="flex-end">
            <Title order={2}>{t('h2')}</Title>
          </Group>
          <Title order={3}>{t('contact.h3')}</Title>
          <Text>{t('contact.p')}</Text>
        </GridCol>
      </Grid>

      <Grid>
        <GridCol span={{ base: 12, xs: 7 }}>
          <Title order={3}>{t('education.h3')}</Title>
          <Text>{t('education.p')}</Text>
          <Title order={3}>{t('experience.h3')}</Title>
          <Text>{t('experience.p')}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Title order={3}>{t('summary.h3')}</Title>
          <Text>{t('summary.p')}</Text>
        </GridCol>
      </Grid>

      <Social />
    </Container>
  );
}
