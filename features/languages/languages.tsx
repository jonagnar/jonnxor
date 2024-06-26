'use client';

import { Fragment } from 'react';
import { Title, Breadcrumbs, Text } from '@mantine/core';

const languages = ['Icelandic', 'English', 'Japanese'];

export function Languages() {
  return (
    <div>
      <Title order={3}>Languages</Title>
      <Breadcrumbs separator="•" separatorMargin="md" mt="xs" style={{ flexWrap: 'wrap' }}>
        {languages.map((language, index) => (
          <Fragment key={index}>
            <Text>{language}</Text>
          </Fragment>
        ))}
      </Breadcrumbs>
    </div>
  );
}
