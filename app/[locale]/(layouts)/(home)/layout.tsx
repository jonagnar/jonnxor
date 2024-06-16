import { unstable_setRequestLocale } from 'next-intl/server';
import { Container, Grid, GridCol, Text } from '@mantine/core';

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat alias ea nemo. Ducimus ex nesciunt hic ad saepe molestiae nobis necessitatibus laboriosam officia, reprehenderit, earum fugiat?';

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <Container>
      <Grid gutter="xl">
        <GridCol span={{ base: 12, xs: 8 }} visibleFrom="xs">
          <Text>{lorem}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>{children}</GridCol>
      </Grid>
      <Grid gutter="xl">
        <GridCol span={{ base: 12, xs: 4 }}>
          <Text>{lorem}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>
          <Text>{lorem}</Text>
        </GridCol>
        <GridCol span={{ base: 12, xs: 4 }}>
          <Text>{lorem}</Text>
        </GridCol>
      </Grid>
    </Container>
  );
}
