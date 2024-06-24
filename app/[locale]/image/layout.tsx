import { Container, Center } from '@mantine/core';
import { unstable_setRequestLocale } from 'next-intl/server';

import { Layout } from '@/features/layout/layout';

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};

export default function ImageLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <Layout>
      <Container h="100%">
        <Center h="100%">{children}</Center>
      </Container>
    </Layout>
  );
}
