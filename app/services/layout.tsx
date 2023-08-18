import Reservation from "@/components/sections/Reservation";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      {
        //<div className="flex gap-4 top-0 h-full w-full px-5 fixed -z-10">
        //{Array.from({ length: 4 }).map((_, i) => (
        //<div key={i} className="w-full h-full bg-red-50"></div>
        //))}
        //</div>
      }

      <div className="flex gap-[15px] top-0 h-full w-full justify-center fixed -z-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-[75px] h-full bg-red-50"></div>
        ))}
      </div>

      <div className="max-w-screen-desktop md:mx-auto mx-5">
        {children}
        <div className="md:mx-gs">
          <Reservation />
        </div>
      </div>
    </div>
  );
}

export default Layout;
