'use client';

import { Button, Container, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

import { PageLayout } from '@/components/page-layout';

export type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  const t = useTranslations('Error');
  return (
    <PageLayout title={t('title')}>
      <Container>
        {t.rich('description', {
          p: (chunks) => <Text>{chunks}</Text>,
          retry: (chunks) => <Button onClick={reset}>{chunks}</Button>,
        })}
      </Container>
    </PageLayout>
  );
}
