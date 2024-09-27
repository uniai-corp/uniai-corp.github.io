/** @type {import('next').NextConfig} */

import path from "path";
import svgrConfigNextjs from "./config/svgr/config.nextjs.mjs";

const root = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includesPaths: [path.join(root, "styles")],
  },
  // svg 컴포넌트 변환을 위한 설정
  webpack: config => {
    svgrConfigNextjs(config);
    return config;
  },
  // output:"export"를 활성화하면 아래 옵션을 사용할 수 없음.
  // i18n: {
  //   locales: ["ko", "en"],
  //   defaultLocale: "ko",
  // },
};

export default nextConfig;
