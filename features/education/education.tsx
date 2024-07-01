'use client';

import { useTranslations } from 'next-intl';
import { Title, List, ListItem, Anchor, Text } from '@mantine/core';

export function Education() {
  const t = useTranslations();

  return (
    <>
      <Title order={3} mb="sm">
        {t('education.title')}
      </Title>
      <List spacing="xs" listStyleType="none">
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://www.ru.is" target="_blank">
                {t('education.university')}
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm">
                {t('education.university-degree')}
                {' • '}
                {t('education.university-programme')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm">{t('education.university-date')}</Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://tskoli.is" target="_blank">
                {t('education.college')}
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm">
                {t('education.college-degree')}
                {' • '}
                {t('education.college-programme')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm">{t('education.college-date')}</Text>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  );
}

export default Education;
