'use client';

import { useTranslations } from 'next-intl';
import { Container, Grid, GridCol, Box, Space, Divider, Group, Title } from '@mantine/core';

import { Selfie } from '@/features/selfie/selfie';
import { Skills } from '@/features/skills/skills';
import { Social } from '@/features/social/social';
import { Summary } from '@/features/summary/summary';
import { Languages } from '@/features/languages/languages';
import { Education } from '@/features/education/education';
import { GetInTouch } from '@/features/get-in-touch/get-in-touch';
import { Experience } from '@/features/experience/experience';

import classes from './home-layout.module.css';

export function HomeLayout() {
  const t = useTranslations();

  return (
    <Container h="100%">
      <Grid gutter={60}>
        <GridCol span={{ base: 12, xs: 7 }}>
          <Box visibleFrom="xs">
            <Selfie />
          </Box>
          <Space h="xl" />
          <Education />
          <Divider my="md" />
          <Experience />
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }}>
          <Group justify="flex-end">
            <Title order={2}>{t('home.h2')}</Title>
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
      <Social className={classes.social} />
    </Container>
  );
}

export default HomeLayout;
