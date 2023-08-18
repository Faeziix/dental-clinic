import Image from "next/image";
import React from "react";

function PictureCard({ imgSrc, children }) {
  return (
    <div className="relative">
      <Image
        src={imgSrc}
        alt="Picture of the author"
        className="relative top-12 -mt-12 right-[45%] -z-10"
      />
      <div className="rounded-lg max-w-sm w-full border-2 bg-background border-b-4 border-primary py-6 px-4">
        {children}
      </div>
    </div>
  );
}

export default PictureCard;
