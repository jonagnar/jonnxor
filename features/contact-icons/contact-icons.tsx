'use client';

import React from 'react';
import { type GroupProps, Box, Group, Text } from '@mantine/core';

export type ContactIconProps = GroupProps & {
  icon: React.ReactNode;
  label: string;
  input: React.ReactNode;
};

export function ContactIcon({ icon, label, input, ...props }: ContactIconProps) {
  return (
    <Group wrap="nowrap" {...props}>
      {icon}
      <Box>
        <Text fw="bold" size="xs">
          {label}
        </Text>
        {input}
      </Box>
    </Group>
  );
}
