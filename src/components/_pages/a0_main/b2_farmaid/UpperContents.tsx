"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageMainFarmaidUpperContents({ trigger }: { trigger: HTMLElement | null }) {
  const span0Ref = useRef<HTMLSpanElement | null>(null);
  const span1Ref = useRef<HTMLSpanElement | null>(null);
  const span2Ref = useRef<HTMLSpanElement | null>(null);

  useScrollAnimation({
    refs: [trigger, span0Ref.current, span1Ref.current, span2Ref.current],
    options: [
      {
        optionKey: `main/farmaid/desc/0`,
        target: span0Ref.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: trigger,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/desc/1`,
        target: span1Ref.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.16,
            scrollTrigger: {
              trigger: trigger,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/desc/2`,
        target: span2Ref.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.32,
            scrollTrigger: {
              trigger: trigger,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <p>
      <span ref={span0Ref}>팜에이드는 실시간 모니터링, 농장제어, 사양관리와</span>
      <span ref={span1Ref}>더불어 유니아이의 인공지능 기술로</span>
      <span ref={span2Ref}>체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.</span>
    </p>
  );
}
