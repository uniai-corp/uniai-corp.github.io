import { MetadataRoute } from "next";
import { site } from "@/data/metadata";
import routeData from "@/data/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = site.domain.ko;
  const locales: LocaleType[] = ["ko", "en"];
  const routes = ["", ...routeData.map(({ href }) => href)];

  return locales.flatMap((lang, localeIndex) =>
    routes.map((url, urlIndex) => ({
      url: `${domain}${lang === "ko" ? "" : `${lang}/`}${url.slice(1)}`,
      lastModified: new Date().toISOString(),
      priority: (100 - (localeIndex * 3 + urlIndex * 7)) / 100,
    })),
  );
}
