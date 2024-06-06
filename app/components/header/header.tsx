"use client";

import cx from "clsx";
import {
  type MantineSize,
  Title,
  Group,
  Button,
  Container,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import {
  IconSun,
  IconMoon,
  IconPrinter,
  IconSettings,
} from "@tabler/icons-react";

import classes from "./header.module.css";

type Props = Readonly<{
  toggle: () => void;
  breakpoint: MantineSize;
}>;

export function Header({ toggle, breakpoint }: Props) {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Container className={classes.inner}>
      <Title order={1}>JonnXor.is</Title>

      <Group gap={20} visibleFrom={breakpoint}>
        <ActionIcon variant="subtle" size={36} aria-label="Switch language">
          IS
        </ActionIcon>
        <ActionIcon
          size={36}
          variant="default"
          onClick={() => toggleColorScheme()}
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>

        <Button
          leftSection={<IconPrinter className={classes.icon} stroke={1.5} />}
          variant="gradient"
          gradient={{ from: "orange", to: "yellow", deg: 90 }}
          onClick={() => window.print()}
        >
          Print
        </Button>
      </Group>

      <ActionIcon
        size="xl"
        radius="xs"
        variant="default"
        onClick={toggle}
        aria-label="Toggle settings"
        hiddenFrom={breakpoint}
      >
        <IconSettings className={classes.icon} stroke={1.5} />
      </ActionIcon>
    </Container>
  );
}
