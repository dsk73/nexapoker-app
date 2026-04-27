import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Bonuses from "@/components/Bonuses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-150 h-150 bg-green-500 opacity-30 blur-[150px] -top-37.5 -left-37.5" />
        <div className="absolute w-125 h-125 bg-purple-500 opacity-30 blur-[150px] -bottom-37.5 -right-37.5" />
      </div>

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <Features />

      <Bonuses />
      <Testimonials />
      <FAQ />

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <div className="text-4xl mb-4">1️⃣</div>
            <p>Join our Telegram channel</p>
          </div>

          <div>
            <div className="text-4xl mb-4">2️⃣</div>
            <p>Register your account</p>
          </div>

          <div>
            <div className="text-4xl mb-4">3️⃣</div>
            <p>Start playing & winning</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} NexaPoker. All rights reserved.</p>
      </footer>
    </main>
  );
}
