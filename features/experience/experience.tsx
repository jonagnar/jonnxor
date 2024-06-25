'use client';

import { List, ListItem, Title } from '@mantine/core';

export function Experience() {
  return (
    <div>
      <Title order={3}>Experience</Title>
      <List listStyleType="none" mt="xs">
        <ListItem>
          Advania (2016 - 2024)
          <List withPadding listStyleType="none">
            <ListItem>Web Developer</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Reykjavik University (2016)
          <List withPadding listStyleType="none">
            <ListItem>Teaching Assistant</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Skeljungur (2015)
          <List withPadding listStyleType="none">
            <ListItem>Starfsmaður á plani</ListItem>
          </List>
        </ListItem>
        <ListItem>
          Outcome Hugbúnaðarhús (2012 - 2014)
          <List withPadding listStyleType="none">
            <ListItem>Technician</ListItem>
          </List>
        </ListItem>
      </List>
    </div>
  );
}
