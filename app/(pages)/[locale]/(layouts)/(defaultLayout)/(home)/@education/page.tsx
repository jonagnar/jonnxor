import { Paper } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("Home");

  return (
    <Paper>
      <h1>Education</h1>
      <p>Some schools</p>
    </Paper>
  );
}
