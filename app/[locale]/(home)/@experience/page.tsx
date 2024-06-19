import { Text } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}

export default function ExperiencePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('experience');

  return <Text>{t('text')}</Text>;
}
