import type { Metadata } from "next";

import PageCareerContainer from "@/components/_pages/a3_career/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/career"].ko,
};

export default PageCareerContainer;
