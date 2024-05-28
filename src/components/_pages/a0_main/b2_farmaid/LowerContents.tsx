import Link from "next/link";
import { useRef } from "react";

import PageMainFarmaidLogo from "./Logo";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageMainFarmaidLowerContents({ trigger }: { trigger: HTMLElement | null }) {
  const logoRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [trigger, logoRef.current, nameRef.current, btnRef.current],
    options: [
      {
        optionKey: `main/farmaid/logo`,
        target: logoRef.current,
        animation: [
          {
            duration: 1.2,
            autoAlpha: 1,
            delay: 0.4,
            scrollTrigger: {
              trigger: trigger,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/name`,
        target: nameRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.48,
            scrollTrigger: {
              trigger: trigger,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/link`,
        target: btnRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            delay: 1.2,
            scrollTrigger: {
              trigger: trigger,
              start: "top 80%",
              end: "top 80%",
            },
          },
        ],
      },
    ],
  });

  return (
    <>
      <PageMainFarmaidLogo ref={logoRef} />
      <h2 ref={nameRef}>팜에이드 플랫폼</h2>
      <div className="link-container" ref={btnRef}>
        <Link className="radius-button link-button" href="https://farmaid.kr/" target="_blank">
          <span>바로가기</span>
        </Link>
      </div>
    </>
  );
}
