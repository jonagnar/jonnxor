import { Container, Grid, GridCol } from "@mantine/core";

type Props = Readonly<{
  children: React.ReactNode;
  education: React.ReactNode;
  experience: React.ReactNode;
  contribution: React.ReactNode;
}>;

export default function HomeLayout({
  children,
  education,
  experience,
  contribution,
}: Props) {
  return (
    <Container>
      {children}
      <Grid>
        <GridCol span={{ base: 12, sm: 4 }}>{education}</GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>{experience}</GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>{contribution}</GridCol>
      </Grid>
    </Container>
  );
}
