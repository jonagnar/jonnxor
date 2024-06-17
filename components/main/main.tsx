'use client';

import { AppShellMain, Container, Title, Box, Group } from '@mantine/core';

import { Social } from '@/components/social';

import classes from './main.module.css';

export function Main({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <AppShellMain className={classes.main}>
      <Box px="md" component="section" className={classes.section}>
        <Box component="header" className={classes.header}>
          <Container h="100%">
            <Group h="100%" justify="space-between">
              <Title order={2}>{title}</Title>
            </Group>
          </Container>
        </Box>

        <Box my="md" className={classes.content}>
          {children}
        </Box>

        <Box component="footer" className={classes.footer}>
          <Container h="100%">
            <Group h="100%" justify="space-around">
              <Social />
            </Group>
          </Container>
        </Box>
      </Box>
    </AppShellMain>
  );
}
