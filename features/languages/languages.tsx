'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Box, Breadcrumbs, Title, Text } from '@mantine/core';

export function Languages() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('languages.title')}
      </Title>
      <Breadcrumbs separator="•" separatorMargin="sm" style={{ flexWrap: 'wrap' }}>
        <Text>{t('languages.icelandic')}</Text>
        <Text>{t('languages.english')}</Text>
        <Text>{t('languages.japanese')}</Text>
      </Breadcrumbs>
    </Box>
  );
}

export default Languages;
