'use client';

import { forwardRef } from 'react';
import {
  createPolymorphicComponent,
  type GroupProps,
  Group,
  Button,
  Image,
  ActionIcon,
} from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconShare } from '@tabler/icons-react';

import alfred from '@/public/alfred.png';
import classes from './social.module.css';

export type SocialProps = GroupProps & {};

export const Social = createPolymorphicComponent<'div', SocialProps>(
  forwardRef<HTMLDivElement, SocialProps>(({ ...props }, ref) => (
    <Group component="div" my="xl" wrap="nowrap" {...props} ref={ref} className={classes.social}>
      <Group my="xl" justify="space-between" style={{ flex: 1 }}>
        <Button size="xl" py="xs" px="xl" variant="subtle">
          <Image src={alfred.src} alt="Alfreð" style={{ flex: 1, maxHeight: '100%' }} />
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
  ))
);

export default Social;
