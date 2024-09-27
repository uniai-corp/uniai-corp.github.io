/**
 * SVGR 설정; Next.js
 * @see https://react-svgr.com/docs/next/
 */
const svgrConfigNextjs = config => {
  if (!config.module || !config.module.rules) {
    return config;
  }

  // Configures webpack to handle SVG files with SVGR. SVGR optimizes and transforms SVG files
  // into React components. See https://react-svgr.com/docs/next/

  // Grab the existing rule that handles SVG imports
  const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.(".svg"));

  if (fileLoaderRule) {
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
  }

  return config;
};

export default svgrConfigNextjs;
