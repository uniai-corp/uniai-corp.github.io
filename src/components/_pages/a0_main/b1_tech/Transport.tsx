"use client";

// import { getImageProps } from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import SectionBackgroundImage from "@/components/section/BackgroundImage";
import PageMainTechItemTextContents from "./TextContents";

import useLocale from "@/hooks/useLocale";

export default function PageMainTechTransport() {
  // const common = { alt: "인터모달 자동화물 운송 시스템", fill: true };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/transport/bg_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/transport/bg_desktop_medium.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/transport/bg_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/transport/bg_mobile.png",
  // });

  const { t } = useLocale();

  return (
    <PageSectionContainer className="page-main-tech page-main-tech-item page-main-tech-transport">
      <div className="page-main-tech-img">
        <SectionBackgroundImage>
          <picture>
            <source
              media="(min-width: 1340px)"
              srcSet="/img/main/tech/transport/bg_desktop_large.png"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="/img/main/tech/transport/bg_desktop_medium.png"
            />
            <source media="(min-width: 768px)" srcSet="/img/main/tech/transport/bg_tablet.png" />
            <img
              src="/img/main/tech/transport/bg_mobile.png"
              alt={t("main/tech/transport/title", "인터모달 자동화물 운송 시스템")}
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </SectionBackgroundImage>
      </div>
      <PageSectionWrapper className="page-main-tech-contents">
        <PageMainTechItemTextContents
          title={t("main/tech/transport/title", "인터모달 자동화물 운송 시스템")}
          desc={t(
            "main/tech/transport/desc",
            "컨테이너 글자를 인식해맞는 화물선에 실을 수 있도록 AI 인공지능 딥러닝 기반 문자 인식 성능을 개발 보유하고 있습니다.",
          )}
        />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
