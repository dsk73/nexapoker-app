import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nexa40.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    {
      url: "https://nexa40.com/download",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: "https://nexa40.com/nexa40",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://nexa40.com/nexa-40",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: "https://nexa40.com/nexa-poker-download",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: "https://nexa40.com/online-poker",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: "https://nexa40.com/poker-download",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: "https://nexa40.com/wpt-global-alternative",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://nexa40.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}