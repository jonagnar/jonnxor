import {
  HoverCard,
  Group,
  Button,
  Text,
  SimpleGrid,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./header.module.css";

export type Props = {
  drawerOpened: boolean;
  toggleDrawer: () => void;
  links: React.ReactNode[];
};

export function Header({ drawerOpened, toggleDrawer, links }: Props) {
  const theme = useMantineTheme();

  return (
    <Group justify="space-between" h="100%">
      <MantineLogo size={30} />

      <Group h="100%" gap={0} visibleFrom="sm">
        <a href="#" className={classes.link}>
          Home
        </a>
        <HoverCard
          width={600}
          position="bottom"
          radius="md"
          shadow="md"
          withinPortal
        >
          <HoverCard.Target>
            <a href="#" className={classes.link}>
              <Center inline>
                <Box component="span" mr={5}>
                  Features
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </a>
          </HoverCard.Target>

          <HoverCard.Dropdown style={{ overflow: "hidden" }}>
            <Group justify="space-between" px="md">
              <Text fw={500}>Features</Text>
              <Anchor href="#" fz="xs">
                View all
              </Anchor>
            </Group>

            <Divider my="sm" />

            <SimpleGrid cols={2} spacing={0}>
              {links}
            </SimpleGrid>

            <div className={classes.dropdownFooter}>
              <Group justify="space-between">
                <div>
                  <Text fw={500} fz="sm">
                    Get started
                  </Text>
                  <Text size="xs" c="dimmed">
                    Their food sources have decreased, and their numbers
                  </Text>
                </div>
                <Button variant="default">Get started</Button>
              </Group>
            </div>
          </HoverCard.Dropdown>
        </HoverCard>
        <a href="#" className={classes.link}>
          Learn
        </a>
        <a href="#" className={classes.link}>
          Academy
        </a>
      </Group>

      <Group visibleFrom="sm">
        <Button variant="default">Log in</Button>
        <Button>Sign up</Button>
      </Group>

      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
    </Group>
  );
}
