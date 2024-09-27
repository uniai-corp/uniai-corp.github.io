import localeData from "./locale";

const sitemap: SitemapDataType[] = [
  {
    key: `uniai/about`,
    name: localeData["page/about"],
    href: "/about",
  },
  {
    key: `uniai/solution`,
    name: localeData["page/solution"],
    href: "/solution",
  },
];

export default sitemap;
