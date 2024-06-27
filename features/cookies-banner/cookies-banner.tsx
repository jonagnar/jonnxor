'use client';

import { useEffect } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { Button, Paper, Text, Group, Dialog, Title } from '@mantine/core';

import { acceptCookies, declineCookies } from '@/app/actions';

import classes from './cookies-banner.module.css';

export function CookiesBanner() {
  const [cookiePolicy, setCookiePolicy] = useLocalStorage<'accepted' | 'denied'>({
    key: 'cookie-policy',
    defaultValue: 'denied',
  });

  useEffect(() => {
    cookiePolicy === 'accepted' ? acceptCookies() : declineCookies();
  }, [cookiePolicy]);

  const isOpened = cookiePolicy === 'denied';

  const accept = () => {
    setCookiePolicy('accepted');
  };

  const reject = () => {
    setCookiePolicy('denied');
  };

  return (
    <Dialog opened={isOpened} withCloseButton={false} className={classes.banner}>
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
