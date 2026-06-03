import { Metadata } from "next";

interface SEOProps {
title: string;
description: string;
path: string;
keywords?: string[];
image?: string;
}

const SITE_URL = "https://nexa40.com";

export function generateSEO({
title,
description,
path,
keywords = [],
image = "/hero-bg.png",
}: SEOProps): Metadata {
const url = `${SITE_URL}${path}`;

return {
title,
description,

 
keywords,

alternates: {
  canonical: url,
},

openGraph: {
  title,
  description,
  url,
  siteName: "Nexa Poker",
  images: [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: title,
    },
  ],
  locale: "en_US",
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title,
  description,
  images: [image],
},

robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},
 

};
}

export function generateFAQSchema(
faqs: {
question: string;
answer: string;
}[]
) {
return {
"@context": "https://schema.org",
"@type": "FAQPage",

 
mainEntity: faqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,

  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
})),
 

};
}

export function generateBreadcrumbSchema(
items: {
name: string;
url: string;
}[]
) {
return {
"@context": "https://schema.org",
"@type": "BreadcrumbList",

 
itemListElement: items.map((item, index) => ({
  "@type": "ListItem",
  position: index + 1,
  name: item.name,
  item: item.url,
})),
 

};
}
