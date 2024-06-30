'use client';

import { useTranslations } from 'next-intl';
import { Box, Title, Text } from '@mantine/core';

export function Summary() {
  const t = useTranslations();

  return (
    <Box pb="xs">
      <Title order={3}>{t('summary.title')}</Title>
      <Text>{t('summary.text')}</Text>
    </Box>
  );
}

export default Summary;
