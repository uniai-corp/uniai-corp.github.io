"use client";

import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageMainChickenMongerLogo from "./Logo";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageMainChickenMonger() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const logoRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  // const btnRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [
      sectionRef.current,
      descriptionRef.current,
      logoRef.current,
      nameRef.current,
      // btnRef.current,
    ],
    options: [
      ...(descriptionRef.current === null
        ? []
        : Array.from(descriptionRef.current.children).map((target, i) => ({
            optionKey: `main/chicken_monger/desc/0`,
            target,
            animation: [
              {
                duration: 0.64,
                autoAlpha: 1,
                translateY: 0,
                delay: 0.16 * i,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 70%",
                  end: "top 70%",
                },
              },
            ],
          }))),
      {
        optionKey: `main/chicken_monger/logo`,
        target: logoRef.current,
        animation: [
          {
            duration: 1.2,
            autoAlpha: 1,
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/chicken_monger/name`,
        target: nameRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.48,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      // {
      //   optionKey: `main/chicken_monger/link`,
      //   target: btnRef.current,
      //   animation: [
      //     {
      //       duration: 0.64,
      //       autoAlpha: 1,
      //       delay: 1.2,
      //       scrollTrigger: {
      //         trigger: sectionRef.current,
      //         start: "top 80%",
      //         end: "top 80%",
      //       },
      //     },
      //   ],
      // },
    ],
  });

  return (
    <PageSectionContainer className="page-main-chicken-monger" ref={sectionRef}>
      <PageSectionWrapper className="page-main-chicken-monger-wrapper">
        <p className="page-main-chicken-monger-description" ref={descriptionRef}>
          <span className="page-main-chicken-monger-desc-span">
            {t("main/service/desc/0", "치킨몽거는 실시간 모니터링, 농장제어, 사양관리와")}
          </span>
          <span className="page-main-chicken-monger-desc-span">
            {t("main/service/desc/1", "더불어 유니아이의 인공지능 기술로")}
          </span>
          <span className="page-main-chicken-monger-desc-span">
            {t("main/service/desc/2", "체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.")}
          </span>
        </p>
        <PageMainChickenMongerLogo ref={logoRef} />
        <h2 ref={nameRef}>{t("main/service/name", "치킨몽거 플랫폼")}</h2>
        {/* <div className="link-container" ref={btnRef}>
          <Link className="radius-button link-button" href="https://chickenmonger.com/" target="_blank">
            <span>바로가기</span>
          </Link>
        </div> */}
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
