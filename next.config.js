/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  output: "export", // 이미지 최적화가 동작하지 않으므로, static 배포를 사용하기 위해서는 별도 처리가 필요함
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includesPaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
