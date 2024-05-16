import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";

export default function PageMainTechTransport() {
  return (
    <PageSectionContainer className="page-main-tech page-main-tech-transport">
      <figure className="page-main-tech-img">
        <Image src="/img/common/section_placeholder.jpg" alt="" fill={true} />
      </figure>
      <div className="page-main-tech-contents">
        <h2>인터모달 자동화물 운송 시스템</h2>
        <p>
          컨테이너 글자를 인식해맞는 화물선에 실을 수 있도록 AI 인공지능 딥러닝
          기반 문자 인식 성능을 개발 보유하고 있습니다.
        </p>
      </div>
    </PageSectionContainer>
  );
}
