type API_Req_PreOrderInquiry = {
  /**
   * 문의종류
   * @required
   * - exist: 기존 사용자
   * - new: 신규 사용자
   * - other: 기타
   */
  inquiry_type: string;
  /**
   * 이름
   * @required
   */
  name: string;
  /**
   * 연락처
   * @required
   */
  phone: string;
  /**
   * 이메일
   * @required
   */
  email: string;
  /**
   * 주소
   */
  address: string;
  /**
   * 서비스 패키지
   * @required
   * - basic: 스마트 플러스 기본 패키지
   * - weight: 체중 분석 패키지
   * - ai: 인공지능 맞춤형 사양 매니저 패키지
   * - robot: 로봇 패키지
   * @example
   * ["basic", "weight"]
   */
  service_package: string[];
  /**
   * 사육 구분
   * @required
   * - broiler: 육계
   * - layer: 산란계
   * - ps: 종계
   * - gps: 원종계
   * - other: 기타
   * @example
   * ["broiler", "layer"]
   */
  breed_type: string[];
  /**
   * 총 사육 규모
   */
  total_breeding_scale: string;
  /**
   * 문의 내용
   */
  contents: string;
  /**
   * 개인정보 수집 및 이용 동의
   * @required
   */
  privacy_agreement: boolean;
};

type API_Res_PreOrderInquiry = {
  is_ok: boolean;
  idx: string;
  error: string;
};

type PreOrderInquiryForm = Omit<API_Req_PreOrderInquiry, "service_package" | "breed_type"> & {
  service_package_check: Record<string, boolean>;
  breed_type_check: Record<string, boolean>;
};
