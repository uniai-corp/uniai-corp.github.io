"use client";

import { useRef } from "react";
import PageSolutionProductCategoryHeader from "../assets/CategoryHeader";
import PageSolutionProductCategoryTitle from "../assets/CategoryTitle";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import PageSolutionProductCategoryDescription from "../assets/CategoryDescription";
import PageSolutionProductSummaryList from "./summary/List";

export default function PageSolutionProductAllInOneHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descUpperRef = useRef<HTMLParagraphElement | null>(null);
  const descLowerRef = useRef<HTMLParagraphElement | null>(null);

  const DELAY_TIME = 0.24;

  useScrollAnimation({
    refs: [headerRef.current, titleRef.current],
    options: [
      {
        optionKey: `solution/product/allInOne/title`,
        target: titleRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: DELAY_TIME,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      ...(descUpperRef.current === null
        ? []
        : Array.from(descUpperRef.current?.querySelectorAll("span") ?? []).map((target, i) => ({
            optionKey: `solution/product/allInOne/description/upper/${i}`,
            target,
            animation: [
              {
                duration: 1,
                autoAlpha: 1,
                delay: DELAY_TIME + 0.24 * (i + 1),
                scrollTrigger: {
                  trigger: headerRef.current,
                  start: "top 70%",
                  end: "top 70%",
                },
              },
            ],
          }))),
      {
        optionKey: `solution/product/allInOne/description/lower`,
        target: descLowerRef.current,
        animation: [
          {
            duration: 0.48,
            autoAlpha: 1,
            translateY: 0,
            delay: DELAY_TIME + 1.4,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <PageSolutionProductCategoryHeader ref={headerRef}>
      <PageSolutionProductCategoryTitle title="통합상품" ref={titleRef} />
      <PageSolutionProductSummaryList />
      <PageSolutionProductCategoryDescription ref={descUpperRef}>
        <span className="fade-text">사양관리</span>
        <span className="fade-text"> + 질병관리</span>
        <span className="fade-text"> + 체중관리</span>
        <span className="fade-text"> + 통합제어</span> <br />
      </PageSolutionProductCategoryDescription>
      <PageSolutionProductCategoryDescription className="fade-text" ref={descLowerRef}>
        <strong>ChickenMonger의 모든 서비스를 한번에!</strong>
      </PageSolutionProductCategoryDescription>
    </PageSolutionProductCategoryHeader>
  );
}
