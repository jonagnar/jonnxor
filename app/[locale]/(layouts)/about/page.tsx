import { Text } from '@mantine/core';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea
      nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia,
      reprehenderit, earum fugiat?
    </Text>
  );
}
