"use client";

import { useRef } from "react";
import { useAtomValue } from "jotai";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageMainVisualBackground from "./Background";
import PageMainVisualEarth from "./Earth";

import useScrollAnimation from "@/hooks/useScrollAnimation";

import { scrollContainer } from "@/jotai/scroll";

export default function PageMainVisualContainer() {
  const container = useAtomValue(scrollContainer);

  const sectionRef = useRef<HTMLElement | null>(null);
  const sloganUpperRef = useRef<HTMLSpanElement | null>(null);
  const sloganLowerRef = useRef<HTMLSpanElement | null>(null);
  const phraseRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    container,
    options: [
      {
        optionKey: "main/visual/slogan/upper",
        target: sloganUpperRef.current,
        animation: [{ duration: 0.64, autoAlpha: 1, translateY: 0 }],
      },
    ],
  });
  useScrollAnimation({
    container,
    options: [
      {
        optionKey: "main/visual/slogan/lower",
        target: sloganLowerRef.current,
        animation: [{ duration: 0.64, autoAlpha: 1, translateY: 0, delay: 0.16 }],
      },
    ],
  });
  useScrollAnimation({
    container,
    options: [
      {
        optionKey: "main/visual/phrase",
        target: phraseRef.current,
        animation: [{ duration: 1, autoAlpha: 1, delay: 0.56 }],
      },
    ],
  });

  return (
    <PageSectionContainer className="page-main-visual" ref={sectionRef}>
      <PageMainVisualBackground />
      <PageMainVisualEarth />
      <div className="cover">
        <PageSectionWrapper>
          <h2>
            <span className="upper" ref={sloganUpperRef}>
              유니아이만의 인공지능 기술로{" "}
            </span>
            <span className="lower" ref={sloganLowerRef}>
              빅데이터 가치를 실현하다.
            </span>
          </h2>
          <p ref={phraseRef}>
            Artificial Intelligence, Livestock IndustryBio, Smart Farm, Robotics SystemMedical,{" "}
            <br />
            Embedded System, Smart Inter-modal Transport
          </p>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
