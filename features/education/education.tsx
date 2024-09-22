'use client';

import { Title, List, ListItem, Anchor, Text } from '@mantine/core';

export function Education() {
  return (
    <>
      <Title order={3} mb="sm">
        Education
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://www.ru.is" target="_blank">
                Reykjavík University
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm">Bachelor Degree in Computer Science</Text>
            </ListItem>
            <ListItem>
              <Text size="sm">2016</Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://tskoli.is" target="_blank">
                Technical College of Iceland
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm">Associate Degree in Computer Studies</Text>
            </ListItem>
            <ListItem>
              <Text size="sm">2013</Text>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  );
}
