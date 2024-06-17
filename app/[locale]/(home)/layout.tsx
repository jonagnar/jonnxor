import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Container, Grid, GridCol, Text } from '@mantine/core';

import { Social } from '@/components/social';
import { PageLayout } from '@/components/page-layout';

export default function Layout({
  params: { locale },
  children,
  education,
  experience,
  contribution,
}: {
  params: { locale: string };
  children: React.ReactNode;
  education: React.ReactNode;
  experience: React.ReactNode;
  contribution: React.ReactNode;
  social: React.ReactNode;
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <PageLayout title={t('heading')}>
      <Container>
        <Grid gutter="xl">
          <GridCol span={{ base: 12, xs: 8 }} visibleFrom="xs">
            <Text>{t('text')}</Text>
          </GridCol>
          <GridCol span={{ base: 12, xs: 4 }}>{children}</GridCol>
        </Grid>

        <Grid gutter="xl">
          <GridCol span={{ base: 12, xs: 4 }}>{education}</GridCol>
          <GridCol span={{ base: 12, xs: 4 }}>{experience}</GridCol>
          <GridCol span={{ base: 12, xs: 4 }}>{contribution}</GridCol>
        </Grid>

        <Social />
      </Container>
    </PageLayout>
  );
}
