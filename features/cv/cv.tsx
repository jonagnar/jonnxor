'use client';

import { useMediaQuery } from '@mantine/hooks';
import { Box, Grid, GridCol, Space, Group, Title } from '@mantine/core';

import { Skills } from '@/features/skills/skills';
import { Social } from '@/features/social/social';
import { Projects } from '@/features/projects/projects';
import { Languages } from '@/features/languages/languages';
import { Education } from '@/features/education/education';
import { Experience } from '@/features/experience/experience';
import { ProfilePicture } from '@/features/profile-picture/profile-picture';
import { Recommendations } from '@/features/recommendations/recommendations';
import { BasicInformation } from '@/features/basic-information/basic-information';

import classes from './cv.module.css';

export function CV() {
  const mantineBreakpointXS = useMediaQuery('(min-width: 36em)');

  return (
    <Box className={classes.cv}>
      <Group mb="lg" className={classes.header}>
        <Title order={2} className={classes.title}>
          CV
        </Title>
      </Group>

      <Grid gutter={0}>
        <GridCol span={{ base: 12, xs: 6 }} order={2} offset={mantineBreakpointXS ? 1 : 0}>
          <BasicInformation />
        </GridCol>
        <GridCol span={{ base: 12, xs: 5 }} order={1} visibleFrom="xs">
          <ProfilePicture />
          <Space className={classes.space} visibleFrom="xs" />
        </GridCol>
      </Grid>
      <Grid gutter={0}>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.right}>
          <Space className={classes.space} hiddenFrom="xs" />
          <Skills />
          <Space className={classes.space} />
          <Projects />
          <Space className={classes.space} />
          <Recommendations />
        </GridCol>
        <GridCol span={{ base: 12, xs: 6 }} className={classes.left}>
          <Space className={classes.space} hiddenFrom="xs" />
          <Experience />
          <Space className={classes.space} />
          <Education />
          <Space className={classes.space} />
          <Languages />
        </GridCol>
      </Grid>

      <Social className={classes.social} />
    </Box>
  );
}
