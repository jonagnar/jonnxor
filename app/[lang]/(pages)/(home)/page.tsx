import { Grid, GridCol } from "@mantine/core";

export default function Home() {
  return (
    <Grid>
      <GridCol span={8}>
        <h1>AVATAR</h1>
        <p>Some avatar</p>
      </GridCol>
      <GridCol span={{ base: 12, sm: 4 }}>
        <h1>Profile</h1>
        <p>Some info</p>
      </GridCol>
    </Grid>
  );
}
