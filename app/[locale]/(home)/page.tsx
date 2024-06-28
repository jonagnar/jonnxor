import { unstable_setRequestLocale } from 'next-intl/server';

import HomeLayout from '@/layouts/home-layout/home-layout';

export type Props = { params: { locale: string } };

export default async function HomePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <HomeLayout />;
}
