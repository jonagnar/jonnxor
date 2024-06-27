'use client';

import { Title, Breadcrumbs, Text } from '@mantine/core';
import { Fragment } from 'react';

const skills = ['Next.js', 'React.js', 'TypeScript'];

export function Skills() {
  return (
    <div>
      <Title order={3}>Top Skills</Title>
      <Breadcrumbs separator="•" separatorMargin="md" mt="xs" style={{ flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Fragment key={index}>
            <Text>{skill}</Text>
          </Fragment>
        ))}
      </Breadcrumbs>
    </div>
  );
}
