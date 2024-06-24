import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { theme } from '@/theme';
import { locales } from '@/config';
import { IntlPolyfillsScript } from '@/app/intl-polyfills-script';

type Params = { params: { locale: string } };
type Props = {
  modal: React.ReactNode;
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
    description: t('description'),
  };
}

export default async function RootLayout({ modal, params: { locale }, children }: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <IntlPolyfillsScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <GoogleTagManager gtmId="G-GL1Y82696E" />
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme}>
            {children}
            {modal}
          </MantineProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-GL1Y82696E" />
    </html>
  );
}
