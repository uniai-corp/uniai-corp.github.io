// import { getImageProps } from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import SectionBackgroundImage from "@/components/section/BackgroundImage";
import PageMainTechItemTextContents from "./TextContents";

export default function PageMainTechMedical() {
  // const common = { alt: "AI 정밀 의료 서비스 솔루션", fill: true };

  // const {
  //   props: { srcSet: desktopLarge },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/medical/bg_desktop_large.png",
  // });

  // const {
  //   props: { srcSet: desktopMedium },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/medical/bg_desktop_medium.png",
  // });

  // const {
  //   props: { srcSet: tablet },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/medical/bg_tablet.png",
  // });

  // const {
  //   props: { srcSet: mobile, ...rest },
  // } = getImageProps({
  //   ...common,
  //   src: "/img/main/tech/medical/bg_mobile.png",
  // });

  return (
    <PageSectionContainer className="page-main-tech page-main-tech-item page-main-tech-medical">
      <div className="page-main-tech-img">
        <SectionBackgroundImage>
          <picture>
            <source
              media="(min-width: 1340px)"
              srcSet="/img/main/tech/medical/bg_desktop_large.png"
            />
            <source
              media="(min-width: 1280px)"
              srcSet="/img/main/tech/medical/bg_desktop_medium.png"
            />
            <source media="(min-width: 768px)" srcSet="/img/main/tech/medical/bg_tablet.png" />
            <img
              src="/img/main/tech/medical/bg_mobile.png"
              alt="AI 정밀 의료 서비스 솔루션"
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </SectionBackgroundImage>
      </div>
      <PageSectionWrapper className="page-main-tech-contents">
        <PageMainTechItemTextContents
          title="AI 정밀 의료 서비스 솔루션"
          desc="면담 작성, Ham-D 그래프 확인으로 진료의 편의를 도모하고 AI 약재 추천 기능으로 우울증 진단에
        도움을 줄 수 있습니다."
        />
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
