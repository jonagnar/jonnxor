'use client';

import { useMediaQuery } from '@mantine/hooks';
import { useTranslations } from 'next-intl';
import { Container, Grid, GridCol, Space, Group, Title, Tooltip } from '@mantine/core';

import { Selfie } from '@/features/selfie/selfie';
import { Skills } from '@/features/skills/skills';
import { Social } from '@/features/social/social';
import { Summary } from '@/features/summary/summary';
import { Languages } from '@/features/languages/languages';
import { Education } from '@/features/education/education';
import { Experience } from '@/features/experience/experience';
import { GetInTouch } from '@/features/get-in-touch/get-in-touch';
import { LocaleToggle } from '@/features/locale-toggle/locale-toggle';

import classes from './home-layout.module.css';

export function HomeLayout() {
  const t = useTranslations();
  const mantineBreakpointXS = useMediaQuery('(min-width: 36em)');

  return (
    <Container component="section" className={classes.page}>
      <Group component="header" mb="lg" className={classes.header}>
        <Title order={2} className={classes.title}>
          {t('home.h2')}
        </Title>
        <Tooltip label={t('toolbar.language')} className={classes.tooltip}>
          <LocaleToggle />
        </Tooltip>
      </Group>

      <Grid gutter={0}>
        <GridCol span={{ base: 12, xs: 6 }} order={2} offset={mantineBreakpointXS ? 1 : 0}>
          <GetInTouch />
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }} order={1} visibleFrom="xs">
          <Selfie />
          <Space h="md" visibleFrom="xs" />
        </GridCol>
      </Grid>
      <Grid gutter={0}>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.right}>
          <Space h="md" hiddenFrom="xs" />
          <Summary />
          <Space h="md" />
          <Skills />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.left}>
          <Space h="md" hiddenFrom="xs" />
          <Experience />
          <Space h="md" />
          <Education />
          <Space h="md" />
          <Languages />
        </GridCol>
      </Grid>

      <Social className={classes.social} />
    </Container>
  );
}

export default HomeLayout;
