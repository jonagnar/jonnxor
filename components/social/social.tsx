'use client';

import Image from 'next/image';
import { Group, ActionIcon, Button } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

import { Link } from '@/navigation';

import alfred from '@/public/IS-alfred-logo-orange.png';
import classes from './social.module.css';

export function Social() {
  return (
    <Group gap="xl" my={60} className={classes.social}>
      <ActionIcon component={Link} href="/" variant="filled" size="xl" radius="xl">
        <IconBrandFacebook stroke={1.5} />
      </ActionIcon>
      <ActionIcon component={Link} href="/" variant="filled" size="xl" radius="xl">
        <IconBrandLinkedin stroke={1.5} />
      </ActionIcon>
      <ActionIcon component={Link} href="/" variant="filled" size="xl" radius="xl">
        <IconBrandGithub stroke={1.5} />
      </ActionIcon>
      <Button component={Link} href="/" variant="subtle" radius="xl" className={classes.alfred}>
        <Image
          src={alfred}
          alt="Alfreð"
          sizes="100vw"
          style={{
            width: '100%',
            height: '24px',
          }}
        />
      </Button>
    </Group>
  );
}
