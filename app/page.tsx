import Image from "next/image";
import Hero from "./landingPage/Hero";
import Introduction from "./landingPage/Introduction";
import Services from "./landingPage/Services";
import Journey from "./landingPage/Journey";
import Testimonials from "./landingPage/Testimonials";
import Instagram from "./landingPage/Instagram";
import ReservationForm from "./landingPage/ReservationForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-16 md:gap-32 pb-8">
      <Hero />
      <Introduction />
      <Services />
      <Journey />
      <Testimonials />
      <Instagram />
      <ReservationForm />
    </main>
  );
}
