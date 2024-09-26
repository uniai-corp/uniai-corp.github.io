import { Metadata } from "next";

import PageAboutContainer from "@/components/_pages/a1_about/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function PageAboutEng() {
  return <PageAboutContainer locale="en" />;
}
