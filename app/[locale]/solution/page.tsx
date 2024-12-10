import PageSolutionContainer from "@/components/_pages/a2_solution/Container";
import localeData, { localeSegment } from "@/data/locale";

export function generateStaticParams() {
  return localeSegment.length ? localeSegment : [{ locale: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<LocalePropsType> }) {
  const locale = (await params).locale || "en";
  return {
    title: localeData["page/solution"][locale],
  };
}

export default PageSolutionContainer;
