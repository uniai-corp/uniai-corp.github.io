import { Metadata } from "next";

import PageSolutionContainer from "@/components/_pages/a2_solution/Container";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function PageSolutionEng() {
  return <PageSolutionContainer locale="en" />;
}
