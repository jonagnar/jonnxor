import { Text } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

// import { delay } from '@/utils/delay';
import { PageLayout } from '@/components/page-layout/page-layout';

export type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations('home');
  // await delay(3000); // Simulate loading

  return (
    <PageLayout>
      <Text>{t('text')}</Text>
    </PageLayout>
  );
}
