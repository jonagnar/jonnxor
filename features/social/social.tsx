'use client';

import { type GroupProps, Group, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

export type SocialProps = GroupProps & {};

export function Social({ className, ...props }: SocialProps) {
  return (
    <Group my="xl" gap="xl" wrap="nowrap" justify="space-around" {...props}>
      <ActionIcon
        size={64}
        radius={64}
        variant="filled"
        component="a"
        href="https://www.linkedin.com/in/jonagnar/"
        target="_blank"
      >
        <IconBrandLinkedin style={{ width: '70%', height: '70%' }} />
      </ActionIcon>
      <ActionIcon
        size={64}
        radius={64}
        variant="filled"
        component="a"
        href="https://github.com/jonagnar"
        target="_blank"
      >
        <IconBrandGithub style={{ width: '70%', height: '70%' }} />
      </ActionIcon>
    </Group>
  );
}

export default Social;
