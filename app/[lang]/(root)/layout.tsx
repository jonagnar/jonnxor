"use client";

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellFooter,
  AppShellNavbar,
  UnstyledButton,
  Group,
  ThemeIcon,
  Text,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Navbar } from "@/app/components/navbar";
import {
  IconBook,
  IconChartPie3,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons-react";

import classes from "./layout.module.css";

type Props = Readonly<{
  children: React.ReactNode;
}>;

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function DefaultLayout({ children }: Props) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !drawerOpened },
      }}
      padding="md"
    >
      <AppShellHeader>
        <Header
          drawerOpened={drawerOpened}
          toggleDrawer={toggleDrawer}
          links={links}
        />
      </AppShellHeader>
      <AppShellNavbar>
        <Navbar
          drawerOpened={drawerOpened}
          closeDrawer={closeDrawer}
          linksOpened={linksOpened}
          toggleLinks={toggleLinks}
          links={links}
        />
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
      <AppShellFooter>
        <Footer />
      </AppShellFooter>
    </AppShell>
  );
}
