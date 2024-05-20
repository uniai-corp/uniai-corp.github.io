import Image from "next/image";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageAboutVisual() {
  return (
    <PageSectionContainer className="page-about-visual">
      <figure className="bg">
        <Image
          src="/img/common/section_placeholder.jpg"
          alt="회사소개 비주얼"
          fill={true}
        />
      </figure>
      <div className="cover">
        <PageSectionWrapper>
          <h2>
            데이터로 만드는 <br />
            인공지능 혁신
          </h2>
          <p>
            UNIAI.는 데이터와 인공 지능(AI) 기술력을 통하여 생산자와 소비자
            모두에게 필요한 데이터로 이 세상에 단 하나뿐인 인공지능 혁신을
            만듭니다.
          </p>
          <div className="ci-origin">
            <strong>United</strong>
            <span>+</span>
            <strong>A.I</strong>
          </div>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
