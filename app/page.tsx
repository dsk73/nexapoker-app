import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import Bonuses from "@/components/sections/Bonuses";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative text-white overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <Bonuses />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
