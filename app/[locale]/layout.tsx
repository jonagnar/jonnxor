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

import '@/app/global.css';

import { Analytics } from '@vercel/analytics/react';
import { ImageResponse } from 'next/og';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { theme } from '@/theme';
import { locales } from '@/config';
import { AppLayout } from '@/components/app-layout';
import { StoreProvider } from '@/app/store-provider';
import { IntlPolyfillScript } from '@/app/intl-polyfill-script';

export type Params = { params: { locale: string } };
export type Props = {
  params: Params['params'];
  children: React.ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}

export async function OpenGraphImage({ params: { locale } }: Params) {
  const t = await getTranslations({ locale, namespace: 'open-graph-image' });
  return new ImageResponse(<div style={{ fontSize: 128 }}>{t('title')}</div>);
}

export default async function RootLayout({ params: { locale }, children }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <IntlPolyfillScript />

        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <GoogleTagManager gtmId="G-GL1Y82696E" />
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            <StoreProvider>
              <AppLayout>{children}</AppLayout>
            </StoreProvider>
          </MantineProvider>
        </NextIntlClientProvider>

        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-GL1Y82696E" />
    </html>
  );
}
