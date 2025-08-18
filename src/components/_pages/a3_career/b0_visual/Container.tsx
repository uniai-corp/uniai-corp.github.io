"use client";

import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageCareerVisual() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  return (
    <PageSectionContainer className="page-sub-visual page-career-visual" ref={sectionRef}>
      <figure className="bg">
        <picture>
          <img
            src="/renew/career/sub-visual.jpg"
            alt="인재채용 비주얼"
            style={{ width: "100%", height: "100%" }}
          />
        </picture>
      </figure>
      <div className="cover">
        <PageSectionWrapper>
          <figure className="visual-tag">
            <span>Now We{`'`}re Hiring</span>
          </figure>
          <h2 ref={titleRef}>
            <span>2025</span>
            <span>유니아이 인재채용</span>
          </h2>
          <p ref={descriptionRef}>Looking forward to growing together</p>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
