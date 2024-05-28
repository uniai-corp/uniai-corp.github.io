"use client";

import { useRef } from "react";

import PageSolutionSystemItemImage from "./ItemImage";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageSolutionSystemItem({
  index,
  title,
  desc,
  sizes,
}: {
  index: number;
} & SolutionSystemItemPropsType) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const NumberingRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [
      itemRef.current,
      imgRef.current,
      NumberingRef.current,
      titleRef.current,
      descriptionRef.current,
    ],
    options: [
      {
        optionKey: "solution/system/item/img",
        target: imgRef.current,
        animation: [
          {
            duration: 1.6,
            autoAlpha: 1,
            delay: 0.24,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "solution/system/item/numbering",
        target: NumberingRef.current,
        animation: [
          {
            duration: 1,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "solution/system/item/title",
        target: titleRef.current,
        animation: [
          {
            duration: 1,
            autoAlpha: 1,
            translateX: 0,
            delay: 0.24,
            scrollTrigger: {
              trigger: itemRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "solution/system/item/description",
        target: descriptionRef.current,
        animation: [
          {
            duration: 1,
            autoAlpha: 1,
            translateX: 0,
            delay: 0.4,
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
    <div className="page-solution-system-item" ref={itemRef}>
      <div className="page-solution-system-info">
        <header className="page-solution-system-info-title">
          <figure className="numbering" ref={NumberingRef}>
            <span>0{index}</span>
          </figure>
          <h3 className="page-solution-system-info-title-text" ref={titleRef}>
            {title}
          </h3>
        </header>
        <p className="page-solution-system-info-description" ref={descriptionRef}>
          {desc}
        </p>
      </div>
      <div className="page-solution-system-img-container" ref={imgRef}>
        <PageSolutionSystemItemImage {...{ index, title, desc, sizes }} />
      </div>
    </div>
  );
}
