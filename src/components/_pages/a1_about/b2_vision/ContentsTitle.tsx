"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageAboutVisionContentsTitle() {
  const { t } = useLocale();

  const titleRef = useRef<HTMLDivElement | null>(null);
  const upperRef = useRef<HTMLHeadingElement | null>(null);
  const lowerRef = useRef<HTMLParagraphElement | null>(null);
  const dotRef = useRef<HTMLSpanElement | null>(null);

  useScrollAnimation({
    refs: [titleRef.current, upperRef.current, lowerRef.current],
    options: [
      {
        optionKey: `about/vision/contentsTitle/upper`,
        target: upperRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: { trigger: titleRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
      {
        optionKey: `about/vision/contentsTitle/lower`,
        target: lowerRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: "50%",
            delay: 0.24,
            scrollTrigger: { trigger: titleRef.current, start: "top 70%", end: "top 70%" },
          },
        ],
      },
      {
        optionKey: `about/vision/contentsTitle/dot`,
        target: dotRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            scale: 1,
            delay: 0.8,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <div className="page-about-vision-title" ref={titleRef}>
      <h3 className="page-about-vision-title-upper" ref={upperRef}>
        {t(
          "about/vision/desc/upper",
          "필요한 데이터로 이 세상에 <br />단 하나뿐인 <br />인공지능 혁신을 만듭니다.",
        )}
      </h3>
      <p className="page-about-vision-title-lower" ref={lowerRef}>
        {t("about/vision/desc/lower", "유니아이의 시작")}
        <span className="page-about-vision-title-dot" ref={dotRef}></span>
      </p>
    </div>
  );
}
