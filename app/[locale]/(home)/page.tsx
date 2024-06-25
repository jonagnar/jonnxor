import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { Container, Grid, GridCol, Group, Title, Box, Divider } from '@mantine/core';

import { Social } from '@/features/social/social';
import { Selfie } from '@/features/selfie/selfie';
import { Skills } from '@/features/skills/skills';
import { Education } from '@/features/education/education';
import { Experience } from '@/features/experience/experience';
import { GetInTouch } from '@/features/get-in-touch/get-in-touch';

import { Languages } from '@/features/languages/languages';
import { Summary } from '@/features/summary/summary';

export type Props = { params: { locale: string } };

export default async function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <Container h="100%">
      <Grid gutter="xl">
        <GridCol span={{ base: 12, xs: 7 }}>
          <Box visibleFrom="xs">
            <Selfie />
          </Box>
          <Education />
          <Divider my="md" />
          <Experience />
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Group justify="flex-end">
            <Title order={2}>{t('h2')}</Title>
          </Group>
          <GetInTouch />
          <Divider my="md" />
          <Skills />
          <Divider my="md" />
          <Languages />
          <Divider my="md" />
          <Summary />
        </GridCol>
      </Grid>
      <Social />
    </Container>
  );
}
