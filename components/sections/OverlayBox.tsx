import Image from "next/image";
import React from "react";

function OverlayBox({ imgsrc, children }) {
  return (
    <div className="flex flex-col">
      <div className="h-[calc(100%-6rem)]">
        <Image src={imgsrc} alt="Services" className="w-full" />
        <div className="py-8 px-4 bg-background border-[1px] border-b-[5px] rounded-lg border-primary mx-20 relative -top-24">
          {children}
        </div>
      </div>
    </div>
  );
}

export default OverlayBox;
