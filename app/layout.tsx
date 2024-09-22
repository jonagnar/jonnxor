import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { MantineProvider } from '@mantine/core';
import { Orbitron, Montserrat } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { theme } from '@/theme';
import { hasCookies } from '@/app/actions';
import { CookiesBanner } from '@/features/cookies-banner/cookies-banner';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/code-highlight/styles.css';

import './global.css';

type Props = {
  children: React.ReactNode;
};

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['600'],
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JonnXor.is',
  description: 'Personal Website',
};

export default async function RootLayout({ children }: Props) {
  const analytics = await hasCookies();

  return (
    <html lang="en" className={`${montserrat.variable} ${orbitron.variable}`}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />

        <link rel="shortcut icon" href="data:;base64,iVBORw0KGgo=" />
      </head>
      {analytics && <GoogleTagManager gtmId="G-GL1Y82696E" />}
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
          <CookiesBanner />
        </MantineProvider>
        {analytics && <SpeedInsights />}
        {analytics && <Analytics />}
      </body>
      {analytics && <GoogleAnalytics gaId="G-GL1Y82696E" />}
    </html>
  );
}
