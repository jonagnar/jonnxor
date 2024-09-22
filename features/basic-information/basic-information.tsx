'use client';

import { Box, Stack, Title, Text, Anchor } from '@mantine/core';
import { IconMasksTheater, IconCake, IconAt, IconPhone, IconMapPin } from '@tabler/icons-react';

import { ContactIcon } from '@/features/contact-icons/contact-icons';

import classes from './basic-information.module.css';

export function BasicInformation() {
  return (
    <Box className={classes.wrapper}>
      <Title order={3} textWrap="wrap">
        Jón Agnar Stefánsson
      </Title>
      <Text size="xl" mb="sm">
        Senior Frontend Web Developer
      </Text>
      <Stack gap="xs">
        <ContactIcon
          icon={<IconMasksTheater className={classes.icon} />}
          label="Gender"
          input="Male"
        />
        <ContactIcon
          icon={<IconMasksTheater className={classes.icon} />}
          label="Height"
          input="1.60m"
        />
        <ContactIcon
          icon={<IconCake className={classes.icon} />}
          label="Birthday"
          input="May 1993"
        />
        <ContactIcon
          icon={<IconCake className={classes.icon} />}
          label="Constellation"
          input="Bull"
        />
        <ContactIcon
          icon={<IconAt className={classes.icon} />}
          label="Email"
          input={<Anchor href="mailto:jonnxor@gmail.com">jonnxor@gmail.com</Anchor>}
        />
        <ContactIcon
          icon={<IconPhone className={classes.icon} />}
          label="Phone"
          input={<Anchor href="tel:+3548661321">(+354) 866-1321</Anchor>}
        />
        <ContactIcon icon={<IconMapPin className={classes.icon} />} label="Zip Code" input="225" />
        <ContactIcon
          icon={<IconMapPin className={classes.icon} />}
          label="Country"
          input="Iceland"
        />
        <ContactIcon
          icon={<IconMapPin className={classes.icon} />}
          label="City"
          input="Reykjavík"
        />
        <ContactIcon
          icon={<IconMapPin className={classes.icon} />}
          label="District"
          input="Garðabær"
        />
        <ContactIcon
          icon={<IconMapPin className={classes.icon} />}
          label="Address"
          input="Birkiholt"
        />
      </Stack>
    </Box>
  );
}
