import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Nexa Poker - Download Online Poker App",
    template: "%s | Nexa Poker",
  },

  description:
    "Download Nexa Poker for Android, iOS, Windows & Mac. Play online poker tournaments, enjoy instant withdrawals, weekly rakeback, and premium poker action.",

  keywords: [
    "Nexa Poker",
    "Nexa Poker Download",
    "Online Poker",
    "Poker App",
    "Poker Download",
    "WPT Global Alternative",
    "Poker Tournament",
    "Poker Network",
    "Poker App India",
    "Play Poker Online",
  ],

  metadataBase: new URL("https://nexa40.com"),

  openGraph: {
    title: "Nexa Poker - Download Online Poker App",
    description:
      "Play online poker with instant withdrawals, tournaments, and weekly rakeback.",
    url: "https://nexa40.com",
    siteName: "Nexa Poker",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Poker",
    description: "Download Nexa Poker and play premium online poker games.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://nexa40.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQLWGWHTZ8"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZQLWGWHTZ8');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wotne4ybck");
          `}
        </Script>
      </body>
    </html>
  );
}
