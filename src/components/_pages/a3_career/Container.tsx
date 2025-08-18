"use client";

import { Suspense } from "react";

import PageContainer from "@/components/page-frame/PageContainer";
import PageCareerVisual from "./b0_visual/Container";
import PageCareerJobPostContainer from "./b1_job-post/Container";
import PageCareerJobPostEmpty from "./b1_job-post/Empty";

import "@/styles/pages/career.scss";

export default function PageCareerContainer() {
  return (
    <PageContainer>
      <PageCareerVisual />
      <Suspense fallback={<PageCareerJobPostEmpty />}>
        <PageCareerJobPostContainer />
      </Suspense>
    </PageContainer>
  );
}
