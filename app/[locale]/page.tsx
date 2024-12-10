import PageMainContainer from "@/components/_pages/a0_main/Container";
import { localeSegment } from "@/data/locale";

export function generateStaticParams() {
  return localeSegment.length ? localeSegment : [{ locale: "en" }];
}

export default PageMainContainer;
