import type { Metadata } from "next";
import PagePrivacyContainer from "@/components/_pages/z_policy/privacy/Container";
import localeData from "@/data/locale";

export const metadata: Metadata = {
  title: localeData["page/privacy"].ko,
};
export default function PagePrivacy() {
  return <PagePrivacyContainer />;
}
