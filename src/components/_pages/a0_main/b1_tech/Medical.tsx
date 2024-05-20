import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageMainTechMedical() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-item page-main-tech-medical">
      <figure className="page-main-tech-img">
        <Image
          src="/img/common/section_placeholder.jpg"
          alt="medical"
          fill={true}
        />
      </figure>
      <PageSectionWrapper className="page-main-tech-contents">
        <div className="page-main-tech-contents-wrapper">
          <h2>
            <span>AI 정밀 의료 서비스 솔루션</span>
          </h2>
          <p>
            면담 작성, Ham-D 그래프 확인으로 진료의 편의를 도모하고 AI 약재 추천
            기능으로 우울증 진단에 도움을 줄 수 있습니다.
          </p>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
