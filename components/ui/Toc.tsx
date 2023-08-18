import React from "react";

type TocItem = {
  title: string;
  href: string;
};

function Toc({ items }: { items: TocItem[] }) {
  return (
    <ul className="border-r-2 border-r-primaryLight border-opacity-60 pr-4">
      {items.map((i) => (
        <a key={i.href} href={i.href}>
          <li className="mb-2 text-primary">{i.title}</li>
        </a>
      ))}
    </ul>
  );
}

export default Toc;
