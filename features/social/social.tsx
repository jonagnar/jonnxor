'use client';

import { type GroupProps, Group, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconShare } from '@tabler/icons-react';

export type SocialProps = GroupProps & {};

export function Social({ className, ...props }: SocialProps) {
  const share = () => null;

  return (
    <Group my="xl" wrap="nowrap" justify="space-around" {...props}>
      <ActionIcon
        component="a"
        href="https://www.linkedin.com/in/jonagnar/"
        target="_blank"
        size="xl"
        radius="xl"
      >
        <IconBrandLinkedin />
      </ActionIcon>
      <ActionIcon
        component="a"
        href="https://github.com/jonagnar"
        target="_blank"
        size="xl"
        radius="xl"
      >
        <IconBrandGithub />
      </ActionIcon>
      <ActionIcon size="xl" radius="xl" onClick={share}>
        <IconShare />
      </ActionIcon>
    </Group>
  );
}

export default Social;
