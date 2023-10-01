import React from "react";
import Tooth from "@/components/icons/tooth";
import Bubble from "@/components/icons/bubble";
import localFont from "next/font/local";
import { getHandWriteFont } from "@/utils/utils";

function SadTooth({ dict, locale }) {
  return (
    <div>
      <div className="relative">
        <div className="absolute right-12 top-3 text-center">
          <p
            className="mb-2 text-sm text-gray-700"
            style={{
              fontFamily: getHandWriteFont(locale).style.fontFamily,
              width: "160px",
            }}
          >
            {dict("sections.why-visit.quote_bubble.line1")}
          </p>
        </div>
        <Bubble />
      </div>
      <Tooth />
    </div>
  );
}

export default SadTooth;
