import React from "react";
import styles from "./Form.module.scss";
import Reservation from "@/components/sections/Reservation";

function ReservationForm({ dict, lang }) {
  return (
    <div className="px-5 max-w-5xl w-full">
      <Reservation withImage dict={dict} lang={lang} />
    </div>
  );
}

export default ReservationForm;
