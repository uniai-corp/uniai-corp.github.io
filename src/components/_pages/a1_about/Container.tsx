"use client";

import PageContainer from "@/components/pageFrame/PageContainer";
import PageAboutVisual from "./b0_visual/Container";
import PageAboutCeo from "./b1_ceo/Container";
import PageAboutVision from "./b2_vision/Container";
import PageAboutPartners from "./b3_partners/Container";
import PageAboutLocation from "./b4_location/Container";

export default function PageAboutContainer() {
  return (
    <PageContainer>
      <PageAboutVisual />
      <PageAboutCeo />
      <PageAboutVision />
      <PageAboutPartners />
      <PageAboutLocation />
    </PageContainer>
  );
}
