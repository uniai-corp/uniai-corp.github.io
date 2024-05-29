"use client";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import { useRef } from "react";

export default function PageSolutionProductSummaryHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const midPhraseRef = useRef<HTMLParagraphElement | null>(null);
  const atOnceRef = useRef<HTMLElement | null>(null);

  const initDelay = 0.24;

  useScrollAnimation({
    refs: [headerRef.current, titleRef.current, midPhraseRef.current, atOnceRef.current],
    options: [
      {
        optionKey: `solution/product/summary/title`,
        target: titleRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: initDelay,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      ...(midPhraseRef.current === null
        ? []
        : Array.from(midPhraseRef.current?.querySelectorAll("span") ?? []).map((target, i) => ({
            optionKey: `solution/product/summary/mid/${i}`,
            target,
            animation: [
              {
                duration: 1,
                autoAlpha: 1,
                delay: initDelay + 0.24 * (i + 1),
                scrollTrigger: {
                  trigger: headerRef.current,
                  start: "top 70%",
                  end: "top 70%",
                },
              },
            ],
          }))),
      {
        optionKey: `solution/product/summary/atOnce`,
        target: atOnceRef.current,
        animation: [
          {
            duration: 0.48,
            autoAlpha: 1,
            translateY: 0,
            delay: initDelay + 1.4,
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
    <header className="page-solution-product-summary-header" ref={headerRef}>
      <h3 className="page-solution-product-summary-title" ref={titleRef}>
        통합상품
      </h3>
      <p className="page-solution-product-summary-mid-phrase" ref={midPhraseRef}>
        <span className="service-feature-item">사양관리</span>
        <span className="service-feature-item"> + 질병관리</span>
        <span className="service-feature-item"> + 체중관리</span>
        <span className="service-feature-item"> + 통합제어</span> <br />
        <span className="all-services">
          <i>팜에이드의 모든 서비스</i>를
        </span>
      </p>
      <p>
        <strong className="all-at-once" ref={atOnceRef}>
          한번에!
        </strong>
      </p>
    </header>
  );
}
