import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],

    sitemap: "https://nexa40.com/sitemap.xml",

    host: "https://nexa40.com",
  };
}