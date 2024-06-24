import { useTranslations } from 'next-intl';
import { Container, Center, Title, Text } from '@mantine/core';

import { Layout } from '@/features/layout/layout';

export default function NotFoundPage() {
  const t = useTranslations('not-found-page');

  return (
    <Layout>
      <Container h="100%">
        <Center h="100%">
          <Title order={2}>{t('h2')}</Title>
          <Text>{t('p')}</Text>
        </Center>
      </Container>
    </Layout>
  );
}
