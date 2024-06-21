import { unstable_setRequestLocale } from 'next-intl/server';

// import { delay } from '@/utils/delay';
import { AppLayout } from '@/components/app-layout/app-layout';

export type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export default async function Layout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  // await delay(3000); // Simulate loading

  return <AppLayout>{children}</AppLayout>;
}
