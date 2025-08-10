"use client";

import { useRef } from "react";

import PageSolutionProductSummaryItemImage from "./Image";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSolutionProductSummaryItem({
  category,
  name,
  index,
}: SolutionProductSummaryDataType & { index: number }) {
  const itemRef = useRef<HTMLLIElement | null>(null);
  const imgRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    refs: [itemRef.current],
    options: [
      {
        optionKey: `solution/product/summary/list/${index}/img`,
        target: imgRef.current,
        animation: [
          {
            duration: 0.4,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.24 * index,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `solution/product/summary/list/${index}/name`,
        target: nameRef.current,
        animation: [
          {
            duration: 0.4,
            autoAlpha: 1,
            delay: 0.32 * index,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <li className="page-solution-product-summary-item" ref={itemRef}>
      <PageSolutionProductSummaryItemImage {...{ category, name }} ref={imgRef} />
      <h4 ref={nameRef}>{name}</h4>
    </li>
  );
}
