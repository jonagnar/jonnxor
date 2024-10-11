import { ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export function SocialMedia() {
  return (
    <Group flex={1} justify="flex-end" gap="xl">
      <ActionIcon
        size="xl"
        radius="xl"
        variant="default"
        component="a"
        href="https://github.com/jonagnar"
        target="_blank"
      >
        <IconBrandGithub style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ActionIcon>
      <ActionIcon
        size="xl"
        radius="xl"
        variant="default"
        component="a"
        href="https://www.linkedin.com/in/jonnxor/"
        target="_blank"
      >
        <IconBrandLinkedin style={{ width: rem(26), height: rem(26) }} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
}

export default SocialMedia;
