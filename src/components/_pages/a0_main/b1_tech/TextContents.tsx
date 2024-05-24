"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageMainTechItemTextContents({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useScrollAnimation({
    refs: [sectionRef.current, titleRef.current],
    options: [
      {
        optionKey: "main/tech/medical/title",
        target: titleRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 80%",
            },
          },
        ],
      },
    ],
  });

  useScrollAnimation({
    refs: [sectionRef.current, descriptionRef.current],
    options: [
      {
        optionKey: "main/tech/medical/description",
        target: descriptionRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.24,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <div className="page-main-tech-contents-wrapper" ref={sectionRef}>
      <h2>
        <div className="title-box" ref={titleRef}>
          <span>{title}</span>
        </div>
      </h2>
      <p ref={descriptionRef}>{desc}</p>
    </div>
  );
}
