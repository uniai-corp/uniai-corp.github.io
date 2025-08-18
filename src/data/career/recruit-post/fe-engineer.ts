import trackData from "../json/track.json";
import roleData from "../json/role.json";
import officeData from "../json/office.json";
import employmentType from "../json/employment_type.json";
import workEnv from "../json/work_env.json";
import welfare from "../json/welfare.json";
import applyProcess from "../json/apply_process.json";
import precaution from "../json/pre_caution.json";

export const recruit_fe_engineer: RecruitPost = {
  key: "career/recruit-post/fe/engineer",
  code: "fe_engineer",
  title: `${trackData.fe.name} ${roleData.engineer.name} 채용`,
  period: ["2025-08-01T09:00:00", "2025-09-30T23:59:59"],
  position: {
    name: `${trackData.fe.name} ${roleData.engineer.name}`,
    track: trackData.fe,
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
        "TypeScript, React를 활용해 스마트팜 솔루션 및 데이터 시각화 대시보드의 프론트엔드를 개발·유지보수합니다.",
        "디자인 시스템을 구축·운영하고 SASS, styled-components로 스타일링을 관리합니다.",
        "REST API 및 WebSocket 기반 데이터 통신과 가공 로직을 구현합니다.",
        "자사 홈페이지 및 기타 웹페이지를 HTML, CSS, JavaScript로 퍼블리싱·유지보수합니다.",
        "크로스 브라우징·반응형 웹을 구축하고, Git을 활용한 버전 관리·협업을 수행합니다.",
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
        "HTML, CSS, JavaScript(ES6+) 기반 마크업·스타일링에 능숙하신 분",
        "React, TypeScript 및 Next.js(App Router, Turbopack/Webpack) 또는 Vite 환경에서 개발 경험이 있으신 분",
        "크로스 브라우징 및 반응형 웹 구축 경험이 있으신 분",
        "REST API 데이터를 프론트 구조에 맞게 재가공·보정한 경험이 있으신 분",
        "Git을 이용한 협업·버전 관리 경험이 풍부하신 분",
        "재사용 가능한 컴포넌트 설계 역량과 Recharts, D3.js 등의 데이터 시각화 라이브러리 활용 경험이 있으신 분",
        "기획·디자인·백엔드 팀과 원활하게 소통하실 수 있는 커뮤니케이션 능력을 갖추신 분",
      ],
    },
  ],
  // 우대사항
  preferences: [
    {
      title: null,
      items: [
        "제품 기획부터 배포·출시·유지보수까지 전체 워크플로우 경험이 있으신 분",
        "프로젝트에 필요하다고 판단되는 기술을 적극 제안하고 실행해 보신 분",
        "에러 핸들링 및 로깅 처리 경험이 있으신 분",
        "TDD(Test-Driven Development) 경험이 있으신 분",
        "모노레포(Turborepo) 및 마이크로 프론트엔드 환경 경험이 있으신 분",
        "코드 리뷰 및 CI/CD 파이프라인 구축 경험이 있으신 분",
        "성능 최적화 및 디자인 시스템 구축·유지보수 경험이 있으신 분",
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
      `접수 방법: ${applyProcess.apply.document.pdf_email}`,
      `모집 기간: ${applyProcess.apply.period.fit}`,
    ],
    steps: applyProcess.steps.engineer,
  },
  pre_caution: precaution.daejeon,
};
