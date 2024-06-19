import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Avatar, Container, Grid, GridCol, Group, Title } from '@mantine/core';

export type Props = {
  params: { locale: string };
  children: React.ReactNode;
  education: React.ReactNode;
  experience: React.ReactNode;
  contribution: React.ReactNode;
};

export default function Layout({
  params: { locale },
  children,
  education,
  experience,
  contribution,
}: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('home');

  return (
    <Container>
      <Group mb="xl" justify="space-between">
        {t.rich('title', {
          h2: (chunks) => <Title order={2}>{chunks}</Title>,
          h3: (chunks) => <Title order={3}>{chunks}</Title>,
        })}
      </Group>

      <Grid gutter="xl">
        <GridCol span={{ base: 12, xs: 8 }} visibleFrom="xs">
          <Container>
            <Avatar
              src="profile.jpg"
              alt="Jón Agnar Stefánsson"
              style={{
                width: '100%',
                height: 'auto',
                border: '4px solid var(--mantine-color-yellow-filled)',
              }}
            >
              JA
            </Avatar>
          </Container>
        </GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>{children}</GridCol>
      </Grid>

      <Grid gutter="xl">
        <GridCol span={{ base: 12, xs: 4 }}>{education}</GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>{experience}</GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>{contribution}</GridCol>
      </Grid>
    </Container>
  );
}
