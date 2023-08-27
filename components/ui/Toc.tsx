import { useLocale, useTranslations } from "next-intl";
import React from "react";

type TocItem = {
  title: string;
  href: string;
};

function Toc({ items }: { items: TocItem[] }) {
  const locale = useLocale();
  return (
    <ul
      className={` ${
        locale === "fa" ? "border-r-4 pr-4" : "border-l-4 pl-4"
      } border-r-primary border-opacity-60 `}
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
