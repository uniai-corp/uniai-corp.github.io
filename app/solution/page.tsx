import type { Metadata } from "next";

import PageSolutionContainer from "@/components/_pages/a2_solution/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/solution"].ko,
};

export default function PageSolution() {
  return <PageSolutionContainer />;
}
