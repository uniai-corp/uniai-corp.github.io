import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageMainTechTransport() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-item page-main-tech-transport">
      <figure className="page-main-tech-img">
        <Image
          src="/img/common/section_placeholder.jpg"
          alt="transport"
          fill={true}
        />
      </figure>
      <PageSectionWrapper className="page-main-tech-contents">
        <div className="page-main-tech-contents-wrapper">
          <h2>
            <span>인터모달 자동화물 운송 시스템</span>
          </h2>
          <p>
            컨테이너 글자를 인식해맞는 화물선에 실을 수 있도록 AI 인공지능
            딥러닝 기반 문자 인식 성능을 개발 보유하고 있습니다.
          </p>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
