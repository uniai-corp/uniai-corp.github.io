import Image from "next/image";
import PageSectionContainer from "@/components/section/Container";
import Link from "next/link";

export default function PageMainFarmaid() {
  return (
    <PageSectionContainer className="page-main-farmaid">
      <p>
        <span>팜에이드는 실시간 모니터링, 농장제어, 사양관리와</span>
        <span>더불어 유니아이의 인공지능 기술로</span>
        <span>체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.</span>
      </p>
      <figure className="service-logo">
        <Image
          src="/img/main/service_logo.svg"
          alt="FarmAiD"
          width={540}
          height={63}
        />
      </figure>
      <h2>팜에이드 플랫폼</h2>
      <div className="link-container">
        <Link className="link-btn" href="https://farmaid.kr/">
          <span>바로가기</span>
        </Link>
      </div>
    </PageSectionContainer>
  );
}
