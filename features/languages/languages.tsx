'use client';

import React from 'react';
import { Title, List, ListItem, Text } from '@mantine/core';

export function Languages() {
  return (
    <>
      <Title order={3} mb="sm">
        Languages
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <Text fw="bold" span>
            Icelandic
          </Text>
        </ListItem>
        <ListItem>
          <Text fw="bold" span>
            English
          </Text>
        </ListItem>
      </List>
    </>
  );
}
