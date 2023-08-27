"use client";
import Hero from "./landingPage/Hero";
import Introduction from "./landingPage/Introduction";
import Services from "./landingPage/Services";
import Journey from "./landingPage/Journey";
import Testimonials from "./landingPage/Testimonials";
import Instagram from "./landingPage/Instagram";
import ReservationForm from "./landingPage/ReservationForm";
import { useTranslations } from "next-intl";

export default function Home({ params: { lang } }) {
  const dict = useTranslations("landingPage");

  return (
    <main className="flex flex-col items-center justify-between gap-16 md:gap-32 pb-8">
      <Hero dict={dict} />
      <Introduction dict={dict} lang={lang} />
      <Services dict={dict} lang={lang} />
      <Journey dict={dict} lang={lang} />
      <Testimonials dict={dict} lang={lang} />
      <Instagram dict={dict} lang={lang} />
      <ReservationForm dict={dict} lang={lang} />
    </main>
  );
}
