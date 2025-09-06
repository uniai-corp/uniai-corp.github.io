"use client";

import { useRef } from "react";
import PageSubVisual from "@/components/page-frame/SubVisual";

export default function PageCareerVisual() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  return (
    <PageSubVisual className="page-career-visual" ref={sectionRef}>
      <figure className="visual-tag">
        <span>Now We{`'`}re Hiring</span>
      </figure>
      <h2 ref={titleRef}>
        <span>2025</span>
        <span>유니아이 인재채용</span>
      </h2>
      <p ref={descriptionRef}>Looking forward to growing together</p>
    </PageSubVisual>
  );
}
