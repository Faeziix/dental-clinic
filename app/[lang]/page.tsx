import Hero from "./landingPage/Hero";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const Introduction = dynamic(() => import("./landingPage/Introduction"), {
  ssr: false,
});
const Services = dynamic(() => import("./landingPage/Services"), {
  ssr: false,
});
const Journey = dynamic(() => import("./landingPage/Journey"), { ssr: false });
const Testimonials = dynamic(() => import("./landingPage/Testimonials"), {
  ssr: false,
});
const Instagram = dynamic(() => import("./landingPage/Instagram"), {
  ssr: false,
});
const ReservationForm = dynamic(() => import("./landingPage/ReservationForm"), {
  ssr: false,
});

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
