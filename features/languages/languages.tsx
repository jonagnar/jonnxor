'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Box, List, ListItem, Title, Text } from '@mantine/core';

export function Languages() {
  const t = useTranslations();

  return (
    <Box>
      <Title order={3} mb="sm">
        {t('languages.title')}
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <Text fw="bold">{t('languages.icelandic')}</Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('languages.native-proficiency')}</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Text fw="bold">{t('languages.english')}</Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('languages.professional-proficiency')}</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Languages;
