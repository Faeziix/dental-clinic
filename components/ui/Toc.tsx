import { useLocale, useTranslations } from "next-intl";
import React from "react";

type TocItem = {
  title: string;
  href: string;
};

function Toc({ items }: { items: TocItem[] }) {
  return (
    <ul
      className={
        "rtl:border-r-4 rtl:pr-4  ltr:border-l-4 ltr:pl-4 border-r-primary border-opacity-60"
      }
    >
      {items.map((i) => (
        <a key={i.href} href={i.href}>
          <li className="mb-2 text-primary">{i.title}</li>
        </a>
      ))}
    </ul>
  );
}

export default Toc;
