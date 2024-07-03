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

/* Ég er prinsipp maður sem trúir því að maður verði að lifa með ákvörðunum sínum, er mjög vandvirkur og tek lífið almennt einn dag í einu, hef alltaf reynt að vera fyrirmyndarborgari og ávalt í leit að tækifærum við að bæta mína hæfni, þekkingu, eða önnur skilningarvit. */
