'use client';

import { useTranslations } from 'next-intl';
import { Box, Stack, Title, Text } from '@mantine/core';

export function Summary() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('summary.title')}
      </Title>
      <Stack gap="xs">
        <Text>{t('summary.p1')}</Text>
        <Text>{t('summary.p2')}</Text>
        <Text>{t('summary.p3')}</Text>
        <Text>{t('summary.p4')}</Text>
      </Stack>
    </Box>
  );
}

export default Summary;
