import React from "react";
import styles from "./implant.module.scss";
import StructurePic from "@/public/implant/structure.png";
import Image from "next/image";
import Checkmark from "@/components/icons/Checkmark";
import localFont from "next/font/local";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import FacePic from "@/public/implant/face.png";
import JawPic from "@/public/implant/jaw.png";
import OverlayBox from "@/components/sections/OverlayBox";
import ServicesPic from "@/public/implant/services.png";
import MaintenancePic from "@/public/implant/maintenance.png";
import Reservation from "@/components/sections/Reservation";
import Toc from "@/components/ui/Toc";

const toc = [
  {
    title: "ایمپلنت دندان چیست؟",
    href: "#what-is-implant",
  },
  {
    title: "مزایا ایمپلنت در مقابل دندان‌مصنوعی چیست؟",
    href: "#advantages",
  },
  {
    title: "نگه‌داری و مراقبت از ایمپلنت دندان چگونه است؟",
    href: "#maintenance",
  },
  {
    title: "آیا ایمپلنت برای همه افراد مناسب هست؟",
    href: "#suitable",
  },
  {
    title: "ایمپلنت درد دارد؟",
    href: "#pain",
  },
  {
    title: "هزینه ایمپلنت دندان",
    href: "#cost",
  },
  {
    title: "ایمپلنت دندان در یک نگاه",
    href: "#summary",
  },
];

const myFont = localFont({
  src: "../../../public/Digi Anil Bold.ttf",
  display: "swap",
});

