/**
 * 채용 공고 섹션(주요업무, 자격요건, 우대사항 등)
 * @property {string | null} title 섹션 제목(없을 수 있음)
 * @property {string[]} items 항목 내용(개행식)
 */
export type JDSection = {
  /** 섹션 제목(없을 수 있음) */
  title: string | null;
  /** 항목 내용(개행식) */
  items: string[];
};

/**
 * 채용 직무 정보(Frontend/Backend/Infra 등)
 * @property {string} code 직무 코드(슬러그)
 * @property {string} name 직무 명칭(표시명)
 */
export type Track = {
  /** 직무 코드(슬러그) */
  code: string;
  /** 직무 명칭(표시명) */
  name: string;
};

/**
 * 채용 직무 정보 컬렉션: code → Track
 * @property {Track} key 직무 코드별 Track 객체
 */
export type TrackCollection = Record<string, Track>;

// --------------------------------------
// role.json
// --------------------------------------

/**
 * 직위 메타(Engineer/Lead 등)
 * @property {string} key 내부 고정 키(e.g. "role/engineer")
 * @property {string} code 직위 코드(e.g. "engineer")
 * @property {string} name 직위 명칭(e.g. "엔지니어")
 */
export type Role = {
  /** 내부 고정 키 */
  key: string;
  /** 직위 코드 */
  code: string;
  /** 직위 명칭 */
  name: string;
};

/**
 * 직위 컬렉션: code → Role
 * @property {Role} key 직위 코드별 Role 객체
 */
export type RoleMap = Record<string, Role>;

// --------------------------------------
// office.json
// --------------------------------------

/**
 * 지도/내비 등 외부 맵 서비스 URL 모음
 * @property {string | null} [platform] 플랫폼 키(google/naver 등)에 대한 URL 또는 null
 */
export type OfficeMapUrls = Record<string, string | null>;

/**
 * 근무지(오피스) 메타
 * @property {string} key 내부 고정 키(e.g. "office/daejeon")
 * @property {string} code 오피스 코드(e.g. "daejeon")
 * @property {string} name 오피스 명칭(e.g. "대전")
 * @property {[string, string]} address 주소: [도로명, 상세]
 * @property {OfficeMapUrls} map 맵 서비스 링크 모음
 */
export type Office = {
  /** 내부 고정 키 */
  key: string;
  /** 오피스 코드 */
  code: string;
  /** 오피스 명칭 */
  name: string;
  /** 주소: [도로명, 상세] */
  address: [string, string];
  /** 맵 서비스 링크 모음 */
  map: OfficeMapUrls;
};

/**
 * 오피스 컬렉션: code → Office
 * @property {Office} key 오피스 코드별 Office 객체
 */
export type OfficeMap = Record<string, Office>;

// --------------------------------------
// employment_type.json
// --------------------------------------

/**
 * 고용 형태 엔트리(정규직/계약직/인턴 등)
 * @property {string} name 고용형태 명칭(표시용)
 * @property {number | null} probation 수습 개월 수(null이면 미적용)
 */
export type EmploymentTypeEntry = {
  /** 고용형태 명칭(표시용) */
  name: string;
  /** 수습 개월 수(null이면 미적용) */
  probation: number | null;
};

/**
 * 고용 형태 컬렉션: key → Entry (e.g. full_time/contract)
 * @property {EmploymentTypeEntry} key 고용 형태별 엔트리
 */
export type EmploymentTypeMap = Record<string, EmploymentTypeEntry>;

// --------------------------------------
// work_env.json (근무 스케줄/형태)
// --------------------------------------

/**
 * 근무 스케줄/형태 엔트리
 * @property {string} days 근무 요일 설명(예: 주 5일(월~금))
 * @property {string} hours 근무 시간 설명(예: 09:00~18:00)
 * @property {string | null} benefits 스케줄 관련 부가 혜택(없을 수 있음)
 */
export type WorkEnvEntry = {
  /** 근무 요일 설명 */
  days: string;
  /** 근무 시간 설명 */
  hours: string;
  /** 스케줄 관련 부가 혜택(없을 수 있음) */
  benefits: string | null;
};

/**
 * 근무 스케줄 컬렉션: key → Entry (e.g. full_time/part_time)
 * @property {WorkEnvEntry} key 근무 스케줄별 엔트리
 */
