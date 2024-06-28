'use client';

import React from 'react';
import { type Icon } from '@tabler/icons-react';
import { rem, type GroupProps, Box, Group, Text } from '@mantine/core';

export type ContactIconProps = GroupProps & {
  icon: Icon;
  label: string;
  input: React.ReactNode;
};

export function ContactIcon({ icon: Icon, label, input, ...props }: ContactIconProps) {
  return (
    <Group wrap="nowrap" {...props}>
      <Icon style={{ width: rem(24), height: rem(24) }} />
      <Box>
        <Text size="sm" fs="italic">
          {label}
        </Text>
        {input}
      </Box>
    </Group>
  );
}

export default ContactIcon;
