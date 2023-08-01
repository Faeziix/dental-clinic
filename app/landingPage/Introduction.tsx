import React from "react";
import Image from "next/image";
import DocImage from "@/public/Doctor-image.jpeg";
import DentistIcon from "@/public/DentistIcon.png";

function Introduction() {
  return (
    <div className="w-full flex max-w-5xl flex-col gap-4 px-5">
      <div className="flex items-center gap-2 mb-6">
        <Image src={DentistIcon} alt="Dentist Icon" width={40} />
        <h1>دکتر سهیلا کریمی</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Image
          className="rounded-lg max-w-[27rem] w-full"
          src={DocImage}
          alt="Doctor Image"
        />
        <p>دکتر سهیلا کریمی فارغ التحصیل دانشگاه</p>
      </div>
    </div>
  );
}

export default Introduction;
