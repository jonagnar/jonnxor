import type { Metadata } from "next";

import {
  MantineProvider,
  ColorSchemeScript,
  MantineColorScheme,
} from "@mantine/core";
import { Inter } from "next/font/google";

import { LOCALES } from "@lib/constants";
import { type Locale, getDictionary } from "@lib/dictionary";

import { theme } from "./theme";
import { DictionaryProvider } from "./dictionary-provider";

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

export const metadata: Metadata = {
  title: "Jón Agnar Stefánsson",
  description: "CV and portfolio of Jón Agnar Stefánsson",
};

export async function generateStaticParams() {
  return [...LOCALES.map((lang) => ({ lang }))];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} data-mantine-color-scheme={defaultColorScheme}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
          <DictionaryProvider dictionary={dictionary}>
            {children}
          </DictionaryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
