import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.uniai.co.kr/sitemap.xml",
  };
}

export const dynamic = "force-static";
export const revalidate = 60;
