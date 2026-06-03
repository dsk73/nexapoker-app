//nexapoker-app/app/nexa-40/page.tsx
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

import { nexa40AlternativePageData } from "@/data/nexa-40";
import { nexa40Faqs } from "@/data/faqs/nexa40Faqs";

export const metadata: Metadata = generateSEO({
  title: "Nexa 40 | Play Real Money Online Poker",
  description:
    "Play real money poker on Nexa 40 with daily tournaments, active cash games, weekly rakeback rewards, and premium online poker gameplay.",
  path: "/nexa-40",
  keywords: [
    "nexa 40",
    "nexa40",
    "online poker",
    "real money poker",
    "poker tournaments",
    "cash games",
    "poker app",
    "nexa poker",
  ],
});

export default function Nexa40AlternativePage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...nexa40AlternativePageData.hero} />
      <TrustSection
        title="Built For Serious Poker Players"
        subtitle="Combining tournaments, rewards, accessibility, and premium gameplay."
        items={[
          {
            title: "Regular Tournament Schedule",
            description:
              "Daily events and competitions provide consistent poker action.",
          },
          {
            title: "Player Reward Programs",
            description:
              "Benefit from rakeback opportunities and promotional rewards.",
          },
          {
            title: "Cross-Platform Access",
            description:
              "Play across Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Reliable Poker Environment",
            description:
              "A stable and optimized platform designed for long-term play.",
          },
        ]}
      />
      <FeaturesSection
        title="Why Players Choose Nexa 40"
        subtitle="Everything needed to enjoy online poker from any device."
        features={nexa40AlternativePageData.features || []}
      />
      <ContentSection
        title="What Makes Nexa 40 Different?"
        subtitle="A premium poker experience built for modern players."
        content={[
          "Nexa 40 combines daily tournaments, active cash games, player rewards, and smooth gameplay into a single online poker ecosystem.",
          "Players can compete against opponents across multiple formats while enjoying a streamlined experience designed for both recreational and experienced players.",
          "The platform emphasizes accessibility, allowing players to participate from mobile and desktop devices without sacrificing performance.",
          "Regular promotions, weekly rakeback opportunities, and ongoing events help create a rewarding experience for active players.",
        ]}
      />
      <PokerFormatsSection
        title="Popular Poker Games"
        subtitle="Choose the format that best matches your playing style."
        formats={nexa40AlternativePageData.pokerFormats || []}
      />
      <TimelineSection
        title="Start Playing In Minutes"
        subtitle="Join the action in four simple steps."
        steps={nexa40AlternativePageData.timeline || []}
      />
      <ComparisonTable
        title="Why Players Prefer Nexa 40"
        subtitle="Compare Nexa 40 with typical online poker platforms."
        alternativeName="Typical Platforms"
        rows={nexa40AlternativePageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of Playing Online Poker"
        subtitle="Convenience, flexibility, and exciting competition."
        content={[
          "Online poker allows players to enjoy games whenever they want without needing to visit physical poker rooms.",
          "Tournaments provide opportunities to compete for attractive prize pools while cash games offer flexible gameplay options.",
          "Modern poker platforms support mobile devices, making it easier than ever to stay connected to games and promotions.",
          "Players can continue improving their skills through strategy guides, experience, and consistent participation.",
        ]}
      />
      <LearningHubSection
        title="Poker Learning Center"
        subtitle="Improve your game with educational resources and guides."
        items={nexa40AlternativePageData.learningHub || []}
      />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Answers to common Nexa 40 questions."
        faqs={nexa40Faqs}
      />
      <InternalLinksSection
        title="Explore More Poker Resources"
        subtitle="Discover additional guides, downloads, and poker content."
        links={nexa40AlternativePageData.internalLinks || []}
      />
      <CTASection
        title="Join Nexa 40 Today"
        description="Play tournaments, cash games, unlock weekly rewards, and experience premium online poker."
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
