'use client';

import { MouseEvent } from 'react';
import { type MantineSize, AppShellFooter, Container, Group, Text } from '@mantine/core';

import { Link } from '@/navigation';

import { Print } from '@/components/print';
import { ColorToggle } from '@/components/color-toggle';
import { LocaleToggle } from '@/components/locale-toggle';

import classes from './footer.module.css';

export type Props = {
  breakpoint: MantineSize;
};

export function Footer({ breakpoint }: Props) {
  function blur(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.blur();
  }

  return (
    <AppShellFooter className={classes.footer}>
      <Container h="100%">
        <Group h="100%" justify="space-between" wrap="nowrap">
          <Group mr="xl" gap="md" visibleFrom={breakpoint}>
            <ColorToggle />
            <Print />
            <LocaleToggle />
          </Group>
          <Group className={classes.breadcrumbs}>
            <Text component={Link} href="/" onClick={blur} className={classes.link}>
              JonnXor.is
            </Text>
          </Group>
        </Group>
      </Container>
    </AppShellFooter>
  );
}
