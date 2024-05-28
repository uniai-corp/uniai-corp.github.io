"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageSolutionProductFeatureHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    refs: [headerRef.current, titleRef.current],
    options: [
      {
        optionKey: "solution/product/feature/title",
        target: titleRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
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
    <header className="page-solution-product-feature-header" ref={headerRef}>
      <h3 className="page-solution-product-feature-title" ref={titleRef}>
        개별상품
      </h3>
    </header>
  );
}
