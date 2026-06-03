//nexapoker-app/app/poker-download/page.tsx
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

import { pokerDownloadPageData } from "@/data/poker-download";
import { downloadFaqs } from "@/data/faqs/downloadFaqs";

export const metadata: Metadata = generateSEO({
  title: "Poker Download | Download Poker App For Android & iPhone",
  description:
    "Download the poker app for Android, iPhone, Windows and Mac. Play tournaments, cash games, earn rakeback rewards and enjoy premium online poker.",
  path: "/poker-download",
  keywords: [
    "poker download",
    "download poker app",
    "online poker download",
    "poker app",
    "android poker app",
    "iphone poker app",
    "real money poker",
  ],
});

export default function PokerDownloadPage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...pokerDownloadPageData.hero} />
      <TrustSection
        title="Built For Modern Poker Players"
        subtitle="A complete online poker experience across all supported devices."
        items={[
          {
            title: "Multi-Device Support",
            description:
              "Play poker across Android, iPhone, Windows, and Mac platforms.",
          },
          {
            title: "Tournament Access",
            description:
              "Join daily tournaments and compete for attractive prize pools.",
          },
          {
            title: "Player Rewards",
            description:
              "Unlock weekly rakeback opportunities and promotional rewards.",
          },
          {
            title: "Reliable Experience",
            description:
              "Enjoy smooth gameplay designed for both casual and serious players.",
          },
        ]}
      />
      <FeaturesSection
        title="Why Download Nexa Poker"
        subtitle="Everything you need for a modern online poker experience."
        features={pokerDownloadPageData.features || []}
      />
      <TimelineSection
        title="Download & Start Playing"
        subtitle="Begin your poker journey in four simple steps."
        steps={pokerDownloadPageData.timeline || []}
      />
      <ContentSection
        title="Poker Download For Android, iPhone, Windows & Mac"
        subtitle="Play poker from anywhere."
        content={[
          "Modern poker players expect flexibility and convenience. With Nexa Poker, players can access tournaments, cash games, promotions, and rewards across multiple devices.",
          "Android users can enjoy a responsive poker experience while iPhone players can participate in games from supported mobile environments. Desktop users can also access poker action from Windows and Mac devices.",
          "Whether you prefer playing from home or while traveling, the poker application provides a smooth and optimized experience designed for today's players.",
          "Cross-device accessibility ensures you can stay connected to tournaments, cash games, and player rewards whenever you want to play.",
        ]}
      />
      <PokerFormatsSection
        title="What You Can Play After Downloading"
        subtitle="Explore the poker formats available to players."
        formats={pokerDownloadPageData.pokerFormats || []}
      />
      <ComparisonTable
        title="Why Players Download Nexa Poker"
        subtitle="Compare Nexa Poker with typical poker applications."
        alternativeName="Other Apps"
        rows={pokerDownloadPageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of Using A Dedicated Poker App"
        subtitle="Why mobile and desktop poker apps remain popular."
        content={[
          "Dedicated poker applications often provide better performance, smoother gameplay, and improved user experiences compared with browser-based alternatives.",
          "Players can receive notifications about tournaments, promotions, and rewards while maintaining easy access to games and account features.",
          "Mobile poker apps allow users to enjoy real money poker from virtually anywhere while desktop applications provide a larger and more immersive playing environment.",
          "The combination of convenience, accessibility, and performance makes poker applications a preferred choice for many players.",
        ]}
      />
      <LearningHubSection
        title="Poker Learning Hub"
        subtitle="Improve your knowledge and skills."
        items={pokerDownloadPageData.learningHub || []}
      />
      <FAQSection
        title="Poker Download FAQs"
        subtitle="Answers to common download questions."
        faqs={downloadFaqs}
      />
      <InternalLinksSection
        title="Explore More Poker Pages"
        subtitle="Discover related poker resources and guides."
        links={pokerDownloadPageData.internalLinks || []}
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
