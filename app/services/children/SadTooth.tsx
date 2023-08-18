import React from "react";
import Tooth from "@/components/icons/tooth";
import Bubble from "@/components/icons/bubble";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../../public/Digi Anil Bold.ttf",
  display: "swap",
});

function SadTooth() {
  return (
    <div>
      <div className="relative">
        <p
          className="absolute text-gray-700 text-base left-10 top-3"
          style={{ fontFamily: myFont.style.fontFamily, width: "160px" }}
        >
          من هنوز کامل درنیومدم! تروخدا مراقبم باش تا سالم رشد کنم :(
        </p>
        <Bubble />
      </div>
      <Tooth />
    </div>
  );
}

export default SadTooth;
