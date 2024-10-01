import { Group, Avatar, Title, Text } from '@mantine/core';

export function Header() {
  return (
    <Group gap="lg">
      <Avatar color="var(--mantine-color-lime-5)" variant="filled">
        <Text c="dark" fz="lg" fw="bold">
          JA
        </Text>
      </Avatar>
      <Title order={1}>JonnXor.is</Title>
    </Group>
  );
}

export default Header;
