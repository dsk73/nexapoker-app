//nexapoker-app/app/download/page.tsx
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
  title: "Download Nexa Poker | Android, iPhone, Windows & Mac",
  description:
    "Download Nexa Poker and play real money poker tournaments, cash games, weekly rakeback rewards, and premium online poker experiences across all devices.",
  path: "/download",
  keywords: [
    "download nexa poker",
    "nexa poker app",
    "poker app download",
    "android poker app",
    "iphone poker app",
    "real money poker",
    "online poker app",
    "download poker",
  ],
});

export default function DownloadPage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...nexaPokerDownloadPageData.hero} />
      <TrustSection
        title="Trusted By Online Poker Players"
        subtitle="Built around performance, accessibility, and player satisfaction."
        items={[
          {
            title: "Multi-Platform Support",
            description:
              "Play seamlessly across Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Tournament Access",
            description: "Join daily tournaments with competitive prize pools.",
          },
          {
            title: "Player Rewards",
            description:
              "Unlock weekly rakeback opportunities and promotional rewards.",
          },
          {
            title: "Reliable Experience",
            description:
              "Enjoy a stable and optimized poker environment designed for modern players.",
          },
        ]}
      />
      <FeaturesSection
        title="Why Download Nexa Poker"
        subtitle="Everything you need for a premium online poker experience."
        features={nexaPokerDownloadPageData.features || []}
      />
      <TimelineSection
        title="Download & Start Playing"
        subtitle="Get started with Nexa Poker in four simple steps."
        steps={nexaPokerDownloadPageData.timeline || []}
      />
      <ContentSection
        title="Download Poker For Mobile & Desktop"
        subtitle="Play wherever and whenever you want."
        content={[
          "Nexa Poker gives players access to tournaments, cash games, promotions, and rewards across multiple devices.",
          "Whether you play on Android, iPhone, Windows, or Mac, the platform is optimized to provide a smooth and responsive poker experience.",
          "Players can access daily tournaments, active cash games, weekly rakeback opportunities, and ongoing promotional events from a single application.",
          "Downloading the application ensures quick access to online poker action while maintaining convenience and flexibility.",
        ]}
      />
      <PokerFormatsSection
        title="Games Available After Download"
        subtitle="Explore the poker formats available to players."
        formats={nexaPokerDownloadPageData.pokerFormats || []}
      />
      <ComparisonTable
        title="Why Players Choose Nexa Poker"
        subtitle="See how Nexa Poker compares with standard poker applications."
        alternativeName="Typical Poker Apps"
        rows={nexaPokerDownloadPageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of A Dedicated Poker Application"
        subtitle="Why serious poker players prefer dedicated apps."
        content={[
          "Dedicated poker applications often deliver better performance, improved stability, and enhanced user experiences compared with browser-based alternatives.",
          "Players can stay connected to tournaments, rewards, promotions, and account features through a streamlined interface.",
          "Mobile accessibility allows users to enjoy poker while traveling, while desktop environments support larger screens and multitabling.",
          "Combining accessibility, convenience, and performance creates a superior online poker experience.",
        ]}
      />
      <LearningHubSection
        title="Poker Learning Resources"
        subtitle="Improve your skills through strategy guides and tutorials."
        items={nexaPokerDownloadPageData.learningHub || []}
      />
      <FAQSection
        title="Download FAQs"
        subtitle="Answers to common questions about downloading Nexa Poker."
        faqs={downloadFaqs}
      />
      <InternalLinksSection
        title="Explore More Poker Resources"
        subtitle="Discover additional guides, downloads, and poker content."
        links={nexaPokerDownloadPageData.internalLinks || []}
      />
      <CTASection
        title="Download Nexa Poker Today"
        description="Install the app, join tournaments, play cash games, and enjoy premium online poker action."
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
