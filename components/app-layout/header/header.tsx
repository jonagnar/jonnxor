'use client';

import { MouseEvent } from 'react';
import { Title, Group, Burger, Container, Avatar, useComputedColorScheme } from '@mantine/core';

import { Link, usePathname } from '@/navigation';
import { toggle, selectOpened } from '@/lib/features/navbar/navbarSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './header.module.css';

export function Header() {
  const dispatch = useAppDispatch();
  const opened = useAppSelector(selectOpened);

  const pathname = usePathname();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });

  const color = computedColorScheme === 'dark' ? 'yellow' : 'blue';

  function click() {
    dispatch(toggle(!opened));
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
              <Avatar color={color} variant="filled" className={classes.avatar}>
                JA
              </Avatar>
              <Title order={1} className={classes.title}>
                JonnXor.is
              </Title>
            </Group>
          </Link>
          <Group className={classes.toolbar}>
            <LocaleToggle />
            {pathname === '/' ? <Print /> : null}
            <ColorToggle />
          </Group>
        </Group>
      </Group>
    </Container>
  );
}
