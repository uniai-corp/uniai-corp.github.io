import type { Metadata } from "next";

import PagePreOrderInquiryContainer from "@/components/_pages/p1_pre-order-inquiry/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/pre-order"].ko,
};

export default PagePreOrderInquiryContainer;
