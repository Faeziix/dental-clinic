import Reservation from "@/components/sections/Reservation";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reservation",
  description: "Reservation form",
};

function ReservationPage() {
  return (
    <div className="mx-auto pt-10">
      <Reservation withImage />
    </div>
  );
}

export default ReservationPage;
