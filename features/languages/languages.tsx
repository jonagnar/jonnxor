'use client';

import { Title, Breadcrumbs, Text } from '@mantine/core';

import classes from './languages.module.css';

const languages = ['Icelandic', 'English'];

export function Languages() {
  return (
    <div className={classes.wrapper}>
      <Title order={3}>Languages</Title>
      <Breadcrumbs separator="•" separatorMargin="md" mt="xs" style={{ flexWrap: 'wrap' }}>
        {languages.map((language, index) => (
          <Text key={index}>{language}</Text>
        ))}
      </Breadcrumbs>
    </div>
  );
}
