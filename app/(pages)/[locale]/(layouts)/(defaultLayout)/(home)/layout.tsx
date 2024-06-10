import { Container, Grid, GridCol } from "@mantine/core";

type Props = Readonly<{
  children: React.ReactNode;
  education: React.ReactNode;
  experience: React.ReactNode;
  contribution: React.ReactNode;
}>;

export default function Layout({
  children,
  education,
  experience,
  contribution,
}: Props) {
  return (
    <Container>
      <Grid>
        <GridCol span={8}>
          <h1>AVATAR</h1>
          <p>Some avatar</p>
        </GridCol>
        <GridCol span={4}>{children}</GridCol>
      </Grid>
      <Grid>
        <GridCol span={4}>{education}</GridCol>
        <GridCol span={4}>{experience}</GridCol>
        <GridCol span={4}>{contribution}</GridCol>
      </Grid>
    </Container>
  );
}
