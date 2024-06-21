'use client';

import { useTranslations } from 'next-intl';
import { Container, Box, Grid, GridCol, Title, Text, Group } from '@mantine/core';

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
        <Grid>
          <GridCol span={{ base: 12, xs: 7 }} className={classes.avatar}>
            {children}
          </GridCol>
          <GridCol h="100%" span={{ base: 12, xs: 5 }}>
            <Box component="header" className={classes.header}>
              <Title order={2} size={16}>
                {t('title')}
              </Title>
            </Box>
            <Title order={3}>{t('contact-information.title')}</Title>
            <Group className={classes.contact}>
              <Text>{t('contact-information.text')}</Text>
            </Group>
            <Title order={3}>{t('skills.title')}</Title>
            <Text>{t('skills.text')}</Text>
          </GridCol>
        </Grid>

        <Grid>
          <GridCol span={{ base: 12, xs: 7 }}>
            <Title order={3}>{t('education.title')}</Title>
            <Group className={classes.education}>
              <Text>{t('education.text')}</Text>
            </Group>
            <Title order={3}>{t('experience.title')}</Title>
            <Group className={classes.experience}>
              <Text>{t('experience.text')}</Text>
            </Group>
          </GridCol>
          <GridCol span={{ base: 12, xs: 5 }}>
            <Title order={3}>{t('summary.title')}</Title>
            <Text>{t('summary.text')}</Text>
          </GridCol>
        </Grid>
      </Box>

      <Box component="footer" className={classes.footer}>
        <Footer />
      </Box>
    </Container>
  );
}
