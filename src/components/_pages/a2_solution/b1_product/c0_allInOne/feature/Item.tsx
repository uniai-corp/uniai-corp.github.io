"use client";

import { useRef } from "react";

import PageSolutionProductFeatureItemImage from "./Image";
import PageSolutionProductFeatureDetails from "./Details";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSolutionProductFeatureListItem(props: SolutionProductFeaturePropsType) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLElement | null>(null);

  useScrollAnimation({
    refs: [itemRef.current, imgRef.current],
    options: [
      {
        optionKey: `${props.classifyKey}/${props.itemIndex}/img`,
        target: imgRef.current?.querySelector("img") || null,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.16 * props.itemIndex,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `${props.classifyKey}/${props.itemIndex}/img/title`,
        target: imgRef.current?.querySelector("figcaption") || null,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.32 * props.itemIndex,
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
    <li item-length={props.itemLength}>
      <div className="page-solution-product-feature-item" ref={itemRef}>
        <PageSolutionProductFeatureItemImage
          category={props.category}
          title={props.title}
          ref={imgRef}
        />
        {props.isDetail && (
          <PageSolutionProductFeatureDetails {...props} trigger={itemRef.current} />
        )}
      </div>
    </li>
  );
}
