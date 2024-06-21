'use client';

import { useTranslations } from 'next-intl';
import { Container, Grid, GridCol, Text, Box, Title } from '@mantine/core';

import { ProfilePhoto } from '@/components/profile-photo/profile-photo';

import { Footer } from './footer/footer';

import classes from './page-layout.module.css';

export type Props = {
  children: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  const t = useTranslations('home');

  return (
    <Container component="section" className={classes.section}>
      <Box className={classes.content}>
        <Grid className={classes.grid}>
          <GridCol span={{ base: 12, xs: 7 }} className={classes.avatar}>
            <ProfilePhoto />
          </GridCol>
          <GridCol span={{ base: 12, xs: 5 }}>
            <Title order={2}>CV</Title>
            <Title order={3}>Personal Info</Title>
            {children}
            <Title order={3}>Skills</Title>
            <Text>{t('text')}</Text>
          </GridCol>
        </Grid>

        <Grid className={classes.grid}>
          <GridCol span={{ base: 12, xs: 7 }}>
            <Title order={3}>Education</Title>
            <Text>{t('text')}</Text>
            <Title order={3}>Experience</Title>
            <Text>{t('text')}</Text>
          </GridCol>
          <GridCol span={{ base: 12, xs: 5 }}>
            <Title order={3}>Summary</Title>
            <Text>{t('text')}</Text>
          </GridCol>
        </Grid>
      </Box>

      <Box component="footer" className={classes.footer}>
        <Footer />
      </Box>
    </Container>
  );
}
