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
        {t.rich('summary.text', {
          p: (chunks) => <Text>{chunks}</Text>,
        })}
      </Stack>
    </Box>
  );
}

export default Summary;
