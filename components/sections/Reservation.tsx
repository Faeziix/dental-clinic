"use client";
import React from "react";
import Image from "next/image";
import FormGirl from "@/public/FormGirl.png";
import Button from "@/components/ui/Buttons";
import styles from "./Form.module.scss";
import { useTranslations } from "next-intl";

function Reservation({ withImage = false }) {
  const dict = useTranslations("reservation");

  return (
    <div
      id={styles.reservation_form}
      className={`gap-6 justify-between ${
        withImage ? "md:grid-cols-2 grid" : ""
      }`}
    >
      <div className={styles.title}>
        <h2 className="mb-6">{dict("title")}</h2>
      </div>

      <form className={`${styles.form}`}>
        <div className="flex gap-4 w-full">
          <div className="mb-4 w-full">
            <label className="mb-2 text-xl" htmlFor="name">
              {dict("fields.first_name")}
            </label>
            <input className="w-full" type="text" id="name" />
          </div>
          <div className="mb-4 w-full">
            <label className="mb-2 text-xl" htmlFor="familyName">
              {dict("fields.last_name")}
            </label>
            <input className="w-full" type="text" id="familyName" />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 text-xl" htmlFor="phone">
            {dict("fields.phone")}
          </label>
          <input type="text" id="phone" />
        </div>
        <div className="mb-4">
          <label className="mb-2 text-xl" htmlFor="description">
            {dict("fields.note")}
          </label>
          <textarea className="lg:min-h-[6rem]" id="description" />
        </div>
        <Button className="text-xl" mode="block" color="primary">
          {dict("button")}
        </Button>
      </form>

      {withImage && (
        <Image
          className={`rounded-lg rows-start-1 mb-4 md:mb-0 ${styles.picture}`}
          src={FormGirl}
          alt="Form"
        />
      )}
    </div>
  );
}

export default Reservation;
