import PageAboutContainer from "@/components/_pages/a1_about/Container";
import localeData, { localeSegment } from "@/data/locale";

export function generateStaticParams() {
  return localeSegment.length ? localeSegment : [{ locale: "en" }];
}
export async function generateMetadata({ params }: { params: Promise<LocalePropsType> }) {
  const locale = (await params).locale || "en";
  return {
    title: localeData["page/about"][locale],
  };
}

export default PageAboutContainer;
