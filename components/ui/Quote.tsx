import React from "react";
import StarsGroupIcon from "../icons/StarsGroupIcon";

type QuoteProps = {
  text: string;
};

function Quote({ text }: QuoteProps) {
  return (
    <h3 className="relative text-2xl font-bold text-accent ltr:pl-4 rtl:pr-4">
      {text}
      <StarsGroupIcon className="absolute -top-4 w-10 ltr:-left-4 ltr:-scale-x-100 rtl:-right-4 ltr:md:-left-8 rtl:md:-right-8" />
    </h3>
  );
}

export default Quote;
