/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includesPaths: [path.join(__dirname, "styles")],
  },
}

module.exports = nextConfig
