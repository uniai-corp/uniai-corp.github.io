/** @type {import('next').NextConfig} */

import path from "path";

const root = path.dirname(new URL(import.meta.url).pathname);

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includesPaths: [path.join(root, "styles")],
  },
};

export default nextConfig;
