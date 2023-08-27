import React from "react";
import styles from "./Form.module.scss";
import Reservation from "@/components/sections/Reservation";

function ReservationForm({ lang }) {
  return (
    <div className="px-5 max-w-5xl w-full">
      <Reservation withImage />
    </div>
  );
}

export default ReservationForm;
