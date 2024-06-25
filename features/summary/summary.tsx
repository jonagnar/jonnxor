'use client';

import { Title, Text } from '@mantine/core';

import classes from './summary.module.css';

export function Summary() {
  return (
    <div className={classes.wrapper}>
      <Title order={3}>Experience</Title>
      <Text>
        Experienced computer scientist specialized in frontend web development. Technology Stack:
        TypeScript, React, Next.js, and more with over eight years of industry experience
      </Text>
    </div>
  );
}
