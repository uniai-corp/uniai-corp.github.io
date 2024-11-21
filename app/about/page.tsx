import type { Metadata } from "next";

import PageAboutContainer from "@/components/_pages/a1_about/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/about"].ko,
};

export default PageAboutContainer;
