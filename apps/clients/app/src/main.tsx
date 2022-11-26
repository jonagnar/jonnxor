import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import App from './app/App';
import theme from './theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
