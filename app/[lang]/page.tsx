import Hero from "./landingPage/Hero";
import Introduction from "./landingPage/Introduction";
import Services from "./landingPage/Services";
import Journey from "./landingPage/Journey";
import Testimonials from "./landingPage/Testimonials";
import Instagram from "./landingPage/Instagram";
import ReservationForm from "./landingPage/ReservationForm";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Soheila Karimi",
  description: "Dr. Soheila Karimi's Dental Clinic Website",
};

export default function Home({ params: { lang } }) {
  return (
    <main className="flex flex-col items-center justify-between gap-16 md:gap-32 pb-8">
      <Hero />
      <Introduction lang={lang} />
      <Services lang={lang} />
      <Journey lang={lang} />
      <Testimonials lang={lang} />
      <Instagram lang={lang} />
      <ReservationForm lang={lang} />
    </main>
  );
}
