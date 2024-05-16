import Image from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionHeader from "@/components/section/Header";
import PageSectionHeaderTitleContainer from "@/components/section/Title";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageAboutCeo() {
  return (
    <PageSectionContainer className="page-about-ceo">
      <PageSectionHeader>
        <PageSectionHeaderTitleContainer
          title={
            <figure>
              <Image
                src="/img/about/ceo/title_logo.svg"
                alt="UNiAI"
                width={248}
                height={69}
              />
              <figcaption>유니아이 대표이사 소개</figcaption>
            </figure>
          }
        />
      </PageSectionHeader>
      <PageSectionWrapper>
        <h3>
          <span>대표이사</span>
          <strong>백승환</strong>
        </h3>
        <div className="ceo-info-item">
          <dl>
            <dt>학력</dt>
            <dd>
              <strong>서울대학교</strong> 기계항공공학부 학사
            </dd>
            <dd>
              <strong>University of Michigan</strong> 기계공학과 (로봇) 석사
            </dd>
            <dd>
              <strong>한국과학기술원 (KAIST)</strong> 인공지능, 로봇 박사
            </dd>
          </dl>
          <dl>
            <dt>경력</dt>
            <dd>Aerospace Eng. @GATEC</dd>
            <dd>Robot/AI Mech. Eng. @ U of Michigan</dd>
            <dd>2021.01. - 현재 유니아이 기술개발 총괄 대표이사</dd>
          </dl>
          <dl>
            <dt>전문분야</dt>
            <dd>Computer vision object detection algorithms</dd>
            <dd>Anomaly detection algorithms</dd>
            <dd>Development of bipedal robot walking gait algorithms</dd>
          </dl>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
