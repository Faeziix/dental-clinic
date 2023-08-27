import createMiddleware from "next-intl/middleware";

import { NextResponse } from "next/server";

export default createMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
