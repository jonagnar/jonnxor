'use client';

import { useTranslations } from 'next-intl';
import { Container, Grid, GridCol, Space, Divider, Group, Title, Tooltip } from '@mantine/core';

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

  return (
    <Container component="section" className={classes.page}>
      <Grid className={classes.grid}>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.left}>
          <Group component="header" className={classes.header}>
            <Title order={2} className={classes.title}>
              {t('home.h2')}
            </Title>
            <Tooltip label={t('toolbar.language')} className={classes.tooltip}>
              <LocaleToggle />
            </Tooltip>
          </Group>
          <Space h="lg" className={classes.space} />
          <GetInTouch />
          <Divider my="md" className={classes.divider} />
          <Skills />
          <Divider my="md" className={classes.divider} />
          <Languages />
          <Divider my="md" className={classes.divider} />
          <Summary />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.right}>
          <Selfie visibleFrom="xs" />

          <Space h="lg" visibleFrom="xs" />
          <Divider my="md" className={classes.divider} hiddenFrom="xs" />

          <Education />
          <Divider my="md" className={classes.divider} />
          <Experience />
        </GridCol>
      </Grid>
      <Social className={classes.social} />
    </Container>
  );
}

export default HomeLayout;