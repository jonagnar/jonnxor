'use client';

import { useTranslations } from 'next-intl';
import { Box, Title, Text } from '@mantine/core';

export function Summary() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3}>{t('summary.h3')}</Title>
      <Text>{t('summary.p')}</Text>
    </Box>
  );
}
