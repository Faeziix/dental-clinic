import Reservation from "@/components/sections/Reservation";
import React from "react";

function Layout({ children }) {
  return (
    <div>
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
