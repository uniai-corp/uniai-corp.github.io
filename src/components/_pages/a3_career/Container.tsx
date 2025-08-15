"use client";

import PageContainer from "@/components/page-frame/PageContainer";
import PageCareerVisual from "./b0_visual/Container";
import PageCareerJobPostContainer from "./b1_job-post/Container";

import "@/styles/pages/career.scss";

export default function PageCareerContainer() {
  return (
    <PageContainer>
      <PageCareerVisual />
      <PageCareerJobPostContainer />
    </PageContainer>
  );
}
