import React from "react";
import Image from "next/image";
import Checkmark from "@/components/icons/Checkmark";
import localFont from "next/font/local";
import QuoteIcon from "@/components/icons/QuoteIcon";
import StarsGroupIcon from "@/components/icons/StarsGroupIcon";
import OverlayBox from "@/components/sections/OverlayBox";
import ChildPickingPic from "@/public/children/child_picking.png";
import ChildAgePic from "@/public/children/child_age.png";
import ZeroToNinePic from "@/public/children/0-9.png";
import ThreeToSixPic from "@/public/children/3-6.png";
import SadTooth from "./SadTooth";
import People from "@/components/icons/People";
import ChildFearPic from "@/public/children/child_fear.png";
import PictureCard from "@/components/sections/PictureCard";
import FluoridePic from "@/public/children/fluoride.png";
import FishurPic from "@/public/children/fishur.png";
import FiveWaysPic from "@/public/children/5way.png";
import Toc from "@/components/ui/Toc";

const toc = [
  {
    title: "چرا دندان‌های شیری را مسواک بزنیم؟",
    href: "#why-brush",
  },
  {
    title: "چه سنی مسواک‌زدن کودکم را شروع کنم؟",
    href: "#when-brush",
  },
  {
    title: "۵ راه طلایی مشتاق کردن کودک به مسواک زدن",
    href: "#how-brush",
  },
  {
    title: "چرا از سن کم، کودکمان را به دندانپزشکی ببریم؟",
    href: "#why-visit",
  },
  {
    title: "چگونه ترس کودک خود از دندانپزشکی از بین ببریم؟",
    href: "#how-visit",
  },
  {
    title: "فلوراید تراپی و فیشور سیلانت؛ دو راه برای مراقبت از دندان کودکان",
    href: "#fluoride",
  },
  {
    title: "سخنی با شما والدین عزیز",
    href: "#parents",
  },
];

const fluoride = [
  "برای انجام فلوراید تراپی نیاز به بی حسی موضعی نیست.",
  "بعد از فلوراید تراپی، کودک نباید تا نیم ساعت دهان را شسته و یا آب بنوشید.",
  "معمولا تا چند ساعت بعد از فلوراید تراپی بهتر است مسواک زده نشود تا فلوراید مدت بیشتری روی دندان ها باقی بماند.",
  "جهت افزایش اثر فلوراید و باقی ماندن بیشتر آن بهتر است از خوردن غذاهای سفت و ساینده در آن روز بعد از فلوراید تراپی پرهیز شود.",
];

const fishur = [
  "بهترین سن جهت فیشور سیلنت تراپی اولین مولر دائمی از سن شش تا هشت سالگی و برای دندان مولر دوم دائمی و آسیاهای کوچک یازده تا سیزده سالگی است.",
  "این عمل میتواند برای دندانهای شیری که شیارهای عمیقی دارند و مستعد پوسیدگی هستند نیز انجام گیرد که حدود ۴-۳ سالگی انجام میشود.",
  "فیشور سیلنت تراپی بدون درد و بدون تراش دندان بوده و نیازی به تزریق بی حسی ندارد.",
  "با فیشور سیلنت تراپی میتوان تا حد زیادی از پوسیدگی های سطح جونده دندان پیشگیری کرد.",
];

const fiveWays = [
  {
    title: "بگذارید مسواکش را خودش انتخاب کند: ",
    description:
      "یک روز را برای خرید مسواک مشخص و کودکتان را به داروخانه ببرید یا به شکل آنلاین مسواک‌های مخصوص کودکان را با هم نگاه کنید و اجازه دهید خودش شکل و رنگ مسواکش را انتخاب کند.",
  },
  {
    title: "بگذارید به مسواک زدنتان نگاه کند: ",
    description:
      "کودکان نوپا عاشق تقلید کردن هر کاری هستند که والدین‌شان انجام می‌دهند، بنابراین ارزشش را دارد که مطمئن شوید یکی از این کارها مسواک زدن است. اجازه دهید او ببیند شما با مسواک چه کاری انجام می‌دهید و چگونه مسواک می‌زنید تا سعی کند آن را تقلید کند.",
  },
  {
    title: "روی دندان‌هایش اسم بگذارید: ",
    description:
      "شاید اسم گذاشتن روی هر دندان در حین مسواک زدن، به کودک کمک کند تا دندانی را برای مسواک زدن، فراموش نکند. این کار حس عدالت‌خواهی بچه‌ها را تحریک می‌کند و به باز نگه داشتن دهانش هم کمک خواهد کرد.",
  },
  {
    title: "نقاط جاافتاده را پیدا کنید:",
    description:
      " بعد از مسواک زدن دندان‌های یکدیگر را نگاه کنید تا ببینید آیا تمیز شده‌اند یا نه. به او بگویید شما برخی نقاطی را که او در دندان‌هایش جا انداخته پیدا می‌کنید و اجازه دهید او هم نقاط جاافتاده‌ٔ روی دندان‌های شما را پیدا کند.",
  },
  {
    title: "مرحلهٔ آبکشی را جذاب‌تر کنید: ",
    description:
      "از یک لیوان برای آبکشی مخصوص با رنگ‌ و طرح شاد استفاده کنید تا هم یاد بگیرد که شیر آب را باز نگذارد و هم ماجرا برایش جذاب‌تر شود، چون بدون شک این پر و خالی کردن آب در دهان و سپس توی روشور، بخش مورد علاقه‌ٔ یک کودک نوپاست!",
  },
];

