'use client';

import cx from 'clsx';
import { Container, Center, Avatar } from '@mantine/core';

import { Link } from '@/navigation';

import classes from './profile-photo.module.css';

export type Props = {
  className?: string;
};

export function ProfilePhoto({ className }: Props) {
  return (
    <Container className={classes.container}>
      <Center className={classes.wrapper}>
        <Link href="/" className={classes.link}>
          <Avatar
            src="profile.jpg"
            alt="Jón Agnar Stefánsson"
            className={cx(classes.avatar, className)}
          >
            JA
          </Avatar>
        </Link>
      </Center>
    </Container>
  );
}
