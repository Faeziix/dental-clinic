"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import React, { useTransition } from "react";

function LocaleChanger() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  function changeLocale(locale: "en" | "fa") {
    startTransition(() => {
      router.replace(pathname, { locale: locale });
    });
  }

  const activeStyle =
    "text-purple-900 border-b-2 border-0 border-purple-700 aspect-square w-8 h-8";
  const inactiveStyle = "text-neutral-300";

  return (
    <div className="gap-0 items-center w-min grow-0 basis-0 flex justify-center">
      <button
        className={`${
          locale === "en" ? activeStyle : inactiveStyle
        } p-1 m-0 w-min`}
        onClick={() => changeLocale("en")}
      >
        En
      </button>
      <span className="text-neutral-300">/</span>
      <button
        className={`${
          locale === "fa" ? activeStyle : inactiveStyle
        } p-1 m-0 w-min`}
        onClick={() => changeLocale("fa")}
      >
        Fa
      </button>
    </div>
  );
}

export default LocaleChanger;
