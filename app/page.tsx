import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { OpeningHours } from "@/components/landing/OpeningHours";
import { Reviews } from "@/components/landing/Reviews";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <OpeningHours />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
