'use client';

import { AppShellMain, Container, Title } from '@mantine/core';

import classes from './main.module.css';

export function Main({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <AppShellMain className={classes.main}>
      {title && (
        <Container mb="md">
          <Title order={2}>{title}</Title>
        </Container>
      )}
      {children}
    </AppShellMain>
  );
}