export type WorkEnvMap = Record<string, WorkEnvEntry>;

// --------------------------------------
// welfare.json (복지 카테고리)
// --------------------------------------

/**
 * 복지 카테고리
 * @property {string} key 카테고리 고정 키(e.g. "welfare/salary")
 * @property {string} code 카테고리 코드(e.g. "salary")
 * @property {string} name 카테고리 명칭(e.g. "급여 제도")
 * @property {string[]} items 항목 리스트
 */
export type WelfareCategory = {
  /** 카테고리 고정 키 */
  key: string;
  /** 카테고리 코드 */
  code: string;
  /** 카테고리 명칭 */
  name: string;
  /** 항목 리스트 */
  items: string[];
};

/**
 * 복지 카탈로그(배열)
 * @property {WelfareCategory[]} 0..n 카테고리 리스트
 */
export type WelfareCatalog = WelfareCategory[];

// --------------------------------------
// apply_process.json
// --------------------------------------

/**
 * 서류 제출 정보 맵 (확장용 코드 → 설명/주소/링크 등)
 * @property {string} code 제출 방식 코드 키(예: "pdf_email")
 * @property {string} value 제출 방식 설명/주소/링크 등
 */
export type ApplyDocumentMap = Record<string, string>;

/**
 * 모집 기간 정보 맵 (확장용 코드 → 설명)
 * @property {string} code 기간 코드 키(예: "fit", "open_ended" 등)
 * @property {string} value 기간 설명 텍스트
 */
export type ApplyPeriodMap = Record<string, string>;

/**
 * 지원 방법(서류/기간 등)
 * @property {ApplyDocumentMap} document 서류 제출 방식 맵(예: { pdf_email: "..." })
 * @property {ApplyPeriodMap} period 모집 기간 맵(예: { fit: "채용 시 마감" })
 */
export type ApplyProcessApply = {
  /** 서류 제출 방식 맵 */
  document: ApplyDocumentMap;
  /** 모집 기간 맵 */
  period: ApplyPeriodMap;
};

/**
 * 직군별 전형 단계 맵: roleCode → steps[]
 * @property {string[]} roleCode 직군 코드별 단계 리스트(서류→면접 등)
 */
export type ApplyProcessSteps = Record<string, string[]>;

/**
 * 전형/지원 안내(간결형; JSON 1:1)
 * @property {ApplyProcessApply} apply 지원 방법
 * @property {ApplyProcessSteps} steps 직군 코드별 전형 단계 맵
 */
export type ApplyProcess = {
  /** 지원 방법 */
  apply: ApplyProcessApply;
  /** 직군 코드별 전형 단계 맵 */
  steps: ApplyProcessSteps;
};

/**
 * 전형/지원 안내(엄격 버전)
 * @property {ApplyProcessApply} apply 지원 방법
 * @property {ApplyProcessSteps} steps 직군 코드별 전형 단계 맵
 */
export type ApplyProcessStrict = {
  /** 지원 방법 */
  apply: ApplyProcessApply;
  /** 직군 코드별 전형 단계 맵 */
  steps: ApplyProcessSteps;
};

// --------------------------------------
// pre_caution.json (사전 유의사항 by office)
// --------------------------------------

/**
 * 오피스별 사전 유의사항: code → strings
 * @property {string[]} code 오피스 코드별 유의사항 리스트
 */
export type PreCautionMap = Record<string, string[]>;

// --------------------------------------
// recruit-post/* (fe-engineer.ts 등 최종 공고 오브젝트)
// --------------------------------------

/**
 * 직무/직위 조합(표시용)
 * @property {string} name 조합 표기명(예: 프론트엔드 엔지니어)
 * @property {Track} track 직무 참조
 * @property {Role} role 직위 참조
 */
export type PositionLite = {
  /** 조합 표기명 */
  name: string;
  /** 직무 참조 */
  track: Track;
  /** 직위 참조 */
  role: Role;
};

/**
 * 고용 형태 키(확장 가능)
 */
export type EmploymentTypeKey =
  | "full_time"
  | "part_time"
  | "contract"
  | "internship"
  | (string & {});

/**
 * 근무 스케줄 키(확장 가능)
 */
export type WorkEnvKey = "full_time" | "part_time" | "contract" | "internship" | (string & {});

/**
 * 오피스 코드 슬러그
 */
export type OfficeKey = string;

