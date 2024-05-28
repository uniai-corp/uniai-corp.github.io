"use client";

import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageMainFarmaidUpperContents from "./UpperContents";
import PageMainFarmaidLowerContents from "./LowerContents";

export default function PageMainFarmaid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <PageSectionContainer className="page-main-farmaid" ref={sectionRef}>
      <PageSectionWrapper className="page-main-farmaid-wrapper">
        <PageMainFarmaidUpperContents trigger={sectionRef.current} />
        <PageMainFarmaidLowerContents trigger={sectionRef.current} />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
