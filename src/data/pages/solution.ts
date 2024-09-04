const summary: SolutionProductSummaryDataType[] = [
  {
    classifyKey: "solution/product/summary/monitoring",
    category: "monitoring",
    name: "축사 모니터링과 제어",
  },
  {
    classifyKey: "solution/product/summary/disease",
    category: "disease",
    name: "질병 예측과 진단",
  },
  {
    classifyKey: "solution/product/summary/weight",
    category: "weight",
    name: "AI 자동 체중 측정, 예측",
  },
  {
    classifyKey: "solution/product/summary/analysis",
    category: "analysis",
    name: "생육정보 입력, 분석",
  },
];

const feature: SolutionProductFeatureDataType[] = [
  {
    classifyKey: "solution/product/feature/feeding",
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
    classifyKey: "solution/product/feature/weight",
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
    classifyKey: "solution/product/feature/disease",
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
    classifyKey: "solution/product/feature/control",
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

const solution = { summary, feature };

export default solution;
