'use client';

import { MouseEvent } from 'react';
import { Title, Group, Burger, Container, Avatar } from '@mantine/core';

import { Link } from '@/navigation';
import { Toolbar } from '@/components/toolbar/toolbar';
import { useNavbarContext } from '@/context/navbar';

import classes from './header.module.css';

export function Header() {
  const [opened, { toggle }] = useNavbarContext();

  function click() {
    toggle();
  }

  function blur(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.blur();
  }

  return (
    <Container className={classes.container}>
      <Group className={classes.header}>
        <Burger opened={opened} onClick={click} className={classes.burger} />
        <Group className={classes.wrapper}>
          <Link href="/" onClick={blur} className={classes.link}>
            <Group className={classes.logo}>
              <Avatar variant="filled" className={classes.avatar}>
                JA
              </Avatar>
              <Title order={1} className={classes.title}>
                JonnXor.is
              </Title>
            </Group>
          </Link>
          <Toolbar className={classes.toolbar} />
        </Group>
      </Group>
    </Container>
  );
}
