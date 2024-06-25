'use client';

import clsx from 'clsx';
import { type GroupProps, Group, ActionIcon, Button } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconShare } from '@tabler/icons-react';

import { Image } from '@/components/image/image';

import alfred from '@/public/alfred.png';
import classes from './social.module.css';

export type SocialProps = GroupProps & {};

export function Social({ className, ...props }: SocialProps) {
  return (
    <Group my="xl" wrap="nowrap" {...props} className={clsx(classes.social, className)}>
      <Group my="xl" justify="space-between" style={{ flex: 1 }}>
        <Button size="xl" py="xs" px="xl" variant="subtle">
          <Image src={alfred} alt="Alfreð" style={{ flex: 1, maxHeight: '100%' }} />
        </Button>
        <Group ml="xl">
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/jonagnar/"
            size="xl"
            radius="xl"
          >
            <IconBrandLinkedin />
          </ActionIcon>
          <ActionIcon component="a" href="https://github.com/jonagnar" size="xl" radius="xl">
            <IconBrandGithub />
          </ActionIcon>
          <ActionIcon component="a" href="#" size="xl" radius="xl">
            <IconShare />
          </ActionIcon>
        </Group>
      </Group>
    </Group>
  );
}

export default Social;