function ImplantPage() {
  return (
    <div className="blog">
      <article className="max-w-screen-desktop md:mx-auto">
        <section className="">
          <h1 className="mb-2 text-primary">همه‌چیز درباره ایمپلنت دندان</h1>
          <h3 className="text-primary text-2xl">
            مزایا، شرایط درمان، نگه‌داری، هزینه و مشاوره رایگان
          </h3>
        </section>

        <section className="flex gap-4 items-center mx-auto">
          <p className="mb-0 md:mr-gs">
            ایمپلنت های دندانی، ساختارهای مصنوعی هستند که جراح دندان در استخوان
            فک فرد قرار می دهد.
            <br /> اگر یک یا چند دندان خود را از دست داده‌اید؛ ممکن است به
            ایمپلنت دندان احتیاج داشته باشید.
          </p>

          <Image src={JawPic} alt="Jaw Pic" className="hidden md:block" />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="what-is-implant">
          <h2>ایمپلنت دندانی چیست؟</h2>
          <p>
            ایمپلنت دندان، جایگزین دندان ازدست‌رفته می شود. ما با دستگاه‌های پیچ
            مانند، ایمپلنت را در استخوان فک قرار می‌دهیم.
          </p>
          <p className="mb-6">
            تاج(روکش) را به صورت سفارشی، متناسب با فرم دهان و رنگ دندان‌هایتان
            می‌سازیم.
          </p>
          <Image
            className="mb-6 mx-auto"
            src={StructurePic}
            alt="Implant Structure"
          />
          <p>
            این تضمین را به شما می‌دهیم که ظاهر و حس روکش‌ها، مانند دندان‌های
            طبیعی شما خواهند بود.
          </p>
        </section>

        <section className="mx-auto" id="advantages">
          <h2 className="md:mx-gs">
            مزایا ایمپلنت در مقابل دندان‌مصنوعی چیست؟
          </h2>
          <p className="md:mx-gs">
            ایمپلنت‌ها، دارای چندین مزیت نسبت به دندان‌های مصنوعی متحرک هستند.{" "}
          </p>

          <OverlayBox imgsrc={ServicesPic}>
            <h4 className="text-primary leading-6 mb-4 font-bold">
              مزایای ایمپلنت
            </h4>
            <ul className="list-disc list-inside">
              <li>طبیعی‌تر و راحت‌تر است.</li>
              <li>درصد موفقیت بالاتری دارد.</li>
              <li>عملکرد جویدن را بهبود می‌بخشد.</li>
              <li>منجر به کاهش خطر ایجاد حفره در دندان‌های مجاور می‌شود.</li>
              <li>باعث نگهداری بهتر استخوان در محل دندان ازدست‌رفته می‌شود.</li>
              <li>حساسیت در دندان‌های مجاور را کاهش می‌دهد.</li>
              <li>لازم نیست هر شب بیرون آورده و تمیز شود.</li>
            </ul>
          </OverlayBox>
        </section>

        <section className="mx-auto" id="maintenance">
          <h2 className="md:mx-gs">
            نگه‌داری و مراقبت از ایمپلنت دندان چگونه است؟
          </h2>
          <p className="md:mx-gs">
            دندان‌های مصنوعی مانند دندان‌های معمولی، به مراقبت و نگهداری نیاز
            دارند.{" "}
          </p>
          <p className="md:mx-gs">
            پس از اینکه تحت عمل جراحی ایمپلنت دندان قرار گرفتید، باید به مسواک
            زدن و نخ‌دندان کشیدن منظم ادامه دهید(این کار علاوه بر سلامت
            دندان‌ها، به افزایش عمر ایمپلنت شما، کمک میکند.).
          </p>

          <div className="flexColRow gap-4 items-center">
            <Image
              src={MaintenancePic}
              alt="Maintenance Pic"
              className="w-full"
            />
            <h5 className="md:font-medium font-normal md:leading-9 text-dark">
              برای نظارت بر ایمپلنت‌ها و اطمینان از سالم بودن دندان‌ها و لثه‌های
              شما، مهم است که هر 6 ماه یک بار برای تمیز کردن حرفه‌ای به مطب
              مراجعه کنید.
            </h5>
          </div>
        </section>

        <section id="suitable">
          <h2>آیا ایمپلنت برای همه افراد مناسب هست؟</h2>
          <p>
            ایمپلنت دندان با وجود همه مزایایی که دارد، برای همه مناسب نیست.{" "}
          </p>
          <p>
            ما اطمینان خاطر پیدا می‌کنیم که دستگاه‌های کاشت با استخوان فک پیوند
            داشته باشند.{" "}
            <span className="underline underline-offset-4">
              در نتیجه استخوان‌های شما قبل از انجام جراحی ایمپلنت، باید سالم
              باشند.
            </span>
          </p>
        </section>

        <section id="pain" className="mx-auto relative">
          <h2 className="md:mx-gs">ایمپلنت دندان درد دارد؟</h2>
          <p className="md:mx-gs">
            در حین انجام کار شما تحت بی حسی موضعی قرار دارید؛ پس دردی نخواهید
            داشت.
          </p>
          <p className="md:mx-gs">
            بعد از آن، با گذاشتن پرس یخ، می‌توانید تا حد بسیاری درد را کاهش
            دهید. همچنین، برای شما مسکن‌هایی را تجویز میکنیم تا با درد خداحافظی
            کنید!
          </p>
          <p className="md:mx-gs">
            البته شایان به ذکر هست که تحمل درد در افراد متفاوت می‌باشد و برخی
            مراجعه کننده‌ها، درد ایمپلنت را شبیه به درد کشیدن دندان توصیف
            میکنند.
          </p>

          <h3
            style={{ fontFamily: myFont.style.fontFamily }}
            className="text-center md:leading-[4rem] text-2xl md:text-3xl py-8 my-6 mx-auto text-dark"
          >
            خانم دکتر شنیده بودم ایمپلنت خیلی درد داره! <br /> از ترسش، هی
            دست‌دست میکردم دندونامو درست کنم ...
            <br /> الان خیلی پشیمونم :(
            <div className="flex absolute top-0 right-0">
              <QuoteIcon />
            </div>
            <div className="flex rotate-180 absolute bottom-0 left-0">
              <QuoteIcon />
            </div>
          </h3>

          <p className="md:mx-gs">
            بسیاری از افراد به دلیل ترس از درد ایمپلنت، از اقدام به درمان
            خودداری می‌کنند. اما به تاخیر انداختن درمان، فقط باعث بیشتر شدن درد
            و هزینه در آینده خواهد شد...
          </p>
          <p className="md:mx-gs">
            نگران نباشید و برای خوب شدن دندونتون اقدام کنید.
          </p>
        </section>

        <section id="cost">
          <h2>هزینه ایمپلنت دندان</h2>

          <p className="">
            هزینه جراحی ایمپلنت دندان برای هر فرد، متفاوت است و عوامل زیر می
            توانند بر آن تأثیر بگذارند:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>تعداد و انواع ایمپلنت‌های مورد نیاز.</li>
            <li>محل ایمپلنت‌ها در داخل فک.</li>
          </ul>
          <p>
            پس از معاینه، چندتا از بهترین طرح درمانی، مخصوص دندان‌های شما را
            می‌نویسیم و خدمات لازم را متناسب با بودجه شما، اولویت‌بندی می‌کنیم.
          </p>

          <div className="mt-7 mx-auto">
            <h3 className="relative text-2xl font-bold text-accent pr-4">
              همه شایسته لبخند زیبا هستند. مهم نیست چه بودجه‌ای داری! با طرح‌های
              پرداخت و شرایط اقساطی‌ای که تدارک دیدیم؛ توهم میتونی به دستش
              بیاری.
              <StarsGroupIcon className="absolute w-10 md:-right-8 -right-4 -top-4" />
            </h3>
          </div>
        </section>

        <section id="summary" className="mx-auto">
          <h2 className="md:mx-gs">ایمپلنت دندان در یک نگاه</h2>
          <p className="md:mx-gs">
            ایمپلنت‌های دندانی جایگزین دندان‌های از دست رفته می‌شوند و مزایای
            بلندمدتی دارند.
          </p>
          <p className="md:mx-gs mb-5">
            پس از معاینه و عکس‌برداری‌های مورد نیاز، میتوان مشخص کرد که ایمپلنت
            دندانی، درمان مناسبی برای شما می‌باشد یا خیر.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Image src={FacePic} alt="Face Pic" className="" />
            <div className="flex flex-col justify-center">
              <p>
                درد ایمپلنت بسیار کم میباشد و به تعویق انداختن درمان، مدت و درد
                آن را بیشتر خواهد کرد.
              </p>
              <p>
                نگه‌داری ایمپلنت، همانند دندان طبیعی می‌باشد و هر شش‌ماه، برای
                تمیز کردن حرفه‌ای، باید به مطب مراجعه کنید.
              </p>
              <p>
                هزینه ایمپلنت به موارد مختلفی، مانند تعداد و انواع ایمپلنت‌های
                مورد نیاز و محل آن‌ها در داخل فک بستگی دارد.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}

export default ImplantPage;
