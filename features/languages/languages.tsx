'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Title, List, ListItem, Text } from '@mantine/core';

export function Languages() {
  const t = useTranslations();

  return (
    <>
      <Title order={3} mb="sm">
        {t('languages.title')}
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <Text fw="bold" span>
            {t('languages.icelandic')}
          </Text>
          {' • '}
          <Text size="sm" span>
            {t('languages.native-proficiency')}
          </Text>
        </ListItem>
        <ListItem>
          <Text fw="bold" span>
            {t('languages.english')}
          </Text>
          {' • '}
          <Text size="sm" span>
            {t('languages.professional-proficiency')}
          </Text>
        </ListItem>
      </List>
    </>
  );
}

export default Languages;
