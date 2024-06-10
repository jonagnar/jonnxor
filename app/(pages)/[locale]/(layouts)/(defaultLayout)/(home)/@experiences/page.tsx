import { Paper } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("Home");

  return (
    <Paper>
      <h1>Experience</h1>
      <p>Some experiences</p>
    </Paper>
  );
}
