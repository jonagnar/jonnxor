import { Paper } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <Paper>
      <h1>Profile</h1>
      <p>Some info</p>
    </Paper>
  );
}
