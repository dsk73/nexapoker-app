export interface HeroButton {
  text: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;

  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

  stats?: HeroStat[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: FeatureItem[];
}

export interface PokerFormatItem {
  icon: string;
  title: string;
  description: string;
}

export interface PokerFormatsSectionProps {
  title: string;
  subtitle?: string;
  formats: PokerFormatItem[];
}

export interface TimelineItem {
  step: string;
  title: string;
  description: string;
}

export interface TimelineSectionProps {
  title: string;
  subtitle?: string;
  steps: TimelineItem[];
}

export interface ComparisonRow {
  feature: string;
  nexa: string;
  alternative: string;
}

export interface ComparisonTableProps {
  title: string;
  subtitle?: string;
  alternativeName: string;
  rows: ComparisonRow[];
}

export interface LearningHubItem {
  title: string;
  description: string;
  href: string;
}

export interface LearningHubSectionProps {
  title: string;
  subtitle?: string;
  items: LearningHubItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export interface InternalLinkItem {
  title: string;
  description: string;
  href: string;
}

export interface InternalLinksSectionProps {
  title?: string;
  subtitle?: string;
  links: InternalLinkItem[];
}

export interface ContentSectionProps {
  title: string;
  subtitle?: string;
  content: string[];
  columns?: 1 | 2;
}

export interface CTASectionProps {
  title: string;
  description: string;

  primaryButton: {
    text: string;
    href: string;
  };

  secondaryButton?: {
    text: string;
    href: string;
  };
}

export interface TrustItem {
  title: string;
  description: string;
}

export interface TrustSectionProps {
  title: string;
  subtitle?: string;
  items: TrustItem[];
}

export interface SEOPageData {
  hero: HeroSectionProps;

  stats?: StatItem[];

  features?: FeatureItem[];

  pokerFormats?: PokerFormatItem[];

  timeline?: TimelineItem[];

  comparisonRows?: ComparisonRow[];

  learningHub?: LearningHubItem[];

  faqs?: FAQItem[];

  internalLinks?: InternalLinkItem[];
}