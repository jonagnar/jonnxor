'use client';

import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button, Paper, Text, Group, Dialog, Title } from '@mantine/core';

import { getCookiePolicyAccept, setCookiePolicyAccept, deleteCookiePolicy } from '@/app/actions';

export function CookiesBanner() {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const toggle = async () => {
      const show = await getCookiePolicyAccept();
      if (!show) open();
    };

    toggle();
  }, []);

  const accept = () => {
    close();
    setCookiePolicyAccept();
  };

  const reject = () => {
    close();
    deleteCookiePolicy();
  };

  return (
    <Dialog opened={opened} withCloseButton={false}>
      <Paper p="lg" radius="md">
        <Title component="div" order={2} size="xs" mb="xs">
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
