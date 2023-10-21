import createMiddleware from "next-intl/middleware";
import { locales } from "./app/_lib/locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: locales[0],
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|login|_next|_vercel|.*\\..*).*)"],
};
