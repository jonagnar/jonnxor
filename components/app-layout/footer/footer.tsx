'use client';

import { MouseEvent } from 'react';
import { Container, Group, Text } from '@mantine/core';

import { Link } from '@/navigation';
import { Toolbar } from '@/components/toolbar/toolbar';

import classes from './footer.module.css';

export function Footer() {
  function blur(e: MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.blur();
  }

  return (
    <Container className={classes.container}>
      <Group className={classes.wrapper}>
        <Toolbar className={classes.toolbar} />
        <Group className={classes.breadcrumbs}>
          <Text className={classes.link} component={Link} href="/" onClick={blur}>
            JonnXor.is
          </Text>
        </Group>
      </Group>
    </Container>
  );
}
