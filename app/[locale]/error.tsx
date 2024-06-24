'use client';

import { useTranslations } from 'next-intl';
import { Container, Center, Title, Text, Button } from '@mantine/core';

import { Layout } from '@/features/layout/layout';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  const t = useTranslations('error');

  return (
    <Layout>
      <Container h="100%">
        <Center h="100%">
          <Title order={2}>{t('h2')}</Title>
          {t.rich('p', {
            p: (chunks) => <Text>{chunks}</Text>,
            retry: (chunks) => <Button onClick={reset}>{chunks}</Button>,
          })}
        </Center>
      </Container>
    </Layout>
  );
}
