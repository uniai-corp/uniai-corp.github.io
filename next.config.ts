import type { NextConfig } from "next";
// import path from "node:path";
import { svgrConfigNextjs } from "./config";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  // sassOptions: {
  //   loadPaths: [path.join(process.cwd(), "src/styles")],
  // },
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
  // async redirects() {
  //   // 로컬 서버 구동 시, 브라우저 창 열기
  //   openBrowser({ port: 3100 });

  //   return [];
  // },
};

export default nextConfig;
