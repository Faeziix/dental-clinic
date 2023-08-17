import React from "react";
import styles from "./implant.module.scss";
import StructurePic from "@/public/implant/structure.png";
import Image from "next/image";
import Checkmark from "@/components/icons/Checkmark";
import localFont from "next/font/local";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import FacePic from "@/public/implant/face.png";

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
    href: "#care",
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
    <div className={styles.content}>
      <article className="mt-20 max-w-3xl md:mx-auto mx-5">
        <h1 className="pt-8 mb-6">همه‌چیز درباره ایمپلنت دندان</h1>
        <p>
          ایمپلنت های دندانی، ساختارهای مصنوعی هستند که جراح دندان در استخوان فک
          فرد قرار می دهد. اگر یک یا چند دندان خود را از دست داده‌اید؛ ممکن است
          به ایمپلنت دندان احتیاج داشته باشید.
        </p>
        <ul className="border-r-2 border-r-primary pr-4 md:mr-10 mt-4">
          {toc.map((i) => (
            <a key={i.href} href={i.href}>
              <li className="mb-2 text-primary">{i.title}</li>
            </a>
          ))}
        </ul>

        <section>
          <h2 id="what-is-implant">ایمپلنت دندانی چیست؟</h2>
          <p>
            ایمپلنت دندان، جایگزین دندان ازدست‌رفته می شود. ما با دستگاه‌های پیچ
            مانند، ایمپلنت را در استخوان فک قرار می‌دهیم.
          </p>
          <Image
            className="mb-4 mx-auto"
            src={StructurePic}
            alt="Implant Structure"
          />
          <p>
            تاج(روکش) را به صورت سفارشی، متناسب با فرم دهان و رنگ دندان‌هایتان
            می‌سازیم. این تضمین را به شما می‌دهیم که ظاهر و حس روکش‌ها، مانند
            دندان‌های طبیعی شما خواهند بود.
          </p>
        </section>

        <section>
          <h2 id="advantages">مزایا ایمپلنت در مقابل دندان‌مصنوعی چیست؟</h2>
          <p>
            ایمپلنت‌ها، دارای چندین مزیت نسبت به دندان‌های مصنوعی متحرک هستند.
            ایمپلنت:
          </p>
          <ul className="list-disc list-inside">
            <li>طبیعی‌تر و راحت‌تر است.</li>
            <li>درصد موفقیت بالاتری دارد.</li>
            <li>عملکرد جویدن را بهبود می‌بخشد.</li>
            <li>منجر به کاهش خطر ایجاد حفره در دندان‌های مجاور می‌شود.</li>
            <li>باعث نگهداری بهتر استخوان در محل دندان ازدست‌رفته می‌شود.</li>
            <li>حساسیت در دندان‌های مجاور را کاهش می‌دهد.</li>
            <li>لازم نیست هر شب بیرون آورده و تمیز شود.</li>
          </ul>
        </section>

        <section>
          <h2 id="care">نگه‌داری و مراقبت از ایمپلنت دندان چگونه است؟</h2>
          <p>
            پس از اینکه تحت عمل جراحی ایمپلنت دندان قرار گرفتید، باید به مسواک
            زدن و نخ‌دندان کشیدن منظم ادامه دهید(این کار علاوه بر سلامت
            دندان‌ها، به افزایش عمر ایمپلنت شما، کمک میکند.). دندان‌های مصنوعی
            مانند دندان‌های معمولی، به مراقبت و نگهداری نیاز دارند.
          </p>
          <div className="flex gap-2">
            <Checkmark className="w-24 md:w-auto" />
            <p>
              برای نظارت بر ایمپلنت‌ها و اطمینان از سالم بودن دندان‌ها و لثه‌های
              شما، مهم است که هر 6 ماه یک بار برای تمیز کردن حرفه‌ای به مطب
              مراجعه کنید.
            </p>
          </div>
        </section>

        <section>
          <h2 id="suitable">آیا ایمپلنت برای همه افراد مناسب هست؟</h2>
          <p>
            ایمپلنت دندان با وجود همه مزایایی که دارد، برای همه مناسب نیست. ما
            اطمینان خاطر پیدا می‌کنیم که دستگاه‌های کاشت با استخوان فک پیوند
            داشته باشند. در نتیجه استخوان‌های شما قبل از انجام جراحی ایمپلنت،
            باید سالم باشند.
          </p>
        </section>

        <section>
          <h2 id="pain">ایمپلنت درد دارد؟</h2>
          <p>
            ایمپلنت دندان درد دارد؟بسیاری از افراد، به دلیل ترس از درد ایمپلنت،
            از اقدام به درمان خودداری می‌کنند. اما شیوه انجام ایمپلنت در مجموعه
            ما با استفاده از تکنیک‌های مدرن و با درد بسیار کمی می‌باشد.
          </p>

          <div className="border-2 mb-4 border-black relative rounded-[32px] py-4 shadow-[0px_7px_0px_0px_black]">
            <h4
              style={{ fontFamily: myFont.style.fontFamily }}
              className="max-w-xs relative text-center text-xl md:text-2xl py-8 mx-auto"
            >
              خانم دکتر شنیده بودم ایمپلنت خیلی درد داره! از ترسش، هی دست‌دست
              میکردم دندونامو درست کنم ... الان خیلی پشیمونم :(
              <div className="flex absolute top-0 md:-right-12 right-0">
                <QuoteIcon />
                <QuoteIcon />
              </div>
              <div className="flex rotate-180 absolute bottom-0 md:-left-12 left-0">
                <QuoteIcon />
                <QuoteIcon />
              </div>
            </h4>
          </div>

          <p>
            در حین انجام کار شما تحت بی حسی موضعی قرار دارید؛ پس دردی نخواهید
            داشت و بعد از آن، با گذاشتن پرس یخ، می‌توانید تا حد بسیاری درد را
            کاهش دهید. همچنین، برای شما مسکن‌هایی را تجویز میکنیم تا با درد
            خداحافظی کنید! البته شایان به ذکر هست که تحمل درد در افراد متفاوت
            می‌باشد و برخی مراجعه کننده‌ها، درد ایمپلنت را شبیه به درد کشیدن
            دندان توصیف میکنند.
          </p>
        </section>

        <section>
          <h2 id="cost">هزینه ایمپلنت دندان</h2>

          <p className="">
            هزینه جراحی ایمپلنت دندان برای هر فرد، متفاوت است و عوامل زیر می
            توانند بر آن تأثیر بگذارند
          </p>
          <ul className="list-disc list-inside">
            <li>تعداد و انواع ایمپلنت‌های مورد نیاز.</li>
            <li>محل ایمپلنت‌ها در داخل فک.</li>
          </ul>

          <div className="my-4 max-w-lg mx-auto">
            <h4 className="relative md:py-20 py-10 text-center font-bold text-accent">
              همه شایسته لبخند زیبا هستند. مهم نیست چه بودجه‌ای داری! با طرح‌های
              پرداخت و شرایط اقساطی‌ای که تدارک دیدیم؛ توهم میتونی به دستش
              بیاری.
              <StarsGroupIcon className="absolute w-10 md:w-auto top-0 md:-right-10" />
              <StarsGroupIcon className="absolute w-10 md:w-auto bottom-0 md:-left-10 left-0" />
            </h4>
          </div>

          <p>
            پس از معاینه، چندتا از بهترین طرح درمانی، مخصوص دندان‌های شما را
            می‌نویسیم و خدمات لازم را متناسب با بودجه شما، اولویت‌بندی می‌کنیم.
            جهت کسب اطلاعات بیشتر از طرح‌های پرداخت، تماس بگیرید.
          </p>
        </section>

        <section>
          <h2 id="summary">ایمپلنت دندان در یک نگاه</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <Image src={FacePic} alt="Face Pic" className="" />
            <p>
              ایمپلنت‌های دندانی جایگزین دندان‌های از دست رفته می‌شوند و مزایای
              بلندمدتی دارند. پس از معاینه و عکس‌برداری‌های مورد نیاز، میتوان
              مشخص کرد که ایمپلنت دندانی، درمان مناسبی برای شما می‌باشد یا خیر.
              درد ایمپلنت بسیار کم میباشد و به تعویق انداختن درمان، مدت و درد آن
              را بیشتر خواهد کرد. نگه‌داری ایمپلنت، همانند دندان طبیعی می‌باشد و
              هر شش‌ماه، برای تمیز کردن حرفه‌ای، باید به مطب مراجعه کنید. هزینه
              ایمپلنت به موارد مختلفی، مانند تعداد و انواع ایمپلنت‌های مورد نیاز
              و محل آن‌ها در داخل فک بستگی دارد.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default ImplantPage;
