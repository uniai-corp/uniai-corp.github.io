import type { NextConfig } from "next";
import svgrConfigNextjs from "./config/svgr/config.nextjs";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  // svg 컴포넌트 변환을 위한 설정
  webpack: svgrConfigNextjs,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  // output:"export"를 활성화하면 아래 옵션을 사용할 수 없음.
  // i18n: {
  //   locales: ["ko", "en"],
  //   defaultLocale: "ko",
  // },
};

export default nextConfig;
