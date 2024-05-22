import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageMainVisualBackground from "./Background";
import PageMainVisualEarth from "./Earth";

export default function PageMainVisualContainer() {
  return (
    <PageSectionContainer className="page-main-visual">
      <PageMainVisualBackground />
      <PageMainVisualEarth />
      <div className="cover">
        <PageSectionWrapper>
          <h2>
            <span>유니아이만의 인공지능 기술로 </span>
            <span>빅데이터 가치를 실현하다.</span>
          </h2>
          <p>
            Artificial Intelligence, Livestock IndustryBio, Smart Farm, Robotics SystemMedical,{" "}
            <br />
            Embedded System, Smart Inter-modal Transport
          </p>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
