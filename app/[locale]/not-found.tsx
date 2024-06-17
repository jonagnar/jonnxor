import { useTranslations } from 'next-intl';
import { Container, Text } from '@mantine/core';

import { PageLayout } from '@/components/page-layout';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <PageLayout title={t('title')}>
      <Container>
        <Text>{t('description')}</Text>
      </Container>
    </PageLayout>
  );
}
