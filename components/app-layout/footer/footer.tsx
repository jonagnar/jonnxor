'use client';

import { MouseEvent } from 'react';
import { Container, Group, Text } from '@mantine/core';

import { Link, usePathname } from '@/navigation';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './footer.module.css';

export function Footer() {
  const pathname = usePathname();

  function blur(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.blur();
  }

  return (
    <Container className={classes.container}>
      <Group className={classes.wrapper}>
        <Group className={classes.toolbar}>
          <ColorToggle />
          {pathname === '/' ? <Print /> : null}
          <LocaleToggle />
        </Group>
        <Group className={classes.breadcrumbs}>
          <Text className={classes.link} component={Link} href="/" onClick={blur}>
            JonnXor.is
          </Text>
        </Group>
      </Group>
    </Container>
  );
}
