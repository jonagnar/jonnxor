"use client";

import { useState } from "react";
import { MantineLogo } from "@mantinex/mantine-logo";
import cx from "clsx";
import {
  Container,
  Group,
  Burger,
  type MantineSize,
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import classes from "./header.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

const links = [
  { link: "/learn", label: "Learn" },
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/community", label: "Community" },
];

type Props = Readonly<{
  opened: boolean;
  toggle: () => void;
  breakpoint: (string & {}) | MantineSize | undefined;
}>;

export function Header({ opened, toggle, breakpoint }: Props) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Container size="md" className={classes.inner}>
      <MantineLogo size={28} />

      <Group gap={5} visibleFrom={breakpoint}>
        {items}
      </Group>

      <Group>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
        <Burger
          size={breakpoint}
          opened={opened}
          onClick={toggle}
          hiddenFrom={breakpoint}
        />
      </Group>
    </Container>
  );
}
