import { Container } from '@mantine/core';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return <Container>{children}</Container>;
}
