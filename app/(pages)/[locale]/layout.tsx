import { Inter } from "next/font/google";
import { getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import {
  MantineProvider,
  ColorSchemeScript,
  MantineColorScheme,
} from "@mantine/core";

import { theme } from "@app/theme";
import { locales } from "@app/lib/constants";
import { IntlPolyfills } from "@app/intl-polyfills";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/code-highlight/styles.css";

import "./global.css";

const inter = Inter({ subsets: ["latin"] });
const defaultColorScheme: MantineColorScheme = "dark";

//* If you're programmatically generating Open Graph images, you can apply internationalization by calling functions from next-intl in the exported function:
//? export default async function OpenGraphImage({ params: { locale } }) {
//?  const t = await getTranslations({ locale, namespace: "OpenGraphImage" });
//?  return new ImageResponse(<div style={{ fontSize: 128 }}>{t("title")}</div>);
//? }

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} data-mantine-color-scheme={defaultColorScheme}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
        <IntlPolyfills />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MantineProvider
            theme={theme}
            defaultColorScheme={defaultColorScheme}
          >
            {children}
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
