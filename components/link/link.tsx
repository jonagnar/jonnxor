'use client';

// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';
import { type ForwardedRef, forwardRef } from 'react';
import {
  type AnchorProps as MantineAnchorProps,
  Anchor as MantineAnchor,
  createPolymorphicComponent,
} from '@mantine/core';

import { Link as NavigationLink } from '@/navigation';

export type LinkProps = MantineAnchorProps;

function render({ ...props }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) {
  return <MantineAnchor component={NavigationLink} href="/" {...props} ref={ref} />;
}

export const Link = createPolymorphicComponent<typeof NextLink, LinkProps>(
  forwardRef<HTMLAnchorElement, LinkProps>(render)
);

export default Link;
