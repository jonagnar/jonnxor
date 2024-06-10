import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "@app/lib/navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "is",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(de|en)/:path*"],
};