/**
 * 최종 채용 공고(fe-engineer.ts 등)
 * @desc
 * - period: ISO 8601 [start, end]
 * - employment_type, working_schedule, office: 카탈로그 엔트리 참조
 * - position: Track/Role 조합 표기
 * @property {string} key 고유 키(파일 경로 슬러그 등)
 * @property {string} title 공고 제목
 * @property {[string, string]} period 모집 기간(시작/종료)
 * @property {PositionLite} position 직무/직위 조합
 * @property {number} openings 모집 인원
 * @property {number | [number, number]} years 지원 연차(단일 또는 범위)
 * @property {string} education 최종 학력 설명
 * @property {EmploymentTypeEntry} employment_type 고용 형태(카탈로그 엔트리)
 * @property {WorkEnvEntry} working_schedule 근무 스케줄(카탈로그 엔트리)
 * @property {Office} office 근무지(오피스 엔트리)
 * @property {JDSection[]} tasks JD 섹션: 주요업무
 * @property {JDSection[]} requirements JD 섹션: 자격요건
 * @property {JDSection[]} preferences JD 섹션: 우대사항
 * @property {{condition: JDSection, welfare: {title: string, items: string[]}}} pre_notice 공고 내 사전 안내
 * @property {{title: string | null, items: string[], steps: string[]}} process 전형 절차
 * @property {string[]} pre_caution 오피스별 유의사항(사전 고지)
 */
export type RecruitPost = {
  /** 고유 키 */
  key: string;
  /** 공고 제목 */
  title: string;
  /** 모집 기간 [start, end] ISO8601 */
  period: [string, string];

  /** 직무/직위 조합 */
  position: PositionLite;

  /** 모집 인원 */
  openings: number;
  /** 지원 연차(단일 또는 범위) */
  years: number | [number, number];
  /** 최종 학력 설명 */
  education: string;

  /** 고용 형태(카탈로그 엔트리) */
  employment_type: EmploymentTypeEntry;
  /** 근무 스케줄(카탈로그 엔트리) */
  working_schedule: WorkEnvEntry;
  /** 근무지(오피스 엔트리) */
  office: Office;

  /** JD 섹션: 주요업무 */
  tasks: JDSection[];
  /** JD 섹션: 자격요건 */
  requirements: JDSection[];
  /** JD 섹션: 우대사항 */
  preferences: JDSection[];

  /** 공고 내 사전 안내 */
  pre_notice: {
    /** 근무 조건 요약 */
    condition: JDSection;
    /** 복지 요약(카탈로그 가공 결과) */
    welfare: { title: string; items: string[] };
  };

  /** 전형 절차 */
  process: {
    /** 전형 안내 제목(없을 수 있음) */
    title: string | null;
    /** 안내 문구들 */
    items: string[];
    /** 단계 리스트 */
    steps: string[];
  };

  /** 오피스별 유의사항(사전 고지) */
  pre_caution: string[];
};

// --------------------------------------
// Aggregated dataset shape (선택)
// --------------------------------------

/**
 * 카탈로그 집합(옵션)
 * @property {TrackCollection} track 직무 컬렉션
 * @property {RoleMap} role 직위 컬렉션
 * @property {OfficeMap} office 오피스 컬렉션
 * @property {EmploymentTypeMap} employmentType 고용 형태 컬렉션
 * @property {WorkEnvMap} workEnv 근무 스케줄 컬렉션
 * @property {WelfareCatalog} welfare 복지 카탈로그
 * @property {ApplyProcess} applyProcess 전형/지원 안내(또는 ApplyProcessStrict)
 * @property {PreCautionMap} preCaution 오피스별 사전 유의사항
 */
export type CareerCatalog = {
  /** 직무 컬렉션 */
  track: TrackCollection;
  /** 직위 컬렉션 */
  role: RoleMap;
  /** 오피스 컬렉션 */
  office: OfficeMap;
  /** 고용 형태 컬렉션 */
  employmentType: EmploymentTypeMap;
  /** 근무 스케줄 컬렉션 */
  workEnv: WorkEnvMap;
  /** 복지 카탈로그 */
  welfare: WelfareCatalog;
  /** 전형/지원 안내 */
  applyProcess: ApplyProcess; // 또는 ApplyProcessStrict
  /** 오피스별 사전 유의사항 */
  preCaution: PreCautionMap;
};
