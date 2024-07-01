'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Title, List, ListItem, Text } from '@mantine/core';

export function Skills() {
  const t = useTranslations();

  return (
    <>
      <Title order={3} mb="sm">
        {t('skills.title')}
      </Title>
      <List spacing="xs">
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Tools:
            </Text>
            {t('skills.node')}, {t('skills.npm')}, {t('skills.yarn')}
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Technologies:
            </Text>
            {t('skills.react')}, {t('skills.react-native')}, {t('skills.vue')}
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Frameworks:
            </Text>
            {t('skills.next')}, {t('skills.remix')}, {t('skills.expo')}, {t('skills.ionic')}
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              UI Frameworks:
            </Text>
            {t('skills.tailwind-css')}, {t('skills.mantine')}, {t('skills.chakra-ui')}
          </Text>
        </ListItem>
        <ListItem>
          <Text fz="sm">
            <Text mr="xs" fw="bold" span>
              Languages:
            </Text>
            {t('skills.javascript')}, {t('skills.typescript')}, {t('skills.c-sharp')},{' '}
            {t('skills.graphql')}, {t('skills.sql')}
          </Text>
        </ListItem>
      </List>
    </>
  );
}

export default Skills;
