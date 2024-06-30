import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Orbitron, Montserrat } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { theme } from '@/theme';
import { locales } from '@/config';
import { hasCookies } from '@/app/actions';
import { ScrollToTop } from '@/features/scroll-to-top/scroll-to-top';
import { CookiesBanner } from '@/features/cookies-banner/cookies-banner';
import { IntlPolyfillsScript } from '@/app/intl-polyfills-script';

type Params = { params: { locale: string } };
type Props = {
  params: Params['params'];
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Params) {
  const t = await getTranslations({ locale });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  };
}

export default async function RootLayout({ params: { locale }, children }: Props) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  const analytics = await hasCookies();

  return (
    <html lang={locale} className={`${montserrat.variable} ${orbitron.variable}`}>
      <head>
        <ColorSchemeScript />
        <IntlPolyfillsScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      {analytics && <GoogleTagManager gtmId="G-GL1Y82696E" />}
      <body>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider theme={theme} defaultColorScheme="dark">
            {children}
            <ScrollToTop />
            <CookiesBanner />
          </MantineProvider>
        </NextIntlClientProvider>
        {analytics && <SpeedInsights />}
        {analytics && <Analytics />}
      </body>
      {analytics && <GoogleAnalytics gaId="G-GL1Y82696E" />}
    </html>
  );
}
