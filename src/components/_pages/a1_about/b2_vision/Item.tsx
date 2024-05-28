"use client";

import { useRef } from "react";

import PageAboutVisionImage from "./Image";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageAboutVisionItem({
  category,
  name,
  index,
}: {
  category: string;
  name: string;
  index: number;
}) {
  const itemRef = useRef<HTMLLIElement | null>(null);
  const imgRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    refs: [itemRef.current, imgRef.current, nameRef.current],
    options: [
      {
        optionKey: `about/vision/list/item/${index}`,
        target: imgRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            scrollTrigger: { trigger: itemRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
      {
        optionKey: `about/vision/list/item/${index}`,
        target: nameRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.16,
            scrollTrigger: { trigger: itemRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
    ],
  });

  return (
    <li className="page-about-vision-list-item" ref={itemRef}>
      <PageAboutVisionImage category={category} name={name} ref={imgRef} />
      <h4 className="page-about-vision-list-item-name" ref={nameRef}>
        {name}
      </h4>
    </li>
  );
}
