import React from "react";
import Tooth from "@/components/icons/tooth";
import Bubble from "@/components/icons/bubble";
import localFont from "next/font/local";
import { digiFont } from "@/utils/utils";

function SadTooth({ dict }) {
  return (
    <div>
      <div className="relative">
        <div className="absolute text-center right-12 top-3">
          <p
            className="text-gray-700 text-sm mb-2"
            style={{ fontFamily: digiFont.style.fontFamily, width: "160px" }}
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
