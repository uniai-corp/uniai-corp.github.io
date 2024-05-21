import Image from "next/image";

export default function PageSolutionProductFeature() {
  const feature: SolutionProductFeatureDataType[] = [
    {
      key: "solution/product/feature/feeding",
      category: "feeding",
      title: "사양관리",
      features: [
        "IoT 통합 환경관리 시스템",
        "실시간 IoT 센싱 모니터링",
        "편의성/안정성",
        "개체 상태 분석",
        "계사 내/외부 환경 분석",
        "통합분석 (A.I, IoT, 생육정보 등)",
      ],
    },
    {
      key: "solution/product/feature/weight",
      category: "weight",
      title: "체중관리",
      features: [
        "무게 추정 시스템",
        "실시간 체중(분포도) 분석",
        "체중 변화 예측",
        "체중 분포도 예측",
        "농가 생산성 예측",
        "출하 관리",
      ],
    },
    {
      key: "solution/product/feature/disease",
      category: "disease",
      title: "질병관리",
      features: [
        "가축 건강상태 유지",
        "인공지능 분석 시스템",
        "질병 예측 시스템",
        "이상감지 알림",
        "실시간 건강 모니터링",
        "시계열 데이터 분석",
        "행동 분류 분석",
        "군집 분포 패턴 분석",
      ],
    },
    {
      key: "solution/product/feature/control",
      category: "control",
      title: "통합제어",
      features: [
        "통합관제 및 자동제어 시스템",
        "인공지능 최적화 시스템",
        "농가 데이터 안정성 확보",
        "실시간 IoT 모니터링",
        "계열농가 출하 관리",
        "사육현황 모니터링",
        "농장 위생/방역관리",
      ],
    },
  ];
  return (
    <div className="page-solution-product-feature-container">
      <header className="page-solution-product-feature-header">
        <h3>개별상품</h3>
      </header>
      <ul>
        {feature.map(d => (
          <li key={d.key}>
            <FeatureItem {...d} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureItem({ key, category, title, features }: SolutionProductFeatureDataType) {
  return (
    <>
      <figure>
        <Image
          src={`/img/solution/product/feature/${category}.png`}
          alt={title}
          width={100}
          height={100}
        />
      </figure>
      <dl>
        <dt>{title}</dt>
        {features.map((desc, i) => (
          <dd key={`${key}/${i}`}>{desc}</dd>
        ))}
      </dl>
    </>
  );
}
