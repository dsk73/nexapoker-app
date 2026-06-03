//nexapoker-app/app/nexa-poker-download/page.tsx
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

import { nexaPokerDownloadPageData } from "@/data/nexa-poker-download";
import { downloadFaqs } from "@/data/faqs/downloadFaqs";

export const metadata: Metadata = generateSEO({
  title: "Nexa Poker Download | Download Poker App",
  description:
    "Download Nexa Poker for Android, iPhone, Windows and Mac. Play tournaments, cash games, earn weekly rakeback rewards and enjoy premium online poker.",
  path: "/nexa-poker-download",
  keywords: [
    "nexa poker download",
    "download nexa poker",
    "poker app download",
    "android poker app",
    "iphone poker app",
    "real money poker",
    "online poker app",
    "poker download",
  ],
});

export default function NexaPokerDownloadPage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...nexaPokerDownloadPageData.hero} />
      <TrustSection
        title="Trusted By Online Poker Players"
        subtitle="Built for players seeking tournaments, rewards, accessibility, and premium gameplay."
        items={[
          {
            title: "Cross-Platform Support",
            description:
              "Play across Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Daily Tournament Action",
            description:
              "Join tournaments and compete for exciting prize pools.",
          },
          {
            title: "Weekly Rewards",
            description:
              "Benefit from rakeback opportunities and player promotions.",
          },
          {
            title: "Reliable Poker Experience",
            description:
              "Enjoy smooth gameplay designed for both casual and serious players.",
          },
        ]}
      />
      <FeaturesSection
        title="Why Download Nexa Poker"
        subtitle="Built for modern poker players who value performance and convenience."
        features={nexaPokerDownloadPageData.features || []}
      />
      <TimelineSection
        title="How To Download Nexa Poker"
        subtitle="Get started and begin playing in just a few minutes."
        steps={nexaPokerDownloadPageData.timeline || []}
      />
      <ContentSection
        title="Download Nexa Poker For Android, iPhone, Windows & Mac"
        subtitle="A complete online poker experience across all supported devices."
        content={[
          "Nexa Poker is designed to give players access to tournaments, cash games, promotions, and rewards from wherever they choose to play.",
          "Whether you prefer Android, iPhone, Windows, or Mac, the platform delivers a consistent and optimized poker experience across devices.",
          "Modern players expect flexibility and accessibility. Nexa Poker provides both while maintaining smooth gameplay and reliable performance.",
          "Downloading the application allows players to quickly access poker action, promotions, tournament schedules, and player rewards.",
        ]}
      />
      <PokerFormatsSection
        title="What You Can Play"
        subtitle="Explore the poker experiences available after downloading."
        formats={nexaPokerDownloadPageData.pokerFormats || []}
      />
      <ComparisonTable
        title="Why Players Choose Nexa Poker"
        subtitle="Compare Nexa Poker with typical poker applications."
        alternativeName="Other Apps"
        rows={nexaPokerDownloadPageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of A Dedicated Poker Application"
        subtitle="Why poker apps remain the preferred choice for many players."
        content={[
          "Dedicated poker applications provide smoother performance, improved stability, and better accessibility compared to many browser-based alternatives.",
          "Players can stay connected to tournaments, cash games, promotions, and rewards through a streamlined user experience.",
          "Mobile support allows players to enjoy poker while traveling, while desktop users benefit from larger screens and enhanced multitabling experiences.",
          "The combination of convenience, performance, and accessibility makes dedicated poker applications an excellent choice for online poker enthusiasts.",
        ]}
      />
      <LearningHubSection
        title="Poker Learning Hub"
        subtitle="Build your skills through strategy guides and educational resources."
        items={nexaPokerDownloadPageData.learningHub || []}
      />
      <FAQSection
        title="Nexa Poker Download FAQs"
        subtitle="Answers to common questions about downloading and installing Nexa Poker."
        faqs={downloadFaqs}
      />
      <InternalLinksSection
        title="Explore More Poker Resources"
        subtitle="Discover related poker pages and guides."
        links={nexaPokerDownloadPageData.internalLinks || []}
      />
      <CTASection
        title="Download Nexa Poker Today"
        description="Install the app, join tournaments, play cash games, unlock weekly rewards, and experience premium online poker."
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
