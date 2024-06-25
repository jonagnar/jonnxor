'use client';

import { List, ListItem, Title, Text } from '@mantine/core';

import classes from './education.module.css';

export function Education() {
  return (
    <div className={classes.wrapper}>
      <Title order={3}>Education</Title>
      <List listStyleType="none" mt="xs">
        <ListItem>
          <Text>Reykjavik University (2013 - 2016)</Text>
          <List withPadding listStyleType="none">
            <ListItem>Bachelor of Science • Computer Science</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Technical College of Iceland (2009 - 2013)
          <List withPadding listStyleType="none">
            <ListItem>Associate&apos;s degree • Computer Science</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
}
