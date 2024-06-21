import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

// import { delay } from '@/utils/delay';
import { PageLayout } from '@/components/page-layout/page-layout';
import { ProfilePhoto } from '@/components/profile-photo/profile-photo';

export type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}

export default async function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  // await delay(3000); // Simulate loading

  return (
    <PageLayout>
      <ProfilePhoto />
    </PageLayout>
  );
}
