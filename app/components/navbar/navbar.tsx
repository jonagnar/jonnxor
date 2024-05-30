import {
  Group,
  Button,
  UnstyledButton,
  Divider,
  Center,
  Box,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./navbar.module.css";

export type Props = {
  linksOpened: boolean;
  drawerOpened: boolean;
  closeDrawer: () => void;
  toggleLinks: () => void;
  links: React.ReactNode[];
};

export function Navbar({
  linksOpened,
  drawerOpened,
  closeDrawer,
  toggleLinks,
  links,
}: Props) {
  const theme = useMantineTheme();

  return (
    <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size="100%"
      padding="md"
      title="Navigation"
      hiddenFrom="sm"
      zIndex={1000000}
    >
      <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
        <Divider my="sm" />

        <a href="#" className={classes.link}>
          Home
        </a>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{links}</Collapse>
        <a href="#" className={classes.link}>
          Learn
        </a>
        <a href="#" className={classes.link}>
          Academy
        </a>

        <Divider my="sm" />

        <Group justify="center" grow pb="xl" px="md">
          <Button variant="default">Log in</Button>
          <Button>Sign up</Button>
        </Group>
      </ScrollArea>
    </Drawer>
  );
}
