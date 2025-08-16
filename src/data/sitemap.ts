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
  {
    key: `uniai/career`,
    name: localeData["page/career"],
    href: "/career",
  },
];

export default sitemap;
