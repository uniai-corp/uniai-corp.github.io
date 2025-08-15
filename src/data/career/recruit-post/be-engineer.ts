import trackData from "../json/track.json";
import roleData from "../json/role.json";
import officeData from "../json/office.json";
import employmentType from "../json/employment_type.json";
import workEnv from "../json/work_env.json";
import welfare from "../json/welfare.json";
import applyProcess from "../json/apply_process.json";
import precaution from "../json/pre_caution.json";

export const recruit_be_engineer: RecruitPost = {
  key: "career/recruit-post/be/engineer",
  code: "be_engineer",
  title: `[2025 유니아이] ${trackData.be.name} ${roleData.engineer.name} 채용`,
  period: ["2025-08-01T09:00:00", "2025-09-30T23:59:59"],
  position: {
    name: `${trackData.be.name} ${roleData.engineer.name}`,
    track: trackData.be,
    role: roleData.engineer,
  },
  openings: 1,
  years: [3, 5],
  education: "학력무관",
  employment_type: employmentType.full_time,
  working_schedule: workEnv.full_time,
  office: officeData.daejeon,
  // 주요업무
  tasks: [
    {
      title: null,
      items: [
        "AI 기반 양계 농장 스마트 솔루션, 치킨몽거의 서비스 백엔드 개발·유지보수합니다.",
        "Python을 활용하여 AI 기능을 연결하는 백엔드 API를 구현합니다.",
        "객체 인식, 분류, 인스턴스 세그멘테이션 등 다양한 AI 기술을 제품에 적용합니다.",
        "실시간 시계열 이상 감지 시스템을 개발하여 평가 시스템을 구축합니다.",
        "동일한 기능을 수행하는 AI 백엔드 서버의 분산처리 시스템을 개발합니다.",
      ],
    },
  ],
  // 자격요건
  requirements: [
    {
      title: null,
      items: [
        "경력 3년 이상 ~ 5년 이하",
        "학력무관",
        "Python 및 FastAPI 웹 프레임워크에 능숙하신 분",
        "OpenCV 및 이미지 처리, 분산처리 기술에 관심이 많으신 분",
        "SQL 및 NoSQL 데이터베이스 관리 경험이 있으신 분",
        "클라우드 환경(AWS) 및 온프레미스(on-premise) 개발 경험이 있으신 분",
        "Git을 이용한 협업·버전 관리 경험이 풍부하신 분",
        "기획·디자인·프론트엔드 팀과 원활하게 소통하실 수 있는 커뮤니케이션 능력을 갖추신 분",
      ],
    },
  ],
  // 우대사항
  preferences: [
    {
      title: null,
      items: [
        "FastAPI 사용에 익숙하신 분",
        "Docker 및 Kubernetes(K8s)에 대한 이해가 있으신 분",
        "시계열 데이터베이스(InfluxDB)에 대한 이해가 있으신 분",
        "고성능의 분산 시스템 설계 및 운영 경험이 있으신 분",
        "프로젝트에 필요하다고 판단되는 기술을 적극 제안하고 실행해 보신 분",
        "에러 핸들링 및 로깅 처리 경험이 있으신 분",
        "코드 리뷰 및 CI/CD 파이프라인 구축 경험이 있으신 분",
      ],
    },
  ],
  pre_notice: {
    condition: {
      title: "근무 조건",
      items: [
        "고용형태: 정규직(수습 3개월)",
        "급여: 면접 후 결정",
        "근무지: 대전 유성구 대학로 99 대전 팁스타운 405호 유니아이",
        "근무요일/시간: 주 5일(월 ~ 금), 09:00 ~ 18:00",
      ],
    },
    welfare: {
      title: "복지 및 혜택",
      items: welfare.map(({ name, items }) => `${name}: ${items.join(", ")}`),
    },
  },
  process: {
    title: null,
    items: [
      `접수 방법: ${applyProcess.apply.document.pdf_email},`,
      `모집 기간: ${applyProcess.apply.period.fit}`,
    ],
    steps: applyProcess.steps.engineer,
  },
  pre_caution: precaution.daejeon,
};
