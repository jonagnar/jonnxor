import { Paper } from "@mantine/core";
import { useTranslations } from "next-intl";

export default function Contribution() {
  const t = useTranslations("Home");

  return (
    <Paper>
      <h1>Contribution</h1>
      <p>Some contributions</p>
    </Paper>
  );
}
