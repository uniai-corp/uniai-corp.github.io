import PageSolutionContainer from "@/components/_pages/a2_solution/Container";
import localeData, { localeSegment } from "@/data/locale";

export async function generateStaticParams() {
  return localeSegment;
}

export async function generateMetadata({ params: { locale } }: { params: LocalePropsType }) {
  return {
    title: localeData["page/solution"][locale] || localeData["page/solution"].en,
  };
}
export default function PageSolution() {
  return <PageSolutionContainer />;
}
