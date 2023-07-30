import Hero from "./Hero";
import Image from "next/image";
import Introduction from "./Introduction";
import Services from "./Services";
import Journey from "./Journey";
import Testimonials from "./Testimonials";
import Instagram from "./Instagram";
import ReservationForm from "./ReservationForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-16 pb-8">
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
