'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(22),
    xl: rem(28),
  },
});
