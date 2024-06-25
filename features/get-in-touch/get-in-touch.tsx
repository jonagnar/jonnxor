'use client';

import { Title, Text } from '@mantine/core';

import { ContactIconsList } from '@/features/contact-icons/contact-icons';

import classes from './get-in-touch.module.css';

export function GetInTouch() {
  return (
    <div>
      <Title order={3}>Jón Agnar Stefánsson</Title>
      <Text>Web Developer</Text>
      <div className={classes.contact}>
        <ContactIconsList />
      </div>
    </div>
  );
}
