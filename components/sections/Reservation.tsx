import React from "react";
import Image from "next/image";
import FormGirl from "@/public/FormGirl.png";
import Button from "@/components/ui/Buttons";
import styles from "./Form.module.scss";

function Reservation({ withImage = false }) {
  return (
    <div
      id={styles.reservation_form}
      className={`gap-6 justify-between ${
        withImage ? "md:grid-cols-2 grid" : ""
      }`}
    >
      <div className={styles.title}>
        <h3 className="mb-6 text-3xl font-semibold">رزرو وقت</h3>
      </div>

      <form className={`${styles.form}`}>
        <div className="flex gap-4 w-full">
          <div className="mb-4 w-full">
            <label className="mb-2 text-xl" htmlFor="name">
              نام
            </label>
            <input className="w-full" type="text" id="name" />
          </div>
          <div className="mb-4 w-full">
            <label className="mb-2 text-xl" htmlFor="familyName">
              نام‌خانوادگی
            </label>
            <input className="w-full" type="text" id="familyName" />
          </div>
        </div>
        <div className="mb-4">
          <label className="mb-2 text-xl" htmlFor="phone">
            شماره تماس
          </label>
          <input type="text" id="phone" />
        </div>
        <div className="mb-4">
          <label className="mb-2 text-xl" htmlFor="description">
            توضیحات
          </label>
          <textarea className="lg:min-h-[6rem]" id="description" />
        </div>
        <Button className="text-xl" mode="block" color="primary">
          رزرو وقت
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
