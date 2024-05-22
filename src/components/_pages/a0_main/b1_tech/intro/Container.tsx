import PageSectionContainer from "@/components/section/Container";
import PageTechIntroBackground from "./Background";
import PageTechIntroAI from "./AI";
import PageSectionWrapper from "@/components/section/Wrapper";

export default function PageMainTechIntroContainer() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-intro">
      <PageTechIntroBackground />
      <PageTechIntroAI />
      <PageSectionWrapper className="cover">
        <h2>유니아이의 AI 기술을 소개합니다</h2>
        <p>
          닭, 돼지 농가의 축사 관제 시스템과 <br />
          데이터에 기반한 체중예측, 질병예측 기능으로 축사를 편하게 관리할 수 있습니다
        </p>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
