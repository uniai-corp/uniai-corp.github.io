import PageAboutContainer from "@/components/_pages/a1_about/Container";
import localeData, { localeSegment } from "@/data/locale";

export async function generateStaticParams() {
  return localeSegment;
}

export async function generateMetadata({ params: { locale } }: { params: LocalePropsType }) {
  return {
    title: localeData["page/about"][locale] || localeData["page/about"].en,
  };
}

export default function PageAbout() {
  return <PageAboutContainer />;
}
