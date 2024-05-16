import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.uniai.co.kr/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://www.uniai.co.kr/about",
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: "https://www.uniai.co.kr/solution",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.uniai.co.kr/cs",
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
