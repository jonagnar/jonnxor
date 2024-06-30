'use client';

import { useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';
import { Dialog, Title, Text, Group, Button } from '@mantine/core';

import { hasCookies, acceptCookies, declineCookies } from '@/app/actions';

import classes from './cookies-banner.module.css';

export function CookiesBanner() {
  const t = useTranslations();
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
      <Title order={2}>{t('cookies.title')}</Title>
      <Text>{t('cookies.text')}</Text>
      <Group justify="flex-end">
        <Button variant="default" onClick={reject}>
          {t('cookies.reject')}
        </Button>
        <Button variant="outline" onClick={accept} className={classes.button}>
          {t('cookies.accept')}
        </Button>
      </Group>
    </Dialog>
  );
}

export default CookiesBanner;
