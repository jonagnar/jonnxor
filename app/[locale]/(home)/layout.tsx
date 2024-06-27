import { unstable_setRequestLocale } from 'next-intl/server';

import { AppLayout } from '@/layouts/app-layout/app-layout';

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function HomeLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <AppLayout>{children}</AppLayout>;
}
