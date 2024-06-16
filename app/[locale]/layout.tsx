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

import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { theme } from '@/theme';
import { locales } from '@/navigation';
import { IntlPolyfillScript } from '@/app/intl-polyfill-script';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
  };
}

// TODO: OpenGraphImage for social media sharing
//export default async function OpenGraphImage({ params: { locale } }) {
//  const t = await getTranslations({ locale, namespace: 'OpenGraphImage' });
//  return new ImageResponse(<div style={{ fontSize: 128 }}>{t('title')}</div>);
//}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="G-GL1Y82696E" />
      <head>
        <ColorSchemeScript />
        <IntlPolyfillScript />

        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-GL1Y82696E" />
    </html>
  );
}
