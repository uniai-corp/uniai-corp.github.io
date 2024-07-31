import type { Metadata, Viewport } from "next";

export const site = {
  domain: "https://uniai-corp.github.io/", // "https://www.uniai.co.kr/",
  domainAlt: "https://uniai-corp.github.io/", // "https://www.uniai.co.kr/",
  desc: "인공지능 기술로 빅데이터 가치를 실현합니다.",
  title: "UNiAI :: 유니아이",
};

export const nextjs_viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const nextjs_metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.desc,
  keywords: [
    "인공지능",
    "가금류",
    "양계",
    "양계장",
    "축사",
    "스마트",
    "스마트팜",
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
  metadataBase: new URL(site.domain), // 도메인 주소
  // 대체 접속 경로
  alternates: {
    canonical: site.domain,
    languages: {
      "en-US": site.domain,
    },
  },
  // 오픈그래프
  openGraph: {
    type: "website",
    locale: "ko-KR",
    url: site.domain,
    title: site.title,
    description: site.desc,
    images: [
      {
        url: "/img/seo/thumbnail.jpg",
        alt: site.title,
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
};
