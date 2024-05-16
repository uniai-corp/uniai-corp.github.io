import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";

export default function PageMainVisualContainer() {
  return (
    <PageSectionContainer className="page-main-visual">
      <figure className="bg">
        <Image
          src="/img/common/section_placeholder.jpg"
          alt="메인 비주얼"
          fill={true}
        />
      </figure>
      <div className="cover">
        <h2>
          <span>유니아이만의 인공지능 기술로</span>
          <span>빅데이터 가치를 실현하다.</span>
        </h2>
        <p>
          Artificial Intelligence, Livestock IndustryBio, Smart Farm, Robotics
          SystemMedical, Embedded System, Smart Inter-modal Transport
        </p>
      </div>
    </PageSectionContainer>
  );
}
