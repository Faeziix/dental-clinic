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
    <div>
      <h2 className="md:mb-8">{dict("title")}</h2>
      <div
        id={styles.reservation_form}
        className={`justify-between gap-6  ${
          withImage ? "grid md:grid-cols-2 md:grid-rows-[auto_1fr]" : ""
        }`}
      >
        <form
          className={`${styles.form} flex max-w-lg flex-col justify-between md:max-w-none `}
        >
          <div>
            <div className="flex w-full gap-4">
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
              <textarea className="h-full lg:min-h-[6rem]" id="description" />
            </div>
            <Button className="mx-auto w-full" mode="block" color="primary">
              {dict("button")}
            </Button>
          </div>
        </form>

        {withImage && (
          <Image
            className={`rows-start-1 mb-4 rounded-lg ltr:-scale-x-100 md:mb-0 ${styles.picture}`}
            src={FormGirl}
            alt="Form"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default Reservation;