const myFont = localFont({
  src: "../../../public/Digi Anil Bold.ttf",
  display: "swap",
});

function Children() {
  return (
    <div className="blog">
      <article className="">
        <section className="">
          <h1 className="mb-4 text-primary">همه‌چیز درباره دندان اطفال</h1>
          <h3 className="text-primary md:text-2xl text-xl">
            زمان رویش دندان‌ها، مقابله با ترس کودکان و اقدامات دندانپزشکی لازم
          </h3>
        </section>

        <section className="flexColRow gap-4 items-center mx-auto">
          <p className="mb-0 md:mr-gs">
            همانطور که می‌دانید ریشه بسیاری از مشکلات دهان و دندان در دوران
            کودکی است. بدون مراقبت دندانپزشکی مناسب، کودکان با پوسیدگی دهان و
            بیماری مواجه می‌شوند که می‌تواند یک عمر درد و عوارض ایجاد کند.
          </p>

          <Image
            src={ChildPickingPic}
            className="w-full h-full grow md:w-[160%]"
            alt="Child Picking Pic"
          />
        </section>

        <section>
          <Toc items={toc} />
        </section>

        <section id="why-brush">
          <h2>چرا دندان‌های شیری را مسواک بزنیم؟</h2>
          <p>
            مراقبت و حفظ سلامت دندان و لثه در کودکی سبب رشد مناسب لثه می‌شود و
            فاصله مناسب و مورد نیاز برای رشد دندان‌ها را در آینده در پی خواهد
            داشت.دندان‌های شیری پوسیده می‌توانند در تغذیه و گفتار او، اختلال
            ایجاد کنند.
          </p>
          <p className="mb-6">
            اگر دندان‌های شیری پوسیده بیفتند، جای مناسبی برای دندان‌های آینده
            نمی‌گیرند که می‌تواند باعث کج شدن دندان‌های دائمی شود.
          </p>
          <div className="mb-6 mx-auto w-fit">
            <People />
          </div>
          <p className="text-center">
            علاوه بر این، همه دندان‌های شیری جانشین دائمی ندارند. در برخی افراد،
            دندان شیری ممکن است مادام العمر در دهان او باشد.
          </p>
        </section>

        <section id="when-brush" className="mx-auto">
          <h2 className="md:mx-gs">چه سنی مسواک‌زدن کودکم را شروع کنم؟</h2>

          <div className="flex">
            <div className="flex h-full items-center justify-center md:px-8 px-5 py-4 md:py-0 relative mb-5 bg-primary md:bg-transparent">
              <div className="absolute bg-primary bottom-0 md:top-12 w-full z-0 rounded-lg hidden md:block"></div>
              <Image
                src={ChildAgePic}
                alt="Child Age Pic"
                className="object-cover w-[70%] z-10 hidden md:block"
              />
              <h3 className="text-Neutral font-bold md:text-2xl text-center md:mt-12">
                لازم است از زمان رشد اولین دندان کودک، مسواک زدن را شروع کنید.
              </h3>
            </div>
          </div>

          <p className="md:mx-gs">
            اما اقدام برای حفظ سلامت دهان و دندان کودکتان، هیچ وقت زود نیست.
          </p>

          <p className="md:mx-gs">
            حتی قبل از ظاهر شدن دندان‌های کودک، سلامت لثه او مهم است. هنگامی که
            کودک هنوز در رحم است، دندان‌ها در زیر لثه‌ها تشکیل شده‌اند.
          </p>
          <p className="md:mx-gs">
            مراقبت زودهنگام از دهان، به سالم ماندن دندان‌های رشد نکرده، کمک
            می‌کند و آنها را تشویق می‌کند تا به درستی وارد شوند.
          </p>
        </section>

        <section className="mx-auto my-6 md:my-10">
          <h3 className="md:mx-gs mb-8">تولد تا ۹ ماهگی: مراقبت از لثه</h3>
          <p className="md:mx-gs">
            بیشتر نوزادان قبل از 3 ماهگی هیچ دندانی نخواهند داشت.{" "}
          </p>
          <p className="md:mx-gs">
            حتی اگر دندانی وجود نداشته باشد، تمیز کردن روزانه لثه ایده خوبی است.
            این کار را می توان با یک دستمال تمیز و مرطوب یا یک مسواک نرم که برای
            نوزادان ساخته شده است انجام داد.
          </p>

          <div className="flexColRow gap-4 items-center mb-5 relative">
            <Image
              src={ZeroToNinePic}
              alt="Zero To Nine Pic"
              className="w-full"
            />
            <div className="relative">
              <Checkmark className="absolute right-0 w-6 h-6 md:top-0" />
              <h4 className="font-medium md:leading-9 text-dark flex indent-7 relative">
                مسواک زدن لثه‌های کودک می‌تواند به تسکین “درد ناشی از بیرون آمدن
                دندان‌ها از لثه” و “تحریک رویش دندان” کمک کند.
              </h4>
            </div>
          </div>

          <p className="md:mx-gs">
            اگر هر یک از دندان‌های کودکتان در این سن بیرون زده است، آن‌ها را با
            یک مسواک نرم و مقداری خمیر دندان حاوی فلوراید دو بار در روز مسواک
            بزنید.
          </p>

          <p className="md:mx-gs underline underline-offset-4">
            بهترین زمان برای این کار، بعد از شیردهی می‌باشد.
          </p>
        </section>

        <section className="my-6 md:my-10">
          <h3 className="mb-8">
            ۹ تا ۱۲ ماهگی: دندان‌های جدید را مسواک بزنید.
          </h3>
          <p>
            در حال حاضر کودک شما احتمالاً چند دندان دارد که از لثه بیرون
            زده‌اند.
          </p>
          <p>
            مسواک زدن این دندان ها دو بار در روز(فقط با یک‌ذره از خمیر دندان
            حاوی فلوراید) و لثه‌هایی که هنوز هیچ دندانی در آنها ظاهر نشده است،
            مهم است.
          </p>
          <p className="mb-5">
            اگر کودک شما تا اولین سالگرد تولدش هنوز هیچ دندانی ندارد، نگران
            نباشید و به مسواک زدن ادامه دهید.
          </p>

          <div className="relative">
            <StarsGroupIcon className="w-10 absolute -right-4 -top-4" />
            <p className="md:text-3xl pr-4 text-2xl md:leading-[3rem] text-accent font-medium">
              صرف نظر از تعداد دندان‌های کودک شما، زمان آن رسیده است که اولین
              ملاقات دندانپزشکی را برای دلبندتان ترتیب دهید.
            </p>
          </div>
        </section>

        <section className="my-6 md:my-10">
          <h3 className="mb-8">
            1 تا ۳ سالگی: به مسواک زدن و ملاقات با دندانپزشک ادامه دهید.
          </h3>
          <p>
            از آنجایی که دهان کودک شما پر از دندان می شود، مهم است که یک روال
            منظم مسواک زدن حداقل دو بار در روز با خمیر دندان حاوی فلوراید را
            رعایت کنید.
          </p>
          <p className="mb-5">
            سعی کنید کودک خود را تشویق کنید تا بعد از مسواک زدن عادت به تف کردن
            کند.
          </p>

          <div className="mb-5">
            <Image src={ThreeToSixPic} alt="Three To Six Pic" />
            <h5 className="text-primary text-center mt-2">
              کیمیا جون، یکی از کوچولوهای مطبمون
            </h5>
          </div>

          <p className="text-center">
            <mark className="bg-accent bg-opacity-25 p-[1px] leading-9 rounded-lg">
              اگر کودک شما تا 18 ماهگی هنوز دندان نداشت، حتماً با دندانپزشک خود
              ملاقاتی داشته باشید تا در مورد تاخیر در رشد دندان‌ها صحبت کنید.
            </mark>
          </p>
        </section>

        <section className="mt-6 md:my-10">
          <h3 className="mb-8">
            ۳ تا ۶ سالگی: کودک را به استفاده از مسواک، مشتاق کنید.
          </h3>
          <p>
            در این مرحله کودک باید یادگیری مسواک زدن را شروع کند. توصیه می شود
            که میزان فلوراید خمیردندان را روی مسواک به اندازه نخود افزایش دهید.
          </p>
          <p className="mb-5">
            شما همچنان باید به کودک خود در مسواک زدن کمک کنید تا مطمئن شوید که
            مسواک زدن موثر است.
          </p>
          <p>
            کودک خود را تشویق کنید تا خمیر دندان اضافی را بیرون بی‌اندازد و از
            قورت دادن آن خودداری کند.
          </p>
        </section>

        <section className="mx-auto" id="how-brush">
          <h2 className="md:mx-gs">
            ۵ راه <span className="text-yellow-500">طلایی</span> مشتاق کردن کودک
            به مسواک زدن
          </h2>

          <OverlayBox imgsrc={FiveWaysPic}>
            <ol className="flex flex-col list-decimal list-inside">
              {fiveWays.map((i) => (
                <>
                  <li key={i.title} className="mb-4 text-primary font-medium">
                    {i.title}
                  </li>
                  <p>{i.description}</p>
                </>
              ))}
            </ol>
          </OverlayBox>
          <p className="underline-offset-4 underline md:mx-gs">
            احتمالاً تا حدود هفت سالگی قادر نخواهد بود خوب مسواک بزند، اما به
            محض اینکه تمایل و توانایی این کار را داشت، بهتر است بگذارید خودش به
            تنهایی این کار را کند.
          </p>
        </section>

        <section id="why-visit" className="mx-auto">
          <h2 className="md:mx-gs">
            چرا از سن کم، کودکمان را به دندانپزشکی ببریم؟
          </h2>

          <div className="mx-auto w-fit">
            <p
              style={{ fontFamily: myFont.style.fontFamily }}
              className="mb-5 w-fit md:text-3xl text-2xl md:leading-[3rem] px-4 text-dark text-center font-medium relative "
            >
              خانم دکتر ! سن کودک من خیلی کمه؛ دندون‌های شیری هم که میفتن...{" "}
              <br /> پس چرا اذیتش کنم و ببرمش دندونپزشکی!؟
              <QuoteIcon className="md:w-10 w-7 inline-block absolute -top-5 -right-0" />
            </p>
          </div>

          <p className="md:mx-gs">
            کودکان بسیاری داریم که با این تفکر اشتباه والدینشان، به مطب
            دندانپزشکی مراجعه نمی‌کنند.
          </p>
          <p className="md:mx-gs">
            آنها همیشه مایلند بدانند که چرا حفظ دندان اولیه اجباری است، در حالی
            که قرار است به طور طبیعی بیفتند و راه را برای مجموعه ای از دندان های
            جدید باز کنند!
          </p>
          <p className="md:mx-gs mb-5">
            به غیر از پوسیدگی دندان، سایر تغییرات رشدی نیز، نیاز به ارزیابی
            دارند. تراز مناسب دندان‌ها در دهان کودک برای رشد طبیعی و رشد فک
            ضروری است.
          </p>

          <div className="flexColRow flex-col-reverse md:flex-row justify-center items-center gap-5 mb-5">
            <div className="md:mr-14">
              <p>
                برخی از کودکان در طول سال‌های رشد خود، دندان‌های نامناسبی دارند.
                اینجاست که کودک، نیاز به مداخله دندانپزشک دارد.{" "}
              </p>
              <p>
                نادیده گرفتن مسائل مربوط به تراز نامناسب دندان در کودک می‌تواند
                منجر به نقص های دندانی و همچنین اسکلتی در کودک شود.
              </p>
            </div>

            <div className="md:pr-20">
              <SadTooth />
            </div>
          </div>

          <p className="md:mx-gs font-medium text-2xl leading-[3rem] text-center ">
            <mark className="bg-accent bg-opacity-25 p-[2px] rounded-lg">
              “ما می‌کوشیم که کودک در طول خدمات، احساس گرمی و صمیمیت داشته باشد
              تا بتواند با دندانپزشک و والدین در سفر سلامت دهان و دندان خود،
              همکاری کند.”
            </mark>
          </p>
        </section>

        <section id="how-visit">
          <h2>چگونه ترس کودک خود از دندانپزشکی از بین ببریم؟</h2>

          <p>
            ترس از دندانپزشک بسیار رایج است. در حالی که داشتن مقداری اضطراب در
            مورد دندانپزشک قابل درک است، اما نباید مانع سلامت و بهداشت دهان و
            دندان دلبندتان شود. “رفتن به دندانپزشک” بخش مهمی از آن است.
          </p>

          <p>
            به همین دلیل است که تیم دندانپزشکی دکتر سهیلا کریمی تلاش میکند تا
            تجربه رفتن به دندانپزشک را تا حد امکان برای کودکان سرگرم کننده و
            ایمن کند.{" "}
          </p>

          <Image
            src={ChildFearPic}
            alt="Child Fear Pic"
            className="mx-auto mb-5"
          />

          <p>
            برای رزرو وقت <a className="text-primary font-bold">تماس</a> بگیرید؛
            با مشاوره تلفنی همکاران ما، کودک عزیزتان همراه شما و با اطلاع او، به
            راحتی و بدون ترس به مطب مراجعه کند.
          </p>
        </section>

        <section id="fluoride" className="mx-auto">
          <h2 className="md:mx-gs">
            فلوراید تراپی و فیشور سیلانت؛ دو راه برای مراقبت از دندان کودکان
          </h2>
          <div className="md:mx-gs">
            <h4>فلورایدتراپی:</h4>
            <p>
              شیارپوشی دندان یا فیشور سیلانت از پوسیدگی دندان در کودکان جلوگیری
              می‌کند.
            </p>
            <p className="mb-6">
              یون فلوراید در هر خمیر دندان، دهان شویه و وارنیل و ژل های حرفه ای
              (که در مطب دندانپزشکی استفاده می شوند) به مینای دندان های نابالغ
              نفوذ کرده و باعث می شود دندان نسبت به روند پوسیدگی مقاوم ترشود.
            </p>
          </div>

          <div className="mb-5">
            <PictureCard imgSrc={FluoridePic}>
              <h4 className="text-accent mb-5 font-medium">
                نکاتی در مورد فلورایدتراپی:
              </h4>

              <ul className="list-disc list-inside">
                {fluoride.map((i) => (
                  <li key={i} className="mb-2">
                    {i}
                  </li>
                ))}
              </ul>
            </PictureCard>
          </div>

          <div className="md:mx-gs">
            <h4 className="mb-2">فیشورسیلنت‌تراپی:</h4>
            <p className="">
              تقریبا اوایل شش‌سالگی، اولین دندان دائمی آسیاب که آسیای بزرگ است؛
              رویش می‌کند.
            </p>
            <p>
              در برخی از کودکان سطح جونده این دندان‌ها دارای شیارها و
              فرورفتگی‌های عمیقی است که با مسواک‌زدن تمیز نمی‌شوند و خورده‌ها و
              مواد‌غذایی و میکروب‌ها در این شیارها قرار گرفته و باعث پوسیدگی
              دندان میشود.
            </p>
            <p>
              قبل از اینکه این شیارها پوسیده شوند، دندانپزشک می‌تواند شیارهای
              عمیق را با فیشور سیلنت‌تراپی کم‌عمق کند.
            </p>
            <p>
              به این ترتیب با مسواک‌زدن سطح جونده دندان کاملا تمیز شده و از تجمع
              پلاک و خورده‌های مواد‌غذایی و میکروب‌ها در داخل شیارها و پوسیدگی
              جلوگیری می‌شود.
            </p>
          </div>

          <PictureCard imgSrc={FishurPic}>
            <h4 className="text-accent mb-5 font-medium">
              نکاتی در مورد فیشورسیلنت‌تراپی:
            </h4>

            <ul className="list-disc list-inside">
              {fishur.map((i) => (
                <li key={i} className="mb-2">
                  {i}
                </li>
              ))}
            </ul>
          </PictureCard>
        </section>

        <section id="parent">
          <h2>سخنی با شما والدین عزیز</h2>

          <p>دهان کودک به طور مداوم دستخوش تغییرات مختلفی می شود. </p>
          <p>
            در حالی که شرایط دهان یک بزرگسال نسبتاً پایدار است. از این رو، با
            مراجعه به دندانپزشکی می‌توانیم این اطمینان را بدهیم که دندان‌های
            فرزند دلبندتان به درستی و سالم رشد کنند.
          </p>
          <p>
            با ایجاد محیطی آرام و سالم و همچنین ارایه مشاوره لازم خدمت شما
            والدین گرامی، راه را برای لبخندی کاملا سالم باز می‌کنیم.
          </p>
          <p>
            برای مشاوره رایگان و ارزیابی تخصصی، فرم رزرو وقت را پر کرده و یا
            تماس حاصل فرمایید.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Children;
