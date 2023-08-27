import React from "react";
import Image from "next/image";
import Checkmark from "@/components/icons/Checkmark";
import localFont from "next/font/local";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import HeroPic from "@/public/laminate/hero.png";
import Toc from "@/components/ui/Toc";
import OverlayBox from "@/components/sections/OverlayBox";
import PictureCard from "@/components/sections/PictureCard";
import PortfolioPic1 from "@/public/laminate/portfolio1.png";
import PortfolioPic2 from "@/public/laminate/portfolio2.png";
import WhyLaminatePic from "@/public/laminate/why_laminate.png";
import OverlayPic from "@/public/laminate/overlay.png";
import WherePic from "@/public/laminate/where_laminate.png";

const toc = [
  {
    title: "لمینیت دندان چیست؟",
    href: "#what-is-laminate",
  },
  {
    title: "چرا دندان‌ها را لمینیت کنیم؟",
    href: "#why-laminate",
  },
  {
    title: "آیا لمینت دندان می تواند دندان‌های شما را خراب کند؟",
    href: "#damage",
  },
  {
    title: "نگهداری و مراقبت از لمینت دندان",
    href: "#maintenance",
  },
  {
    title: "کجا لمینیت انجام بدیم؟",
    href: "#where",
  },
  {
    title: "مشاوره رایگان",
    href: "#consultation",
  },
];

