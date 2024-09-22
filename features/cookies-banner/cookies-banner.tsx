'use client';

import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Title, Text, Group, Button } from '@mantine/core';

import { hasCookies, acceptCookies, declineCookies } from '@/app/actions';

import classes from './cookies-banner.module.css';

export function CookiesBanner() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const isOpened = async () => {
      const analytics = await hasCookies();
      if (!analytics) {
        open();
      }
    };

    isOpened();
  }, [open]);

  const accept = () => {
    acceptCookies();
    close();
  };

  const reject = () => {
    declineCookies();
    close();
  };

  return (
    <Dialog opened={opened} withBorder withCloseButton={false} className={classes.dialog}>
      <Title order={2} mb="sm">
        Cookies!
      </Title>
      <Text>This website has cookies.</Text>
      <Group mt="sm" justify="flex-end">
        <Button variant="default" onClick={reject}>
          Resist your fate
        </Button>
        <Button variant="outline" onClick={accept} className={classes.button}>
          Accept your fate
        </Button>
      </Group>
    </Dialog>
  );
}
