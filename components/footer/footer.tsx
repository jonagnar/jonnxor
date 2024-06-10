"use client";

import Link from "next/link";
import { ActionIcon, Container, Group } from "@mantine/core";
import {
  IconUserCircle,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import classes from "./footer.module.css";

export function Footer() {
  const size = 70;
  const radius = size;

  const width = "70%";
  const height = width;

  return (
    <Container className={classes.footer}>
      <Group wrap="nowrap" justify="space-around">
        <ActionIcon
          size={size}
          href="https://github.com"
          color="yellow"
          radius={radius}
          variant="filled"
          component={Link}
          aria-label="Github"
        >
          <IconBrandGithub style={{ width, height }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          size={size}
          href="https://linkedin.com"
          color="yellow"
          radius={radius}
          variant="filled"
          component={Link}
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin style={{ width, height }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon
          size={size}
          href="https://alferd.com"
          color="yellow"
          radius={radius}
          variant="filled"
          component={Link}
          aria-label="Alferð"
        >
          <IconUserCircle style={{ width, height }} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Container>
  );
}
