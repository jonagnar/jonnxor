'use client';

import cx from 'clsx';
import Image from 'next/image';
import { Group, Button, ActionIcon, Stack, Text } from '@mantine/core';
import { IconShare, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import { Link } from '@/navigation';

import alfred from '@/public/alfred.png';

import classes from './footer.module.css';

export function Footer() {
  return (
    <Group justify="space-between" gap="xl" className={classes.footer}>
      <Button
        component={Link}
        href="/"
        variant="subtle"
        className={cx(classes.item, classes.button)}
      >
        <Image src={alfred} alt="Alfreð" sizes="100vw" className={classes.alfred} />
      </Button>
      <Group className={classes.wrapper}>
        <Stack align="center">
          <ActionIcon
            component={Link}
            href="/"
            variant="filled"
            className={cx(classes.item, classes.action)}
          >
            <IconBrandLinkedin className={classes.icon} stroke={1.5} />
          </ActionIcon>
          <Text>LinkedIn</Text>
        </Stack>
        <Stack align="center">
          <ActionIcon
            component={Link}
            href="/"
            variant="filled"
            className={cx(classes.item, classes.action)}
          >
            <IconBrandGithub className={classes.icon} stroke={1.5} />
          </ActionIcon>
          <Text>Github</Text>
        </Stack>
        <Stack align="center">
          <ActionIcon
            component={Link}
            href="/"
            variant="filled"
            className={cx(classes.item, classes.action)}
          >
            <IconShare className={classes.icon} stroke={1.5} />
          </ActionIcon>
          <Text>Share</Text>
        </Stack>
      </Group>
    </Group>
  );
}
