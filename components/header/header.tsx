'use client';

import { MouseEvent } from 'react';
import {
  type MantineSize,
  Title,
  Group,
  Burger,
  Container,
  ActionIcon,
  AppShellHeader,
} from '@mantine/core';

import { Link, usePathname } from '@/navigation';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './header.module.css';

export type Props = {
  opened: boolean;
  toggle: () => void;
  breakpoint: MantineSize;
};

export function Header({ opened, toggle, breakpoint }: Props) {
  const pathname = usePathname();

  function blur(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.blur();
  }

  return (
    <AppShellHeader className={classes.header}>
      <Container h="100%">
        <Group h="100%" wrap="nowrap">
          <Burger size="sm" opened={opened} onClick={toggle} hiddenFrom={breakpoint} />
          <Group justify="space-between" style={{ flex: 1 }}>
            <Link href="/" className={classes.logo} onClick={blur}>
              <Group wrap="nowrap">
                <ActionIcon size={30} radius={30} component="div" className={classes.icon}>
                  JA
                </ActionIcon>
                <Title order={1} size={30} lh={1}>
                  JonnXor.is
                </Title>
              </Group>
            </Link>
            <Group ml="xl" gap="md" visibleFrom={breakpoint}>
              <LocaleToggle />
              {pathname === '/' ? <Print /> : null}
              <ColorToggle />
            </Group>
          </Group>
        </Group>
      </Container>
    </AppShellHeader>
  );
}
