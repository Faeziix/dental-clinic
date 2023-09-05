import Hero from "./landingPage/Hero";
import Introduction from "./landingPage/Introduction";
import Services from "./landingPage/Services";
import Journey from "./landingPage/Journey";
import Testimonials from "./landingPage/Testimonials";
import Instagram from "./landingPage/Instagram";
import ReservationForm from "./landingPage/ReservationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr. Soheila Karimi",
  description: "Dr. Soheila Karimi's Dental Clinic Website",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://dental-clinic-faeziix.vercel.app/",
    title: "Dr. Soheila Karimi",
    description: "Dr. Soheila Karimi's Dental Clinic Website",
    images: [
      {
        url: "https://dental-clinic-faeziix.vercel.app/Doctor-image.jpeg",
        width: 800,
        height: 600,
        alt: "Dr. Soheila Karimi",
      },
    ],
    siteName: "Dr. Soheila Karimi",
  },
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
