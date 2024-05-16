import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";

export default function PageMainTechMedical() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-medical">
      <figure className="page-main-tech-img">
        <Image src="/img/common/section_placeholder.jpg" alt="" fill={true} />
      </figure>
      <div className="page-main-tech-contents">
        <h2>AI 정밀 의료 서비스 솔루션</h2>
        <p>
          면담 작성, Ham-D 그래프 확인으로 진료의 편의를 도모하고 AI 약재 추천
          기능으로 우울증 진단에 도움을 줄 수 있습니다.
        </p>
      </div>
    </PageSectionContainer>
  );
}
