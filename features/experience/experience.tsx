'use client';

import { useTranslations } from 'next-intl';
import { Box, Anchor, List, ListItem, Title, Text } from '@mantine/core';

export function Experience() {
  const t = useTranslations();

  return (
    <Box pb="xs">
      <Title order={3} mb="sm">
        {t('experience.title')}
      </Title>
      <List spacing="sm" listStyleType="none" withPadding>
        <ListItem>
          <Anchor fw="bold" href="https://advania.is" target="_blank">
            {t('experience.company-advania-name')}
          </Anchor>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('experience.company-advania-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('experience.company-advania-role')}</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Anchor fw="bold" href="https://www.ru.is" target="_blank">
            {t('experience.company-university-name')}
          </Anchor>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('experience.company-university-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('experience.company-university-role')}</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Anchor fw="bold" href="https://www.skeljungur.is" target="_blank">
            {t('experience.company-shell-name')}
          </Anchor>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('experience.company-shell-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('experience.company-shell-role')}</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Text fw="bold" span>
            {t('experience.company-outcome-name')}
          </Text>
          {' • '}
          <Text fs="italic" size="sm" span>
            {t('experience.company-outcome-date')}
          </Text>
          <List spacing={0} listStyleType="none" withPadding>
            <ListItem>{t('experience.company-outcome-role')}</ListItem>
          </List>
        </ListItem>
      </List>
    </Box>
  );
}

export default Experience;
