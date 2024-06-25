'use client';

import { Title, Breadcrumbs, Text } from '@mantine/core';

import classes from './skills.module.css';

const skills = ['React', 'NextJS', 'TypeScript'];

export function Skills() {
  return (
    <div className={classes.wrapper}>
      <Title order={3}>Top Skills</Title>
      <Breadcrumbs separator="•" separatorMargin="md" mt="xs" style={{ flexWrap: 'wrap' }}>
        {skills.map((skill, index) => (
          <Text key={index}>{skill}</Text>
        ))}
      </Breadcrumbs>
    </div>
  );
}
