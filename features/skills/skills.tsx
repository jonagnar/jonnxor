'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Box, Breadcrumbs, Title, Text } from '@mantine/core';

export function Skills() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('skills.title')}
      </Title>
      <Breadcrumbs separator="•" separatorMargin="sm" style={{ flexWrap: 'wrap' }}>
        <Text>{t('skills.react')}</Text>
        <Text>{t('skills.next')}</Text>
        <Text>{t('skills.typescript')}</Text>
      </Breadcrumbs>
    </Box>
  );
}

export default Skills;