function LaminatePage() {
  return (
    <div className="blog">
      <article className="max-w-screen-desktop md:mx-auto">
        <section className="mx-auto md:mr-gs">
          <h1 className="mb-4 text-primary w-full">
            همه‌چیز درباره لمینت دندان
          </h1>
          <h4 className="text-primary text-2xl">
            تعریف، مراقبت‌ها و مشاوره رایگان
          </h4>
        </section>

        <section className="flex gap-4 items-center mx-auto">
          <p className="mb-0 md:mr-gs">
            همه‌ی ما در زندگی، نیازمند لبخندی زیبا با دندان‌های مرتب و سفید
            هستیم.
            <br /> لمینیت،یکی از راه‌های رسیدن به این لبخندهای هالیوودی است.
            <br /> اگر دوست دارید در عکس‌هایتان راحت بخندید و شادی را به
            اطرافیانتان هدیه دهید؛ این بخش را از دست ندید!
          </p>

          <Image
            src={HeroPic}
            className="w-full h-full hidden md:block "
            alt="Child Picking Pic"
          />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="what-is-laminate">
          <h2>لمینیت دندان چیست؟</h2>
          <p>
            این پوسته‌ها به منظور تغییر رنگ، شکل، اندازه یا طول دندان ها و بهبود
            ظاهر آن ها به سطح جلویی دندان‌ها چسبانده می شوند.
          </p>
          <p className="">
            اگر دندان‌های شیری پوسیده بیفتند، جای مناسبی برای دندان‌های آینده
            نمی‌گیرند که می‌تواند باعث کج شدن دندان‌های دائمی شود.
          </p>

          <div className="my-5">
            <div className="flex gap-4">
              <Image src={PortfolioPic1} alt="Portfolio Pic" />
              <Image src={PortfolioPic2} alt="Portfolio Pic" />
            </div>
            <p className="text-center mt-2 text-primary ">
              نمونه کار لمینیت دکتر سهیلا کریمی
            </p>
          </div>

          <p>
            در کنار جنبه زیبایی، عملکرد صحیح لمینت نیز مهم است و چسباندن صحیح و
            قوی دندان طبیعی و لمینت چینی ضروری است.
          </p>
        </section>

        <section id="why-laminate" className="mx-auto">
          <h2 className="md:mx-gs">چرا دندان‌ها را لمینیت کنیم؟</h2>

          <p className="md:mx-gs">
            از آنجایی که لمینت را برای همه افراد همانند دندان های اصلی و به صورت
            جداگانه میسازیم؛ بنابراین تشخیص تفاوت بین لمینت و دندان طبیعی
            غیرممکن است.
          </p>

          <p className="md:mx-gs">
            به دلیل استفاده ما از مواد با تکنولوژی بالا و مدرن، لمینیت‌های شما
            بسیار دربرابر لکه های چای و قهوه مقاوم خواهند بود.
          </p>

          <OverlayBox imgsrc={WhyLaminatePic}>
            <ul className="list-disc list-inside">
              <li>محافظت از دندان‌های شما در برابر سایش و فرسودگی</li>
              <li>اصلاح بدشکلی دندان</li>
              <li>برطرف نمودن فواصل دندانی</li>
              <li>رفع به‌هم‌ریختگی جزئی دندان‌ها</li>
            </ul>
          </OverlayBox>
        </section>

        <section id="damage">
          <h2>آیا لمینت دندان می تواند دندان‌های شما را خراب کند؟</h2>
          <p>
            خیر؛ ما از شما می خواهیم که از دهان و فک خود با اشعه ایکس
            تصویربرداری کنید سپس دندان‌های شما را معاینه می کنیم تا مطمئن بشویم
            لمینت دندان برای شما مناسب است.{" "}
          </p>
          <p>
            اگر تشخیص بدهیم که لمینت انتخاب مناسبی برای شما نیست، گزینه‌های
            دیگری مانند ونیرهای کامپوزیت، باندینگ دندان، ارتودنسی، سفید کردن
            دندان یا فقط کانتورینگ دندان را پیشنهاد می کنیم.
          </p>

          <div className="relative mt-6">
            <StarsGroupIcon className="w-10 absolute md:-right-8 -right-4 -top-4" />
            <p className="md:text-3xl text-2xl text-accent font-medium md:leading-[3rem] leading-9 pr-4">
              با مشاوره اختصاصی و بالا بردن آگاهی شما، به شما کمک میکنیم بهترین
              راه را برای زیبایی دندان‌هایتان انتخاب کنید.
            </p>
          </div>
        </section>

        <section className="mx-auto" id="maintenance">
          <h2 className="md:mx-gs">مراقبت و نگه‌داری از لمینیت دندان</h2>
          <p className="md:mx-gs">
            حالا که راهی برای اصلاح لبخند خود پیدا کرده‌اید؛ خیلی خوب است که
            مراقبت‌های لازم و ملاقات با پزشک در وقت‌های معین را مهم بشمارید.{" "}
          </p>
          <p className="md:mx-gs">
            مسواک زدن این دندان ها دو بار در روز(فقط با یک‌ذره از خمیر دندان
            حاوی فلوراید) و لثه‌هایی که هنوز هیچ دندانی در آنها ظاهر نشده است،
            مهم است.
          </p>
          <h4 className="md:mx-gs mb-2 text-primary font-semibold">
            مواردی که باعث کدر شدن رنگ لمینیت شما میشود:
          </h4>

          <ul className="list-disc list-inside md:mx-24">
            <li>مصرف بیش از اندازه نوشیدنی‌ها و مواد غذایی رنگی</li>
            <li>استفاده کردن زیاد از دهان‌شویه نامناسب</li>
            <li>مصرف برخی از داروهای خاص</li>
            <li>رعایت نکردن بهداشت دهان و دندان</li>
            <li>استفاده کردن از فلوراید به میزان زیاد</li>
          </ul>

          <div className="md:mr-10">
            <PictureCard imgSrc={OverlayPic}>
              <h4 className="text-accent font-bold">
                اقدامات لازم برای پیشگیری:
              </h4>

              <ol className="list-decimal list-inside">
                <li>سعی کنید حداقل روزی دوبار مسواک بزنید.</li>
                <li>روزانه از نخ‌دندان استفاده کنید.</li>
                <li>
                  با مشورت دندانپزشک خود از یک دهان‌شویه مناسب استفاده کنید.
                </li>
                <li>مصرف نوشیدنی‌ها و خوراکی‌های رنگی را کاهش دهید.</li>
                <li>از استعمال سیگار و دخانیات اجتناب کنید.</li>
                <li>
                  هر چند وقت یک بار برای چکاپ وضعیت دندان‌های خود به مطب
                  دندانپزشکی مراجعه داشته باشید.
                </li>
              </ol>
            </PictureCard>
          </div>
        </section>

        <section id="where" className="mx-auto">
          <h2 className="mb-8 md:mx-gs">کجا لمینیت انجام بدیم؟</h2>
          <p className="md:mx-gs">
            هدف بسیاری از زیباجویان از انجام لمینیت، داشتن دندان‌های سفیدتر و
            طبیعی می‌باشد. از این رو، با توجه به شرایط منحصربه‌فرد شما، یک
            برنامه درمانی سفارشی ایجاد می‌کنیم که نیازها و اهداف دندان‌هایتان را
            برآورده کنیم.
          </p>
          <p className="md:mx-gs">
            هدف بسیاری از زیباجویان از انجام لمینیت، داشتن دندان‌های سفیدتر و از
            آنجایی که لمینیت دندان هزینه نسبتا بالایی دارد و انجام آن مهارت قابل
            توجهی می‌طلبد، بهتر است برای نصب آن، به دندانپزشک باتجربه‌ای مراجعه
            کنید.{" "}
          </p>

          <div className="flexColRow rounded-lg justify-center items-center gap-4 md:px-gs py-4 bg-primary mb-5">
            <Image src={WherePic} className="w-full" alt="Where" />
            <h3 className="font-bold text-Neutral w-fit text-center">
              ما با آخرین تکنیک ها و فناوری‌های لمینیت، به روز می‌مانیم تا
              اطمینان حاصل کنیم که بیماران ما بهترین مراقبت ممکن را دریافت
              می‌کنند.
            </h3>
          </div>

          <p className="md:mx-gs">
            دکتر سهیلا کریمی دارای سال ها تجربه ارائه کلیه خدمات دندانپزشکی به
            مراجعه‌کنندگان را در شهر زیبای تبریز را دارد.
          </p>
          <p className="md:mx-gs">
            برای مشاوره رایگان و ارزیابی تخصصی، فرم رزرو وقت را پر کرده و یا
            تماس حاصل فرمایید.
          </p>
        </section>
      </article>
    </div>
  );
}

export default LaminatePage;
