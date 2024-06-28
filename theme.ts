'use client';

import { ActionIcon, Anchor, Button, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  spacing: {
    xs: rem(5),
    sm: rem(10),
    md: rem(20),
    lg: rem(40),
    xl: rem(80),
  },
  fontFamily:
    'var(--font-montserrat), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  lineHeights: {
    xs: '1.5',
    sm: '1.5',
    md: '1.5',
    lg: '1.5',
    xl: '1.5',
  },
  headings: {
    fontFamily:
      'var(--font-orbitron), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: '600',
    textWrap: 'nowrap',
    sizes: {
      h1: {
        fontSize: rem(32),
        lineHeight: '1.5',
      },
      h2: {
        fontSize: rem(20),
        lineHeight: '1.5',
      },
      h3: {
        fontSize: rem(24),
        lineHeight: '1.5',
      },
    },
  },
  components: {
    Anchor: Anchor.extend({
      defaultProps: {
        classNames: { root: 'link' },
      },
    }),
    Button: Button.extend({
      defaultProps: {
        classNames: {
          root: 'button',
        },
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        classNames: {
          root: 'action-icon',
        },
      },
    }),
  },
});
