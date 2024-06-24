import { unstable_setRequestLocale } from 'next-intl/server';

import { Layout } from '@/features/layout/layout';

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function HomeLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <Layout>{children}</Layout>;
}
