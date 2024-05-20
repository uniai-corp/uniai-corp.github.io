import { getImageProps } from "next/image";
import Link from "next/link";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageMainFarmaid() {
  const common = { alt: "팜에이드" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 542,
    height: 69,
    src: "/img/main/farmaid/logo_desktop.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 460,
    height: 59,
    src: "/img/main/farmaid/logo_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 300,
    height: 39,
    src: "/img/main/farmaid/logo_mobile.png",
  });

  return (
    <PageSectionContainer className="page-main-farmaid">
      <PageSectionWrapper className="page-main-farmaid-wrapper">
        <p>
          <span>팜에이드는 실시간 모니터링, 농장제어, 사양관리와</span>
          <span>더불어 유니아이의 인공지능 기술로</span>
          <span>
            체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.
          </span>
        </p>
        <figure className="service-logo">
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <source srcSet={mobile} />
            <img
              {...rest}
              alt="팜에이드"
              style={{ width: "100%", height: "auto" }}
            />
          </picture>
        </figure>
        <h2>팜에이드 플랫폼</h2>
        <div className="link-container">
          <Link
            className="radius-button link-button"
            href="https://farmaid.kr/"
          >
            <span>바로가기</span>
          </Link>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
