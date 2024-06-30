'use client';

import { useTranslations } from 'next-intl';
import { type BoxProps, Box, Stack, Title, Text, Anchor } from '@mantine/core';
import { IconMasksTheater, IconCake, IconAt, IconPhone, IconMapPin } from '@tabler/icons-react';

import { ContactIcon } from '@/features/contact-icons/contact-icons';

import classes from './get-in-touch.module.css';

export type GetInTouchProps = BoxProps & {};

export function GetInTouch({ ...props }: GetInTouchProps) {
  const t = useTranslations();

  return (
    <Box pb="xs" {...props}>
      <Title order={3} textWrap="wrap">
        {t('contact.title')}
      </Title>
      <Text size="xl" mb="sm">
        {t('contact.subtitle')}
      </Text>
      <Stack gap="sm">
        <ContactIcon
          icon={<IconAt className={classes.icon} />}
          label={t('contact.email-label')}
          input={<Anchor href="mailto:jonnxor@gmail.com">{t('contact.email-value')}</Anchor>}
        />
        <ContactIcon
          icon={<IconPhone className={classes.icon} />}
          label={t('contact.phone-label')}
          input={<Anchor href="tel:+3548661321">{t('contact.phone-value')}</Anchor>}
        />
        <ContactIcon
          icon={<IconMapPin className={classes.icon} />}
          label={t('contact.address-label')}
          input={
            <Anchor href="https://maps.app.goo.gl/dJrgoEEvLkn4oVnL9" target="_blank">
              {t('contact.address-value')}
            </Anchor>
          }
        />
        <ContactIcon
          icon={<IconMasksTheater className={classes.icon} />}
          label={t('contact.personality-label')}
          input={
            <Anchor href="https://www.16personalities.com/infj-personality" target="_blank">
              {t('contact.personality-value')}
            </Anchor>
          }
        />
        <ContactIcon
          icon={<IconCake className={classes.icon} />}
          label={t('contact.birthday-label')}
          input={t('contact.birthday-value')}
        />
      </Stack>
    </Box>
  );
}

export default GetInTouch;
