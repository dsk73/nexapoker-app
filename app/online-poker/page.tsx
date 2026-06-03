import { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/seo/HeroSection";
import StatsSection from "@/components/seo/StatsSection";
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

import { onlinePokerPageData } from "@/data/online-poker";
import { onlinePokerFaqs } from "@/data/faqs/onlinePokerFaqs";

export const metadata: Metadata = generateSEO({
  title: "Online Poker India | Real Money Poker Games | Nexa Poker",
  description:
    "Play online poker with tournaments, cash games, weekly rakeback rewards, fast withdrawals, and premium gameplay across Android, iPhone, Windows, and Mac.",
  path: "/online-poker",
  keywords: [
    "online poker",
    "real money poker",
    "online poker india",
    "poker tournaments",
    "cash games",
    "mobile poker",
    "poker app",
    "texas holdem",
  ],
});

export default function OnlinePokerPage() {
  return (
    <main className="min-h-screen bg-white">
      {" "}
      <Navbar />
      <HeroSection {...onlinePokerPageData.hero} />
      <StatsSection
        title="Trusted By Thousands Of Poker Players"
        subtitle="Join one of the fastest growing online poker communities with tournaments, cash games, rewards, and premium gameplay."
        stats={onlinePokerPageData.stats || []}
      />
      <FeaturesSection
        title="Why Players Choose Nexa Poker"
        subtitle="Everything needed for a premium online poker experience."
        features={onlinePokerPageData.features || []}
      />
      <PokerFormatsSection
        title="Popular Online Poker Formats"
        subtitle="Explore the most popular poker games enjoyed by players worldwide."
        formats={onlinePokerPageData.pokerFormats || []}
      />
      <TimelineSection
        title="How To Start Playing Online Poker"
        subtitle="Get started in just a few simple steps."
        steps={onlinePokerPageData.timeline || []}
      />
      <ContentSection
        title="How Online Poker Works"
        subtitle="Understanding the fundamentals of online poker."
        content={[
          "Online poker allows players to participate in cash games, tournaments, and other poker formats directly from their computers and mobile devices. Instead of visiting physical poker rooms, players can compete online from virtually anywhere.",
          "Poker games are played using standard rules and formats such as Texas Hold'em and Omaha. Players compete against each other, make strategic decisions, and attempt to build winning hands while managing risk and bankroll effectively.",
          "Online poker platforms provide a wide range of stakes and game formats, making it easy for both beginners and experienced players to find games that match their preferences and skill levels.",
          "Modern poker platforms offer secure gameplay, tournament schedules, promotions, player rewards, and convenient access across Android, iPhone, Windows, and Mac devices.",
        ]}
      />
      <ComparisonTable
        title="Why Players Choose Nexa Poker"
        subtitle="See how Nexa Poker compares with typical online poker platforms."
        alternativeName="Typical Platforms"
        rows={onlinePokerPageData.comparisonRows || []}
      />
      <ContentSection
        title="Benefits Of Playing Online Poker"
        subtitle="Why millions of players enjoy online poker."
        content={[
          "Online poker offers convenience and flexibility that traditional poker rooms cannot always provide. Players can join games whenever they want and choose from a wide variety of formats and stake levels.",
          "Tournaments run throughout the day and give players opportunities to compete for attractive prize pools. Cash games provide flexible gameplay for players who prefer immediate action.",
          "Mobile poker applications allow players to enjoy games from Android and iPhone devices, making online poker more accessible than ever before.",
          "Rewards programs, promotions, rakeback opportunities, and player incentives help create a more rewarding poker experience for both casual players and regular grinders.",
        ]}
      />
      <LearningHubSection
        title="Learn Poker & Improve Your Skills"
        subtitle="Explore guides and educational resources for online poker players."
        items={onlinePokerPageData.learningHub || []}
      />
      <ContentSection
        title="Online Poker For Beginners"
        subtitle="Everything new players should know before getting started."
        content={[
          "Beginners should start by learning poker hand rankings, basic strategy concepts, and the rules of popular poker formats such as Texas Hold'em.",
          "It is important to understand bankroll management and only play at stake levels that fit your experience and budget. Responsible play helps create a sustainable poker journey.",
          "Many new players begin with smaller tournaments and lower stakes cash games while building confidence and improving their skills.",
          "Consistent learning, reviewing hands, and studying strategy resources can help players improve over time and make better decisions at the poker table.",
        ]}
      />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about online poker."
        faqs={onlinePokerFaqs}
      />
      <InternalLinksSection
        title="Explore More Poker Resources"
        subtitle="Discover additional poker pages, downloads, and guides."
        links={onlinePokerPageData.internalLinks || []}
      />
      <CTASection
        title="Start Playing Online Poker Today"
        description="Join tournaments, play cash games, unlock weekly rakeback rewards, and enjoy a premium online poker experience."
        primaryButton={{
          text: "Download Poker App",
          href: "/download",
        }}
        secondaryButton={{
          text: "Nexa Poker Download",
          href: "/nexa-poker-download",
        }}
      />
      <TrustSection
        title="Trusted Online Poker Platform"
        subtitle="Designed for players seeking tournaments, cash games, player rewards, and premium online poker action."
        items={[
          {
            title: "Reliable Gameplay",
            description:
              "Enjoy a stable poker environment designed for smooth performance and consistent gameplay.",
          },
          {
            title: "Player Rewards",
            description:
              "Benefit from rakeback programs, promotions, tournaments, and regular player incentives.",
          },
          {
            title: "Multi-Device Support",
            description:
              "Play online poker from Android, iPhone, Windows, and Mac devices.",
          },
          {
            title: "Dedicated Support",
            description:
              "Access player assistance and support whenever you need help.",
          },
        ]}
      />
      <Footer />
    </main>
  );
}
