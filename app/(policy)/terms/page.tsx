import type { Metadata } from "next";
import PageTermsContainer from "@/components/_pages/z_policy/terms/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/terms"].ko,
};
export default function PageTerms() {
  return <PageTermsContainer />;
}
