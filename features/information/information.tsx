import {
  IconRulerMeasure,
  IconGenderMale,
  IconMailbox,
  IconPhone,
  IconCake,
  IconAt,
} from '@tabler/icons-react';
import { Box, Stack, Group, Title, Text, Anchor, rem } from '@mantine/core';

export function Information() {
  return (
    <Box component="section">
      <Title mb="lg" order={2}>
        CV
      </Title>
      <Title mb="xs" order={3} ff="text">
        Jón Agnar Stefánsson
      </Title>
      <Text mb="md" fz="lg" lh={1}>
        Frontend Web & App Developer
      </Text>
      <Stack gap="xs">
        <Group gap="md">
          <IconGenderMale
            style={{ width: rem(26), height: rem(26) }}
            stroke={1.5}
            className="icon"
          />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Gender
            </Text>
            <Text>Male</Text>
          </Stack>
        </Group>
        <Group gap="md">
          <IconRulerMeasure
            style={{ width: rem(26), height: rem(26) }}
            stroke={1.5}
            className="icon"
          />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Height
            </Text>
            <Text>1.60 m</Text>
          </Stack>
        </Group>
        <Group gap="md">
          <IconCake style={{ width: rem(26), height: rem(26) }} stroke={1.5} className="icon" />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Birthday
            </Text>
            <Text>May 1993</Text>
          </Stack>
        </Group>
        <Group gap="md">
          <IconAt style={{ width: rem(26), height: rem(26) }} stroke={1.5} className="icon" />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Email
            </Text>
            <Anchor c="var(--mantine-color-lime-5)" href="mailto:jonnxor@gmail.com">
              jonnxor@gmail.com
            </Anchor>
          </Stack>
        </Group>
        <Group gap="md">
          <IconPhone style={{ width: rem(26), height: rem(26) }} stroke={1.5} className="icon" />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Phone
            </Text>
            <Text>(+354) 866-1321</Text>
          </Stack>
        </Group>
        <Group gap="md">
          <IconMailbox style={{ width: rem(26), height: rem(26) }} stroke={1.5} className="icon" />
          <Stack gap={0}>
            <Text fz="sm" fw="bold">
              Address
            </Text>
            <Text>225 Garðabær Iceland</Text>
          </Stack>
        </Group>
      </Stack>
    </Box>
  );
}

export default Information;
