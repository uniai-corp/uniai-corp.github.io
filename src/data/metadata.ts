import type { Metadata, Viewport } from "next";
import localeData from "./locale";

export const site: MetaSiteDataType = {
  domain: localeData["site/domain"],
  domainAlt: localeData["site/domain"].ko,
  title: localeData["site/title"],
  desc: localeData["site/desc"],
};

export const nextjs_viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const nextjs_metadata = (locale: LocaleType = "ko"): Metadata => ({
  title: {
    default: site.title[locale],
    template: `%s | ${site.title[locale]}`,
  },
  description: site.desc[locale],
  keywords: [
    "인공지능",
    "AI",
    "Artificial intelligence",
    "가금류",
    "chicken",
    "poultry",
    "양계",
    "양계장",
    "poultry farming",
    "chicken raising",
    "livestock",
    "축사",
    "스마트",
    "스마트팜",
    "smart farm",
    "유니아이",
    "팜에이드",
    "farmaid",
    "치킨몽거",
    "chicken monger",
    "uniai",
  ],
  formatDetection: {
    address: false,
    telephone: false,
  },
  // SEO
  metadataBase: new URL(site.domain[locale]), // 도메인 주소
  // 대체 접속 경로
  alternates: {
    canonical: site.domain[locale],
    languages: {
      "ko-KR": site.domain.ko,
      "en-US": site.domain.en,
    },
  },
  // 오픈그래프
  openGraph: {
    type: "website",
    locale: locale === "en" ? "en-US" : "ko-KR",
    url: site.domain[locale],
    title: site.title[locale],
    description: site.desc[locale],
    images: [
      {
        url: "/img/seo/thumbnail.jpg",
        alt: site.title[locale],
      },
    ],
  },
  // favicon
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      // { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      {
        url: "/favicon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon/favicon.ico"],
    // apple: [
    //   {
    //     url: "/favicon/apple-icon-57x57.png",
    //     sizes: "57x57",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-60x60.png",
    //     sizes: "60x60",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-72x72.png",
    //     sizes: "72x72",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-76x76.png",
    //     sizes: "76x76",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-114x114.png",
    //     sizes: "114x114",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-120x120.png",
    //     sizes: "120x120",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-144x144.png",
    //     sizes: "144x144",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-152x152.png",
    //     sizes: "152x152",
    //     type: "image/png",
    //   },
    //   {
    //     url: "/favicon/apple-icon-180x180.png",
    //     sizes: "180x180",
    //     type: "image/png",
    //   },
    // ],
  },
  // 검색 방지
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  //   googleBot: {
  //     index: false,
  //     follow: false,
  //   },
  // },
});
