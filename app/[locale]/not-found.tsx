import { useTranslations } from 'next-intl';
import { Container, Text } from '@mantine/core';

import { AppLayout } from '@/components/app-layout';

export default function NotFoundPage() {
  const t = useTranslations('not-found-page');

  return (
    <AppLayout>
      <Container>
        <Text>{t('description')}</Text>
      </Container>
    </AppLayout>
  );
}
