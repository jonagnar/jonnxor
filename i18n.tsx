import deepmerge from "deepmerge";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { AbstractIntlMessages, IntlErrorCode } from "next-intl";

import { locales } from "@app/lib/constants";

export default getRequestConfig(async ({ locale }) => {
  //* Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const home: AbstractIntlMessages = (
    await import(`./messages/${locale}/home.json`)
  ).default;
  //? const about: AbstractIntlMessages = ( await import(`../messages/${locale}/about.json`) ).default;

  //* Default Keys
  const fallback: AbstractIntlMessages = (
    await import(`./messages/${locale}.json`)
  ).default;

  return {
    messages: {
      ...deepmerge(fallback, home),
      //? ...deepmerge(fallback, about),
    },
    //* The time zone can either be statically defined, read from the
    //* user profile if you store such a setting, or based on dynamic
    //* request information like the locale or a cookie.
    timeZone: "Iceland",
    //* This is the default, a single date instance will be
    //* used by all Server Components to ensure consistency.
    //? Tip: This value can be mocked to a constant value
    //? for consistent results in end-to-end-tests.
    now: new Date(),
    //* To achieve consistent date, time, number and list formatting, you can define a set of global formats.
    formats: {
      dateTime: {
        short: {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
      },
      number: {
        precise: {
          maximumFractionDigits: 5,
        },
      },
      list: {
        enumeration: {
          style: "long",
          type: "conjunction",
        },
      },
    },
    //* To achieve consistent usage of translation values and reduce redundancy, you can define a set of global default values.
    //* This configuration can also be used to apply consistent styling of commonly used rich text elements.
    //! In case you provide values at a specific call site of t, these will potentially override global defaults.
    defaultTranslationValues: {
      important: (chunks) => <b>{chunks}</b>,
      value: 123,
    },
    //* By default, when a message fails to resolve or when the formatting failed, an error will be printed on the console.
    //* In this case ${namespace}.${key} will be rendered instead to keep your app running.
    //* This behavior can be customized with the onError and getMessageFallback configuration option.
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        //* Missing translations are expected and should only log an error
        console.error(error);
      } else {
        //* Other errors indicate a bug in the app and should be reported
        //! reportToErrorTracking(error);
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join(".");

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return path + " is not yet translated";
      } else {
        return "Dear developer, please fix this message: " + path;
      }
    },
  };
});
