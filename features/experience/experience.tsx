'use client';

import { Title, List, ListItem, Anchor, Text } from '@mantine/core';

export function Experience() {
  return (
    <>
      <Title order={3} mb="sm">
        Experience
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://advania.is" target="_blank">
                Advania
              </Anchor>
            </ListItem>
            <ListItem>Senior Frontend Developer</ListItem>
            <ListItem>2016 - 2024</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://www.ru.is" target="_blank">
                Reykjavík University
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                Teaching Assistant
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                2016
              </Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Text fw="bold" span>
                Outcome
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                Technician
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                2012 - 2014
              </Text>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  );
}
