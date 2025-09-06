import type { Metadata } from "next";

import PagePreOrderContainer from "@/components/_pages/p0_pre-order/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/pre-order"].ko,
};

export default PagePreOrderContainer;
