'use client';

import { useTranslations } from 'next-intl';
import { Box, Title, Text, List, ListItem, Anchor } from '@mantine/core';

export function Education() {
  const t = useTranslations();

  return (
    <Box pb="xs">
      <Title order={3} mb="sm">
        {t('education.title')}
      </Title>
      <List spacing="sm" listStyleType="none" withPadding>
        <ListItem>
          <Anchor fw="bold" href="https://www.ru.is" target="_blank">
            {t('education.university')}
          </Anchor>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('education.university-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('education.university-degree')}</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Anchor fw="bold" href="https://tskoli.is" target="_blank">
            {t('education.college')}
          </Anchor>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('education.college-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('education.college-degree')}</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Education;
