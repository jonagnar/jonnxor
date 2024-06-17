'use client';

import Image from 'next/image';
import { ActionIcon, Button } from '@mantine/core';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';

import { Link } from '@/navigation';

import alfred from '@/public/IS-alfred-logo-orange.png';
import classes from './social.module.css';

export function Social() {
  return (
    <>
      <ActionIcon component={Link} href="/" variant="filled" size={30} radius={30}>
        <IconBrandFacebook className={classes.icon} stroke={1.5} />
      </ActionIcon>
      <ActionIcon component={Link} href="/" variant="filled" size={30} radius={30}>
        <IconBrandLinkedin className={classes.icon} stroke={1.5} />
      </ActionIcon>
      <ActionIcon component={Link} href="/" variant="filled" size={30} radius={30}>
        <IconBrandGithub className={classes.icon} stroke={1.5} />
      </ActionIcon>
      <Button component={Link} href="/" variant="subtle" radius={30} className={classes.alfred}>
        <Image
          src={alfred}
          alt="Alfreð"
          sizes="100vw"
          style={{
            width: '100%',
            height: '22px',
          }}
        />
      </Button>
    </>
  );
}
