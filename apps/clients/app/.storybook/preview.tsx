import React from 'react';
import { ThemeProvider } from '@mui/material';

import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
