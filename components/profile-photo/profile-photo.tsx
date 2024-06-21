'use client';

import cx from 'clsx';
import { Box, Center, Avatar, TooltipFloating } from '@mantine/core';

import { Link } from '@/navigation';

import classes from './profile-photo.module.css';

export type Props = {
  className?: string;
};

export function ProfilePhoto({ className }: Props) {
  return (
    <Box className={classes.container}>
      <Center className={classes.wrapper}>
        <TooltipFloating label="Click me!" className={classes.tooltip}>
          <Link href="/" className={classes.link}>
            <Avatar
              src="profile.jpg"
              alt="Jón Agnar Stefánsson"
              className={cx(classes.avatar, className)}
            >
              JA
            </Avatar>
            {/* It's possible to put icon here on hover */}
          </Link>
        </TooltipFloating>
      </Center>
    </Box>
  );
}
