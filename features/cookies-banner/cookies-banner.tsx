'use client';

import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Paper, Title, Text, Group, Button } from '@mantine/core';

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
  }, []);

  const accept = () => {
    acceptCookies();
    close();
  };

  const reject = () => {
    declineCookies();
    close();
  };

  return (
    <Dialog opened={opened} withCloseButton={false} className={classes.banner}>
      <Paper p="lg" radius="md">
        <Title order={2} size="xs" mb="xs">
          Cookies
        </Title>
        <Text size="xs">
          This website uses third party libraries to collect anonymous usage statistics such as the
          number of visitors to the site. By clicking Accept, you agree to the use of these tools.
        </Text>
        <Group justify="flex-end" mt="md">
          <Button variant="default" size="xs" onClick={reject}>
            Reject All
          </Button>
          <Button variant="outline" size="xs" onClick={accept}>
            Accept All
          </Button>
        </Group>
      </Paper>
    </Dialog>
  );
}
