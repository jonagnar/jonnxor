import { unstable_setRequestLocale } from 'next-intl/server';

import { App } from './app';

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <App>{children}</App>;
}
