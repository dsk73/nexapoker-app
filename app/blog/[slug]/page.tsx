//nexapoker-app/app/blog/[slug]/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ArrowLeft } from "lucide-react";

const blogPosts = {
  "best-online-poker-apps-2026": {
    title: "Best Online Poker Apps in 2026",
    date: "May 2026",
    content: `
Online poker continues to grow rapidly worldwide as players search for smooth gameplay, fast withdrawals, exciting tournaments, and reliable poker platforms. Modern poker applications now provide professional poker experiences directly on mobile devices and desktop systems.

Players searching for the best online poker apps in 2026 usually look for stable gameplay, rewarding promotions, secure transactions, and multi-device support. Nexa40 is becoming one of the fast-growing online poker platforms designed to deliver premium poker gameplay across Android, iOS, Windows, and Mac devices.

One of the biggest advantages of modern poker applications is convenience. Players can instantly join tournaments, cash games, and leaderboard events without visiting physical poker rooms. Mobile poker apps allow users to enjoy online poker anytime and anywhere.

Nexa40 focuses on providing a smooth poker experience with optimized performance, quick navigation, and stable gameplay infrastructure. The platform supports both recreational poker players and experienced grinders looking for consistent poker action.

Fast withdrawals are extremely important for online poker players. Nexa40 prioritizes secure balance management and efficient withdrawal systems to provide a reliable poker environment for players worldwide.

Weekly rakeback systems and promotions also help players maximize long-term value while continuing to enjoy tournaments and cash games regularly.

Poker players in 2026 expect:
- smooth software
- secure transactions
- fast withdrawals
- mobile compatibility
- tournament variety
- rewarding promotions

Nexa40 is designed around these expectations while continuing to improve gameplay quality and user experience.

Whether you are looking for tournament poker, recreational cash games, or competitive poker action, modern poker platforms provide more opportunities than ever before for online players worldwide.
    `,
  },

  "how-to-download-nexa-poker": {
    title: "How to Download Nexa Poker",
    date: "May 2026",
    content: `
Downloading Nexa Poker is simple and fast across Android, iOS, Windows, and Mac devices. Players can quickly install the application and begin playing online poker within minutes.

Modern poker players expect smooth onboarding experiences and easy installation processes. Nexa Poker focuses on providing secure downloads and responsive poker software for all major platforms.

Android users can download the APK version directly and install it securely on smartphones and tablets. iPhone users can access the iOS-compatible poker version while desktop players can install dedicated Windows and Mac software.

The poker software is optimized for:
- tournaments
- cash games
- fast gameplay
- stable connections
- smooth navigation

After installation, players can create accounts, deposit funds securely, and begin participating in tournaments and poker cash games immediately.

Weekly rakeback rewards, exciting promotions, and leaderboard contests are also available for active poker players using the platform regularly.

Downloading poker software from trusted sources is extremely important for security and gameplay stability. Nexa Poker focuses on providing reliable poker software designed for modern online poker players.
    `,
  },

  "nexa-poker-vs-wpt-global": {
    title: "Nexa Poker vs WPT Global",
    date: "May 2026",
    content: `
Online poker players often compare poker platforms to find the best gameplay experience, tournament schedules, and promotional systems. Nexa Poker and WPT Global are both recognized among players searching for premium online poker experiences.

Players typically compare:
- gameplay quality
- tournament availability
- poker software
- withdrawal speed
- promotions
- multi-device support

Nexa Poker focuses on smooth gameplay, fast withdrawals, weekly rakeback systems, and modern poker software designed for both recreational and experienced poker players.

The platform supports Android, iOS, Windows, and Mac devices while offering tournaments and cash games throughout the day.

Fast withdrawals and secure gameplay infrastructure are extremely important for online poker users. Nexa Poker prioritizes efficient transactions and stable poker gameplay to ensure smooth user experiences.

Players looking for modern poker alternatives often search for platforms that provide rewarding gameplay systems alongside optimized poker software.

Poker players today expect professional gameplay experiences, stable servers, responsive software, and exciting promotions — all areas that continue to shape the competitive online poker industry.
    `,
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-16 px-6 bg-linear-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-pink-600 font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-5">
            <CalendarDays className="w-4 h-4" />
            {post.date}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Explore insights, guides, and poker knowledge from Nexa40 covering
            online poker, tournaments, poker software, withdrawals, promotions,
            and poker gameplay strategies.
          </p>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700">
            {post.content
              .trim()
              .split("\n\n")
              .map((paragraph, index) => {
                if (paragraph.startsWith("- ")) {
                  const items = paragraph
                    .split("\n")
                    .map((item) => item.replace("- ", ""));

                  return (
                    <ul key={index}>
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return <p key={index}>{paragraph}</p>;
              })}
          </div>

          {/* INTERNAL LINKS */}
          <div className="mt-16 grid md:grid-cols-2 gap-5">
            <Link
              href="/nexa-poker-download"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                Nexa Poker Download
              </h3>

              <p className="text-gray-600 text-sm">
                Download Nexa40 for Android, iOS, Windows, and Mac devices.
              </p>
            </Link>

            <Link
              href="/online-poker"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Online Poker Guide</h3>

              <p className="text-gray-600 text-sm">
                Learn how modern online poker platforms work in 2026.
              </p>
            </Link>

            <Link
              href="/poker-download"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">Poker Download</h3>

              <p className="text-gray-600 text-sm">
                Install premium poker software on all major devices.
              </p>
            </Link>

            <Link
              href="/wpt-global-alternative"
              className="rounded-2xl border border-gray-200 p-5 hover:border-pink-500 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                WPT Global Alternative
              </h3>

              <p className="text-gray-600 text-sm">
                Explore poker alternatives with tournaments and rakeback.
              </p>
            </Link>
          </div>

          {/* DARK CTA SECTION */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0018] p-10 md:p-14 text-center">
            {/* BACKGROUND */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute w-100 h-100 bg-pink-600/15 blur-[120px] -top-24 -left-24" />
              <div className="absolute w-87.5 h-87.5 bg-purple-600/15 blur-[120px] -bottom-24 -right-24" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white!">
              Start Playing Online Poker
            </h2>

            <p className="max-w-2xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              Download Nexa40 and experience premium online poker gameplay,
              tournaments, fast withdrawals, and weekly rakeback rewards.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white! px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-pink-500/20"
              >
                Download Nexa40
              </Link>

              <Link
                href="/online-poker"
                className="inline-flex items-center justify-center border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 text-white! px-8 py-4 rounded-2xl font-semibold transition"
              >
                Explore Online Poker
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
