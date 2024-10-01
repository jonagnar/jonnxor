'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  breakpoints: {
    xs: '40em',
    sm: '48em',
    md: '64em',
    lg: '80em',
    xl: '96em',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
  },

  /* Typography */
  fontFamily: 'var(--font-montserrat)',
  fontSizes: {
    xs: rem(13.33), // 10pt
    sm: rem(14.67), // 11pt
    md: rem(16), // 12pt
    lg: rem(18.67), // 14pt
    xl: rem(21.33), // 16pt
  },
  lineHeights: {
    xs: '1.375',
    sm: '1.375',
    md: '1.375',
    lg: '1.375',
    xl: '1.375',
  },
  headings: {
    fontFamily: 'var(--font-orbitron)',
    fontWeight: '600',
    textWrap: 'nowrap',
    sizes: {
      h1: {
        fontSize: rem(32), // 24pt
        lineHeight: '1',
      },
      h2: {
        fontSize: rem(29.33), // 22pt
        lineHeight: '1',
      },
      h3: {
        fontSize: rem(26.67), // 20pt
        lineHeight: '1',
      },
    },
  },
});
