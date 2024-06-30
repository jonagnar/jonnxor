'use client';

import { type ForwardedRef, forwardRef } from 'react';
import {
  createPolymorphicComponent,
  type AnchorProps as MantineAnchorProps,
  type ElementProps,
  Anchor as MantineAnchor,
} from '@mantine/core';

import { Link as NavigationLink } from '@/navigation';

type NextLinkProps = React.ComponentPropsWithRef<typeof NavigationLink>;

type Props = MantineAnchorProps & ElementProps<'a', keyof MantineAnchorProps> & NextLinkProps;

function render({ ...props }: Props, ref: ForwardedRef<HTMLAnchorElement>) {
  return <MantineAnchor ref={ref} {...props} component={NavigationLink} />;
}

export const Link = createPolymorphicComponent<'a', Props>(
  forwardRef<HTMLAnchorElement, Props>(render)
);

export type LinkProps = React.ComponentPropsWithRef<typeof Link>;

export default Link;
