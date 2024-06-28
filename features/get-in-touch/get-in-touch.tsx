'use client';

import { useTranslations } from 'next-intl';
import { type BoxProps, Box, Stack, Title, Text, Anchor } from '@mantine/core';
import { IconMasksTheater, IconCake, IconAt, IconPhone, IconMapPin } from '@tabler/icons-react';

import { ContactIcon } from '@/features/contact-icons/contact-icons';

export type GetInTouchProps = BoxProps & {};

export function GetInTouch({ ...props }: GetInTouchProps) {
  const t = useTranslations();

  return (
    <Box {...props}>
      <Title order={3}>{t('contact.title')}</Title>
      <Text size="xl" mb="sm">
        {t('contact.subtitle')}
      </Text>
      <Stack gap="sm">
        <ContactIcon
          icon={IconAt}
          label={t('contact.email-label')}
          input={<Anchor href="mailto:jonnxor@gmail.com">{t('contact.email-value')}</Anchor>}
        />
        <ContactIcon
          icon={IconPhone}
          label={t('contact.phone-label')}
          input={<Anchor href="tel:+3548661321">{t('contact.phone-value')}</Anchor>}
        />
        <ContactIcon
          icon={IconMapPin}
          label={t('contact.address-label')}
          input={
            <Anchor href="https://maps.app.goo.gl/dJrgoEEvLkn4oVnL9" target="_blank">
              {t('contact.address-value')}
            </Anchor>
          }
        />
        <ContactIcon
          icon={IconMasksTheater}
          label={t('contact.personality-label')}
          input={
            <Anchor href="https://www.16personalities.com/infj-personality" target="_blank">
              {t('contact.personality-value')}
            </Anchor>
          }
        />
        <ContactIcon
          icon={IconCake}
          label={t('contact.birthday-label')}
          input={t('contact.birthday-value')}
        />
      </Stack>
    </Box>
  );
}

export default GetInTouch;
