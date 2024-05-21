import { getImageProps } from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageAboutCeo() {
  const commonLogo = { alt: "유니아이" };
  const commonCeo = { alt: "CEO" };

  const {
    props: { srcSet: desktopLogo },
  } = getImageProps({
    ...commonLogo,
    width: 248,
    height: 69,
    src: "/img/about/ceo/logo_desktop.png",
  });

  const {
    props: { srcSet: mobileLogo, ...restLogo },
  } = getImageProps({
    ...commonLogo,
    width: 166,
    height: 46,
    src: "/img/about/ceo/logo_mobile.png",
  });

  const {
    props: { srcSet: desktopLargeCeo },
  } = getImageProps({
    ...commonCeo,
    width: 540,
    height: 645,
    src: "/img/about/ceo/ceo_desktop_large.png",
  });

  const {
    props: { srcSet: desktopMediumCeo, ...restCeo },
  } = getImageProps({
    ...commonCeo,
    width: 480,
    height: 645,
    src: "/img/about/ceo/ceo_desktop_medium.png",
  });

  return (
    <PageSectionContainer className="page-about-section page-about-ceo">
      <PageSectionHeader className="page-about-ceo-header">
        <h2 className="page-about-ceo-title">
          <figure>
            <picture>
              <source media="(min-width: 1280px)" srcSet={desktopLogo} />
              <source srcSet={mobileLogo} />
              <img {...restLogo} alt="유니아이" style={{ width: "100%", height: "auto" }} />
            </picture>
          </figure>
          <strong>유니아이 대표이사 소개</strong>
        </h2>
      </PageSectionHeader>
      <PageSectionWrapper className="page-about-ceo-info">
        <figure className="page-about-ceo-img">
          <picture>
            <source media="(min-width: 1340px)" srcSet={desktopLargeCeo} />
            <source srcSet={desktopMediumCeo} />
            <img {...restCeo} alt="CEO" style={{ width: "100%", height: "auto" }} />
          </picture>
        </figure>
        <div className="page-about-ceo-contents">
          <h3 className="page-about-ceo-name">
            <span>대표이사</span>
            <strong>백승환</strong>
          </h3>
          <div className="page-about-ceo-details">
            <div className="page-about-ceo-detail-item">
              <h4>학력</h4>
              <ul>
                <li>
                  <strong>서울대학교</strong> <span>기계항공공학부 학사</span>
                </li>
                <li>
                  <strong>University of Michigan</strong>
                  <span>기계공학과 (로봇) 석사</span>
                </li>
                <li>
                  <strong>한국과학기술원 (KAIST)</strong>
                  <span>인공지능, 로봇 박사</span>
                </li>
              </ul>
            </div>
            <div className="page-about-ceo-detail-item">
              <h4>경력</h4>
              <ul>
                <li>Aerospace Eng. @GATEC</li>
                <li>Robot/AI Mech. Eng. @ U of Michigan</li>
                <li>2021.01. - 현재 유니아이 기술개발 총괄 대표이사</li>
              </ul>
            </div>

            <div className="page-about-ceo-detail-item">
              <h4>전문분야</h4>
              <ul>
                <li>Computer vision object detection algorithms</li>
                <li>Anomaly detection algorithms</li>
                <li>Development of bipedal robot walking gait algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
