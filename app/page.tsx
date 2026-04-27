import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-green-500 opacity-30 blur-[150px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-30 blur-[150px] bottom-[-150px] right-[-150px]" />
      </div>

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <Features />

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
