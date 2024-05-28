"use client";

import { useRef } from "react";

import PageSectionHeader from "@/components/section/Header";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageSolutionSystemHeader() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    refs: [titleRef.current],
    options: [
      {
        optionKey: "solution/system/header/title",
        target: titleRef.current,
        animation: [{ duration: 1, autoAlpha: 1, translateY: 0 }],
      },
    ],
  });

  return (
    <PageSectionHeader className="page-solution-system-header">
      <h2 className="page-solution-system-title" ref={titleRef}>
        가금류 <strong>스마트 축사 통합 관제</strong> 시스템
      </h2>
    </PageSectionHeader>
  );
}
