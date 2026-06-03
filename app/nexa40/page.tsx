//nexapoker-app/app/nexa40/page.tsx
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

import { nexa40PageData } from "@/data/nexa40";
import { nexa40Faqs } from "@/data/faqs/nexa40Faqs";

export const metadata: Metadata = generateSEO({
  title: "Nexa40 | Real Money Online Poker Platform",
  description:
    "Play real money poker on Nexa40 with tournaments, cash games, weekly rakeback rewards, fast withdrawals, and premium online poker experiences.",
  path: "/nexa40",
  keywords: [
    "nexa40",
    "nexa 40",
    "online poker",
    "real money poker",
    "poker tournaments",
    "cash games",
    "poker app",
    "nexa poker",
  ],
});

export default function Nexa40Page() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...nexa40PageData.hero} />
      <TrustSection
        title="Trusted By Online Poker Players"
        subtitle="Built around performance, rewards, and player satisfaction."
        items={[
          {
            title: "Daily Tournament Action",
            description:
              "Compete in exciting poker tournaments running throughout the day.",
          },
          {
            title: "Weekly Rakeback Rewards",
            description:
              "Earn additional value through ongoing player reward programs.",
          },
          {
            title: "Multi-Platform Access",
            description:
              "Play across Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Premium Poker Experience",
            description:
              "Enjoy smooth gameplay designed for modern online poker players.",
          },
        ]}
      />
      <FeaturesSection
        title="Everything You Need To Play Online Poker"
        subtitle="Nexa40 combines tournaments, rewards, convenience, and performance."
        features={nexa40PageData.features || []}
      />
      <ContentSection
        title="What Is Nexa40?"
        subtitle="A modern online poker ecosystem."
        content={[
          "Nexa40 is a promotional code of a premium online poker destination designed for players who want access to tournaments, cash games, player rewards, and smooth gameplay experiences.",
          "Whether you are a beginner learning the basics or an experienced player seeking daily action, Nexa40 provides a platform that supports multiple playing styles and preferences.",
          "Players can participate in competitive tournaments, enjoy real money cash games, earn weekly rakeback rewards, and access promotional events throughout the year.",
          "The platform focuses on accessibility, convenience, and creating a high-quality online poker environment for modern players.",
        ]}
      />
      <PokerFormatsSection
        title="Popular Poker Formats On Nexa40"
        subtitle="Explore the games enjoyed by players every day."
        formats={nexa40PageData.pokerFormats || []}
      />
      <TimelineSection
        title="How To Start Playing"
        subtitle="Get started with Nexa40 in four easy steps."
        steps={nexa40PageData.timeline || []}
      />
      <ComparisonTable
        title="Why Players Prefer Nexa40"
        subtitle="Compare the Nexa40 experience with standard poker platforms."
        alternativeName="Typical Platforms"
        rows={nexa40PageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of Playing On Nexa40"
        subtitle="Designed for convenience, rewards, and exciting gameplay."
        content={[
          "Players enjoy access to regular tournaments, active cash games, and promotional opportunities designed to increase engagement and value.",
          "Weekly rakeback rewards provide additional benefits for active players while helping create a more rewarding overall experience.",
          "Cross-device compatibility allows players to enjoy poker on Android, iPhone, Windows, and Mac devices.",
          "A combination of tournaments, rewards, and accessibility makes Nexa40 a strong choice for online poker players.",
        ]}
      />
      <LearningHubSection
        title="Learn & Improve"
        subtitle="Poker guides and educational resources."
        items={nexa40PageData.learningHub || []}
      />
      <FAQSection
        title="Nexa40 Frequently Asked Questions"
        subtitle="Common questions answered."
        faqs={nexa40Faqs}
      />
      <InternalLinksSection
        title="Explore More"
        subtitle="Discover more poker resources."
        links={nexa40PageData.internalLinks || []}
      />
      <CTASection
        title="Join Nexa40 Today"
        description="Play tournaments, cash games, and unlock weekly rewards on a premium online poker platform."
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
