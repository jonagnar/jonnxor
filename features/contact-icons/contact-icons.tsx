'use client';

import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';

import classes from './contact-icons.module.css';

type ContactIconProps = Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> & {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
};

function ContactIcon({ icon: Icon, title, description, ...props }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...props}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>
      <div>
        <Text size="xs">{title}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'jonnxor@gmail.com', icon: IconAt },
  { title: 'Phone', description: '(+354) 866-1321', icon: IconPhone },
  { title: 'Address', description: 'Birkiholt 9, 225 Garðabær, Iceland', icon: IconMapPin },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}
