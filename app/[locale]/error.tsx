'use client';

import { useTranslations } from 'next-intl';
import { Button, Container, Text } from '@mantine/core';

import { AppLayout } from '@/components/app-layout/app-layout';

export type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  const t = useTranslations('error');
  return (
    <AppLayout>
      <Container>
        {t.rich('description', {
          p: (chunks) => <Text>{chunks}</Text>,
          retry: (chunks) => <Button onClick={reset}>{chunks}</Button>,
        })}
      </Container>
    </AppLayout>
  );
}
