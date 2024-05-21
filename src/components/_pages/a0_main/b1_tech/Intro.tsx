import PageSectionContainer from "@/components/section/Container";
import Image from "next/image";

export default function PageMainTechIntro() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-intro">
      <figure className="bg">
        <Image src="/img/common/section_placeholder.jpg" fill={true} alt="ai" />
      </figure>
      <div className="cover">
        <h2>유니아이의 AI 기술을 소개합니다</h2>
        <figure>AI 이미지</figure>
        <p>
          닭, 돼지 농가의 축사 관제 시스템과 <br />
          데이터에 기반한 체중예측, 질병예측 기능으로 축사를 편하게 관리할 수 있습니다
        </p>
      </div>
    </PageSectionContainer>
  );
}
