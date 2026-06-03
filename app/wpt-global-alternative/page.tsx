//nexapoker-app/app/wpt-global-alternative/page.tsx
import { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/seo/HeroSection";
import FeaturesSection from "@/components/seo/FeaturesSection";
import PokerFormatsSection from "@/components/seo/PokerFormatsSection";
import TimelineSection from "@/components/seo/TimelineSection";
import ComparisonTable from "@/components/seo/ComparisonTable";
import ContentSection from "@/components/seo/ContentSection";
import LearningHubSection from "@/components/seo/LearningHubSection";
import FAQSection from "@/components/seo/FAQSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import CTASection from "@/components/seo/CTASection";
import TrustSection from "@/components/seo/TrustSection";

import { generateSEO } from "@/lib/seo";

import { wptGlobalPageData } from "@/data/wpt-global";
import { wptFaqs } from "@/data/faqs/wptFaqs";

export const metadata: Metadata = generateSEO({
  title: "Best WPT Global Alternative | Nexa Poker",
  description:
    "Looking for a WPT Global alternative? Discover Nexa Poker with tournaments, cash games, weekly rakeback rewards, fast withdrawals, and premium online poker gameplay.",
  path: "/wpt-global-alternative",
  keywords: [
    "wpt global alternative",
    "wpt alternative",
    "online poker alternative",
    "real money poker",
    "poker tournaments",
    "cash games",
    "online poker india",
    "nexa poker",
  ],
});

export default function WPTGlobalAlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...wptGlobalPageData.hero} />
      <TrustSection
        title="Built Around The Player Experience"
        subtitle="Combining tournaments, rewards, accessibility, and premium gameplay."
        items={[
          {
            title: "Daily Tournament Schedule",
            description:
              "Regular tournaments provide consistent opportunities to compete.",
          },
          {
            title: "Weekly Player Rewards",
            description:
              "Earn value through rakeback programs and promotional campaigns.",
          },
          {
            title: "Multi-Device Access",
            description: "Play from Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Premium Poker Environment",
            description:
              "Designed for players who want a modern online poker experience.",
          },
        ]}
      />
      <FeaturesSection
        title="Why Players Explore Alternatives"
        subtitle="Discover features that make Nexa Poker a compelling option."
        features={wptGlobalPageData.features || []}
      />
      <ContentSection
        title="Why Compare Online Poker Platforms?"
        subtitle="Choosing the right poker platform matters."
        content={[
          "Online poker players often compare platforms to find the best combination of tournaments, rewards, game selection, promotions, and overall user experience.",
          "Every player has different priorities. Some focus on tournament schedules while others value cash game action, rewards programs, or platform accessibility.",
          "Comparing poker platforms helps players understand which environment best suits their playing style and long-term goals.",
          "The ideal poker experience combines strong tournament offerings, active player pools, rewards, smooth gameplay, and reliable support.",
        ]}
      />
      <PokerFormatsSection
        title="Popular Poker Formats"
        subtitle="Enjoy multiple poker experiences from a single platform."
        formats={wptGlobalPageData.pokerFormats || []}
      />
      <TimelineSection
        title="Start Playing In Four Steps"
        subtitle="Get access and begin your poker journey quickly."
        steps={wptGlobalPageData.timeline || []}
      />
      <ComparisonTable
        title="Nexa Poker vs Typical Alternatives"
        subtitle="See how Nexa Poker compares across important player features."
        alternativeName="Typical Alternative"
        rows={wptGlobalPageData.comparisonRows || []}
      />
      <ContentSection
        title="What Players Look For In An Alternative"
        subtitle="Key factors that influence platform selection."
        content={[
          "Players often evaluate tournament schedules, prize pools, rewards programs, software quality, and game variety when comparing poker platforms.",
          "Mobile accessibility has become increasingly important, allowing players to participate in games and tournaments from almost anywhere.",
          "Reliable support, player promotions, and smooth transactions contribute significantly to the overall poker experience.",
          "Choosing a platform that aligns with personal preferences can improve both enjoyment and long-term engagement.",
        ]}
      />
      <LearningHubSection
        title="Poker Strategy & Learning Resources"
        subtitle="Improve your game with guides and educational content."
        items={wptGlobalPageData.learningHub || []}
      />
      <FAQSection
        title="WPT Global Alternative FAQs"
        subtitle="Answers to common comparison questions."
        faqs={wptFaqs}
      />
      <InternalLinksSection
        title="Explore More Poker Resources"
        subtitle="Discover additional poker pages and guides."
        links={wptGlobalPageData.internalLinks || []}
      />
      <CTASection
        title="Experience Nexa Poker Today"
        description="Join tournaments, play cash games, earn weekly rewards, and enjoy a premium online poker experience."
        primaryButton={{
          text: "Download App",
          href: "/download",
        }}
        secondaryButton={{
          text: "Join Telegram",
          href: "https://t.me/nexapoker",
        }}
      />
      <Footer />
    </main>
  );
}
