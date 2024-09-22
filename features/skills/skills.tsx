'use client';

import React from 'react';
import { Box, Title, List, ListItem, Text } from '@mantine/core';

export function Skills() {
  return (
    <>
      <Box mb="sm">
        <Title order={3}>Skills</Title>
      </Box>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Dev. Tools:
            </Text>
            NodeJS, npm, git, etc.
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Web Technologies:
            </Text>
            React, React Native, Vue
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Web Frameworks:
            </Text>
            NextJS, Expo, Ionic
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              UI Frameworks:
            </Text>
            Bootstrap, Material UI, Tailwind CSS
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Programming Languages:
            </Text>
            Javascript, Typescript, C#, SQL
          </Text>
        </ListItem>
      </List>
    </>
  );
}
