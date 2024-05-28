import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageSolutionSystemItem from "./Item";
import PageSolutionSystemHeader from "./Header";
import { SolutionSystemDataType } from "@/types/data.import";

export default function PageSolutionSystem() {
  const system: SolutionSystemDataType[] = [
    {
      key: "solution/system/01",
      title: "사양관리",
      alt: "사양관리",
      desc: "급이, 급수, 도폐사 같은 사육정보와 축사 환경정보,약품 사용량 등 농장 운영에 기본인 사양일지를 간편하게 작성, 관리할 수 있습니다.",
      sizes: {
        desktop_large: [810, 500],
        desktop_medium: [1180, 500],
        tablet: [668, 428],
        mobile: [300, 195],
      },
    },
    {
      key: "solution/system/02",
      title: "통합제어",
      alt: "통합제어",
      desc: "IoT로 실시간 모니터링과 제어가 가능해, 축사를 항상 최적의 상태로 유지 할 수 있습니다.",
      sizes: {
        desktop_large: [810, 500],
        desktop_medium: [1180, 500],
        tablet: [668, 498],
        mobile: [300, 226],
      },
    },
    {
      key: "solution/system/03",
      title: "질병관리",
      alt: "질병관리",
      desc: "AI의 건강 이상감지 지역수의사, 병성감정기관과 연계하여 건강검진과 진단 서비스로 까다로운 질병관리를 팜에이드가 대신 해드립니다.",
      sizes: {
        desktop_large: [810, 500],
        desktop_medium: [1180, 500],
        tablet: [668, 407],
        mobile: [300, 185],
      },
    },
    {
      key: "solution/system/04",
      title: "체중관리",
      alt: "체중관리",
      desc: "AI의 무게추정 시스템으로 실시간 체중 분석이 가능해 농장 생산성과 출하일을 계산하여 생산비용을 절약할 수 있습니다.",
      sizes: {
        desktop_large: [810, 600],
        desktop_medium: [1180, 600],
        tablet: [668, 600],
        mobile: [300, 276],
      },
    },
    {
      key: "solution/system/05",
      title: (
        <>
          가축 상시 <br className="title-br" />
          안전감시 시스템
        </>
      ),
      alt: "가축 상시 안전감시 시스템",
      desc: "가축의 이상 징후를 AI기술로 예측하는 시스템으로 활동성을 비롯한 여러 요소들의 분석을 통해 이상 징후를 알려드립니다.",
      sizes: {
        desktop_large: [624, 528],
        desktop_medium: [1180, 528],
        tablet: [668, 528],
        mobile: [300, 271],
      },
    },
  ];

  return (
    <PageSectionContainer className="page-solution-system">
      <PageSolutionSystemHeader />
      <div className="page-solution-system-container">
        <PageSectionWrapper>
          {system.map((d, i) => (
            <PageSolutionSystemItem
              key={d.key}
              index={i + 1}
              title={d.title}
              desc={d.desc}
              sizes={d.sizes}
              alt={d.alt}
            />
          ))}
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
