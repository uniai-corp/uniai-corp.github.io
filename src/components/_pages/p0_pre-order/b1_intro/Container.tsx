import PageSectionWrapper from "@/components/section/Wrapper";
import PagePreOrderIntroHeader from "./Header";
import PagePreOrderIntroWhatHasChanged from "./WhatHasChanged";
import PageSectionContainer from "@/components/section/Container";

export default function PagePreOrderIntroContainer() {
  return (
    <PageSectionContainer className="page-pre-order-intro-container">
      <PageSectionWrapper>
        <PagePreOrderIntroHeader />
        <PagePreOrderIntroWhatHasChanged />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
