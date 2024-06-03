"use client";

import { useState } from "react";
import { Group, Code } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import {
  IconKey,
  Icon2fa,
  IconLogout,
  IconSettings,
  IconReceipt2,
  IconBellRinging,
  IconFingerprint,
  IconDatabaseImport,
  IconSwitchHorizontal,
} from "@tabler/icons-react";

import classes from "./navbar.module.css";

const data = [
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Billing", icon: IconReceipt2 },
  { link: "", label: "Authentication", icon: Icon2fa },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "Other Settings", icon: IconSettings },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Notifications", icon: IconBellRinging },
];

export function Navbar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <MantineLogo size={28} />
          <Code fw={700}>v1.0.0</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </>
  );
}
