'use client';

import { useTranslations } from 'next-intl';
import { Box, Title, Text } from '@mantine/core';

export function Summary() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('summary.title')}
      </Title>
      <Text ml="md">{t('summary.text')}</Text>
      <Text ml="md">{t('summary.text')}</Text>
      <Text ml="md">{t('summary.text')}</Text>
      <Text ml="md">{t('summary.text')}</Text>
      <Text ml="md">{t('summary.text')}</Text>
      <Text ml="md">{t('summary.text')}</Text>
    </Box>
  );
}

export default Summary;
