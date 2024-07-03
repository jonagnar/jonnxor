'use client';

import { useTranslations } from 'next-intl';
import { Title, List, ListItem, Anchor, Text } from '@mantine/core';

export function Experience() {
  const t = useTranslations();

  return (
    <>
      <Title order={3} mb="sm">
        {t('experience.title')}
      </Title>
      <List spacing="xs" listStyleType="none" withPadding>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://advania.is" target="_blank">
                {t('experience.company-advania-name')}
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm">{t('experience.company-advania-role')}</Text>
            </ListItem>
            <ListItem>
              <Text size="sm">{t('experience.company-advania-date')}</Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://www.ru.is" target="_blank">
                {t('experience.company-university-name')}
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-university-role')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-university-date')}
              </Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Anchor fw="bold" href="https://www.skeljungur.is" target="_blank">
                {t('experience.company-shell-name')}
              </Anchor>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-shell-role')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-shell-date')}
              </Text>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <List spacing={0} listStyleType="none">
            <ListItem>
              <Text fw="bold" span>
                {t('experience.company-outcome-name')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-outcome-role')}
              </Text>
            </ListItem>
            <ListItem>
              <Text size="sm" span>
                {t('experience.company-outcome-date')}
              </Text>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </>
  );
}

export default Experience;
