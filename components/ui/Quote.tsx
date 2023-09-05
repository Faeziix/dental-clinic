import React from "react";
import StarsGroupIcon from "../icons/StarsGroupIcon";

type QuoteProps = {
  text: string;
};

function Quote({ text }: QuoteProps) {
  return (
    <h3 className="relative text-2xl font-bold text-accent ltr:pr-4 rtl:pl-4">
      {text}
      <StarsGroupIcon className="absolute w-10 rtl:md:-right-8 rtl:-right-4 ltr:-scale-x-100 ltr:md:-left-8 ltr:-left-4 -top-4" />
    </h3>
  );
}

export default Quote;
