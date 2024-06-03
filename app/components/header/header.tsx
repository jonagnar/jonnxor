"use client";

import { useState } from "react";
import { MantineLogo } from "@mantinex/mantine-logo";
import { Container, Group, Burger, type MantineSize } from "@mantine/core";

import classes from "./header.module.css";

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
      <Group gap={5} visibleFrom="xs">
        {items}
      </Group>

      <Burger
        size={breakpoint}
        opened={opened}
        onClick={toggle}
        hiddenFrom={breakpoint}
      />
    </Container>
  );
}
