export const localeSegment: LocalePropsType[] = [{ locale: "en" }, { locale: "ko" }];

const localeData: LocaleDataCollectionType = {
  // ------------------ 메타데이터
  "site/domain": {
    ko: "https://uniai-corp.github.io/", // "https://www.uniai.co.kr/",
    en: "https://uniai-corp.github.io/en", // "https://www.uniai.co.kr/en"
  },
  "site/title": { ko: "UNiAI :: 유니아이", en: "UNiAI" },
  "site/desc": {
    ko: "인공지능과 사람이 만들어나가는 자연스러운 사회",
    en: "Humans and AI, crafting in harmony with nature",
  },

  // ------------------ 페이지 메뉴
  "page/about": { ko: "회사소개", en: "About" },
  "page/solution": { ko: "솔루션", en: "Solutions" },
  "page/career": { ko: "인재채용", en: "Career" },
  "page/pre-order": { ko: "V2 사전구매", en: "Pre-order V2" },
  "page/inquiry": { ko: "서비스문의", en: "Contact Us" },
  "page/privacy": { ko: "개인정보 처리방침", en: "Policy of Privacy" },
  "page/terms": { ko: "이용약관", en: "Terms and Conditions of Use" },

  // ------------------ 공통정보
  "common/company/name": { ko: "주식회사 유니아이", en: "UNIAI. Co., Ltd." },
  "common/company/ceo/title": { ko: "대표이사", en: "CEO" },
  "common/company/ceo/name": { ko: "백승환", en: "Baek Seung-hwan" },
  "common/company/register/title": { ko: "사업자등록번호", en: "Business Registration Number" },
  "common/company/hq": { ko: "본사", en: "Headquarters" },
  "common/company/hq/address": {
    ko: "대전광역시 유성구 대학로 99 대전 팁스타운",
    en: "Daejeon Tipstown, 99 Daehak-ro, Yuseong-gu, Daejeon",
  },
  "common/company/research": { ko: "기업부설연구소", en: "Research center" },
  "common/company/research/address": {
    ko: "경기 성남시 수정구 대왕판교로 815 기업지원허브",
    en: "Business Support Hub, 815 Daewangpangyo-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do",
  },

  // ------------------ 메인페이지
  // 메인페이지; 비주얼
  "main/visual/upper": {
    ko: "인공지능과 사람이 만들어나가는",
    en: "Humans and AI, crafting",
  },
  "main/visual/lower": { ko: "자연스러운 사회", en: " in harmony with nature" },
  // 메인페이지; 기술
  "main/tech/title": {
    ko: "유니아이의 AI 기술을 소개합니다",
    en: "Introducing UNIAI.’s AI Solutions",
  },
  "main/tech/desc/upper": {
    ko: "닭, 돼지 농가의 축사 관제 시스템과 ",
    en: "Effortlessly manage your farms with control systems for poultry and pig farmers, ",
  },
  "main/tech/desc/lower": {
    ko: "데이터에 기반한 체중예측, 질병예측 기능으로 축사를 편하게 관리할 수 있습니다",
    en: "featuring data-driven weight and disease prediction functions.",
  },
  "main/tech/medical/title": {
    ko: "AI 정밀 의료 서비스 솔루션",
    en: "AI Precision Medical Service Solutions",
  },
  "main/tech/medical/desc": {
    ko: "면담 작성, Ham-D 그래프 확인으로 진료의 편의를 도모하고 AI 약재 추천 기능으로 우울증 진단에 도움을 줄 수 있습니다.",
    en: "Enhance clinical convenience with interview documentation and Ham-D graph reviews. AI medication recommendations assist in diagnosing depression.",
  },
  "main/tech/transport/title": {
    ko: "인터모달 자동화물 운송 시스템",
    en: "Intermodal Automated Cargo Transport System",
  },
  "main/tech/transport/desc": {
    ko: "컨테이너 글자를 인식해맞는 화물선에 실을 수 있도록 AI 인공지능 딥러닝 기반 문자 인식 성능을 개발 보유하고 있습니다.",
    en: "We have developed AI deep learning-based character recognition capabilities to identify container labels and ensure they are loaded onto the correct cargo ships.",
  },
  "main/service/desc/0": {
    ko: "치킨몽거는 실시간 모니터링, 농장제어, 사양관리와",
    en: "ChickenMonger is a comprehensive livestock farming solution",
  },
  "main/service/desc/1": {
    ko: "더불어 유니아이의 인공지능 기술로",
    en: "that offers real-time monitoring, farm control, and management,",
  },
  "main/service/desc/2": {
    ko: "체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.",
    en: "along with AI-based weight and disease predictions powered by UNIAI.’s technology.",
  },
  "main/service/name": { ko: "치킨몽거 플랫폼", en: "ChickenMonger Platform" },
  "main/service/button": { ko: "바로가기", en: "Go to Link" },

  // ------------------ 회사소개 페이지
  // 회사소개; 비주얼
  "about/visual/title": {
    ko: "데이터로 만드는 <br />인공지능 혁신",
    en: "AI Innovation <br />Driven by Data",
  },
  "about/visual/desc": {
    ko: "유니아이만의 AI 기술력을 통해 생산자와 소비자 모두에게 필요한 데이터를 제공하여, 세상에 단 하나뿐인 인공지능 혁신을 만들어갑니다.",
    en: "With UNiAI's AI technology, we provide the data we need for both producers and consumers, creating unique AI innovation in the world.",
  },
  // 회사소개; CEO
  "about/ceo/title": { ko: "유니아이 대표이사 소개", en: "Introducing UNiAI.’s CEO" },
  // 회사소개; CEO - 학력
  "about/ceo/edu/title": { ko: "학력", en: "Education" },
  "about/ceo/edu/0/university": { ko: "서울대학교", en: "Seoul National University" },
  "about/ceo/edu/0/study": {
    ko: "기계항공공학부 학사",
    en: "Bachelor of Mechanical and Aerospace Engineering",
  },
  "about/ceo/edu/1/university": { ko: "University of Michigan", en: "University of Michigan" },
  "about/ceo/edu/1/study": {
    ko: "기계공학과 (로봇) 석사",
    en: "Master of Mechanical Engineering (Robotics)",
  },
  "about/ceo/edu/2/university": { ko: "한국과학기술원 (KAIST)", en: "KAIST" },
  "about/ceo/edu/2/study": {
    ko: "인공지능, 로봇 박사",
    en: "Ph.D. in Artificial Intelligence and Robotics",
  },
  // 회사소개; CEO - 경력
  "about/ceo/career/title": { ko: "경력", en: "Experience" },
  "about/ceo/career/desc/2": {
    ko: "2021.01. - 현재 유니아이 기술개발 총괄 대표이사",
    en: "Jan 2021 - Present CEO and Head of Technology Development at UNIAI.",
  },
  // 회사소개; CEO - 전문분야
  "about/ceo/expert/title": { ko: "전문분야", en: "Specialization" },
  // 회사소개; 비전
  "about/vision/desc/upper": {
    ko: "필요한 데이터로 이 세상에 <br />단 하나뿐인 <br />인공지능 혁신을 만듭니다.",
    en: "Creating Unique <br />AI Innovations <br />Through Essential Data.",
  },
  "about/vision/desc/lower": { ko: "유니아이의 시작", en: "The Beginning of UNiAI." },
  // 회사소개; 파트너
  "about/partner/title/desc": {
    ko: "다양한 파트너사와 함께 성장하고 있는 주식회사 <br />유니아이",
    en: "UNIAI. Co., Ltd. <br />is growing alongside a diverse range of partner companies.",
  },
  "about/partner/association": { ko: "가금협회", en: "Poultry Associations" },
  "about/partner/rnd": { ko: "제품개발", en: "Product Development" },
  "about/partner/disease": { ko: "질병연구", en: "Disease Research" },
  "about/partner/distribution": { ko: "가금계열사", en: "Poultry Affiliates" },
  "about/partner/marketing": { ko: "마케팅", en: "Marketing" },
  "about/partner/feeds": { ko: "사료유통", en: "Feed Distributor" },
  "about/partner/govern": { ko: "정부기관", en: "Government Agencies" },
  "about/partner/academic": { ko: "산학협력", en: "Industry-Academia Cooperation" },
  "about/partner/law": { ko: "법률자문", en: "Legal Consultation" },

  // ------------------ 솔루션 페이지
  "solution/system/title/0": { ko: "가금류", en: "Smart Integrated" },
  "solution/system/title/1": {
    ko: "스마트 축사 통합 관제",
    en: "Poultry Farm Control",
  },
  "solution/system/title/2": { ko: "시스템", en: "System" },
  // 솔루션; 시스템
  "solution/system/feeding/title": { ko: "사양관리", en: "Feeding Management" },
  "solution/system/feeding/desc": {
    ko: "급이, 급수, 도폐사 같은 사육정보와 축사 환경정보,약품 사용량 등 농장 운영에 기본인 사양일지를 간편하게 작성, 관리할 수 있습니다.",
    en: "Easily create and manage essential feeding logs, including feeding, watering, culling data, environmental conditions, and medication usage for efficient farm operations.",
  },
  "solution/system/control/title": { ko: "통합제어", en: "Integrated Control" },
  "solution/system/control/desc": {
    ko: "IoT로 실시간 모니터링과 제어가 가능해, 축사를 항상 최적의 상태로 유지 할 수 있습니다.",
    en: "Maintain optimal farm conditions through real-time monitoring and control enabled by IoT technology.",
  },
  "solution/system/disease/title": { ko: "질병관리", en: "Disease Management" },
  "solution/system/disease/desc": {
    ko: "AI의 건강 이상감지 지역수의사, 병성감정기관과 연계하여 건강검진과 진단 서비스로 까다로운 질병관리를 치킨몽거가 대신 해드립니다.",
    en: "ChickenMonger handles complex disease management by detecting health anomalies with AI and coordinating with local veterinarians and diagnostic institutions for health check-ups and diagnostic services.",
  },
  "solution/system/weight/title": { ko: "체중관리", en: "Weight Management" },
  "solution/system/weight/desc": {
    ko: "AI의 무게추정 시스템으로 실시간 체중 분석이 가능해 농장 생산성과 출하일을 계산하여 생산비용을 절약할 수 있습니다.",
    en: "AI's weight estimation system enables real-time weight analysis, saving production costs by calculating farm productivity and shipment dates.",
  },
  "solution/system/safety/title": {
    ko: "가축 상시 <br />안전감시 시스템",
    en: "Continuous Livestock <br />Safety Monitoring System",
  },
  "solution/system/safety/title/string": {
    ko: "가축 상시 안전감시 시스템",
    en: "Continuous Livestock Safety Monitoring System",
  },
  "solution/system/safety/desc": {
    ko: "가축의 이상 징후를 AI기술로 예측하는 시스템으로 활동성을 비롯한 여러 요소들의 분석을 통해 이상 징후를 알려드립니다.",
    en: "Predict livestock abnormalities using AI technology, informing you of any issues through the analysis of various factors like activity levels.",
  },
  // 솔루션; 제품
  "solution/product/title": {
    ko: "스마트 축사 통합 관제 시스템",
    en: "Smart Integrated Livestock Farm Control System",
  },
  "solution/product/allInOne/title": { ko: "통합상품", en: "Integrated Products" },
  "solution/product/allInOne/feature/title": {
    ko: "주요기능",
    en: "Key Features",
  },
  "solution/product/allInOne/feature/control": {
    ko: "축사 모니터링과 제어",
    en: "Farm Monitoring and Control",
  },
  "solution/product/allInOne/feature/disease": {
    ko: "질병 예측과 진단",
    en: "Disease Prediction and Diagnosis",
  },
  "solution/product/allInOne/feature/weight": {
    ko: "AI 자동 체중 측정, 예측",
    en: "AI Automatic Weight Measurement and Prediction",
  },
  "solution/product/allInOne/feature/analysis": {
    ko: "생육정보 입력, 분석",
    en: "Input and Analysis of Growth Information",
  },
  "solution/product/allInOne/category/desc": {
    ko: "ChickenMonger의 모든 서비스를 한번에!",
    en: "All of ChickenMonger’s services in one package!",
  },
  "solution/product/feature/feeding/title": { ko: "사양관리", en: "Feeding Management" },
  "solution/product/feature/disease/title": { ko: "질병관리", en: "Disease Management" },
  "solution/product/feature/weight/title": { ko: "체중관리", en: "Weight Management" },
  "solution/product/feature/control/title": { ko: "통합제어", en: "Integrated Control" },
  "solution/product/feature/feeding/desc/0": {
    ko: "IoT 통합 환경관리 시스템",
    en: "IoT Integrated Environmental Management System",
  },
  "solution/product/feature/feeding/desc/1": {
    ko: "실시간 IoT 센싱 모니터링",
    en: "Real-time IoT Sensing and Monitoring",
  },
  "solution/product/feature/feeding/desc/2": { ko: "편의성/안정성", en: "Convenience and Safety" },
  "solution/product/feature/feeding/desc/3": {
    ko: "개체 상태 분석",
    en: "Individual Condition Analysis",
  },
  "solution/product/feature/feeding/desc/4": {
    ko: "계사 내/외부 환경 분석",
    en: "Internal and External Coop Environment Analysis",
  },
  "solution/product/feature/feeding/desc/5": {
    ko: "통합분석 (A.I, IoT, 생육정보 등)",
    en: "Integrated Analysis (A.I., IoT, Growth Information, etc.)",
  },
  "solution/product/feature/weight/desc/0": {
    ko: "무게 추정 시스템",
    en: "Weight Estimation System",
  },
  "solution/product/feature/weight/desc/1": {
    ko: "실시간 체중(분포도) 분석",
    en: "Real-time Weight(Distribution Plot) Analysis",
  },
  "solution/product/feature/weight/desc/2": {
    ko: "체중 변화 예측",
    en: "Prediction of Weight Changes",
  },
  "solution/product/feature/weight/desc/3": {
    ko: "체중 분포도 예측",
    en: "Prediction of Weight Distribution",
  },
  "solution/product/feature/weight/desc/4": {
    ko: "농가 생산성 예측",
    en: "Farming Productivity Forecast",
  },
  "solution/product/feature/weight/desc/5": {
    ko: "출하 관리",
    en: "Shipment Management",
  },
  "solution/product/feature/disease/desc/0": {
    ko: "가축 건강상태 유지",
    en: "Maintenance of Livestock Health",
  },
  "solution/product/feature/disease/desc/1": {
    ko: "인공지능 분석 시스템",
    en: "Artificial Intelligence Analysis System",
  },
  "solution/product/feature/disease/desc/2": {
    ko: "질병 예측 시스템",
    en: "Disease Prediction System",
  },
  "solution/product/feature/disease/desc/3": {
    ko: "이상감지 알림",
    en: "Anomaly Detection Alerts",
  },
  "solution/product/feature/disease/desc/4": {
    ko: "실시간 건강 모니터링",
    en: "Real-time Health Monitoring",
  },
  "solution/product/feature/disease/desc/5": {
    ko: "시계열 데이터 분석",
    en: "Analysis of Time Series Data",
  },
  "solution/product/feature/disease/desc/6": {
    ko: "행동 분류 분석",
    en: "Behavioral Classification Analysis",
  },
  "solution/product/feature/disease/desc/7": {
    ko: "군집 분포 패턴 분석",
    en: "Real-time Health Monitoring",
  },
  "solution/product/feature/control/desc/0": {
    ko: "통합관제 및 자동제어 시스템",
    en: "Integrated Control and Automation System",
  },
  "solution/product/feature/control/desc/1": {
    ko: "인공지능 최적화 시스템",
    en: "AI Optimization System",
  },
  "solution/product/feature/control/desc/2": {
    ko: "농가 데이터 안정성 확보",
    en: "Ensuring Farm Data Stability",
  },
  "solution/product/feature/control/desc/3": {
    ko: "실시간 IoT 모니터링",
    en: "Real-time IoT Monitoring",
  },
  "solution/product/feature/control/desc/4": {
    ko: "계열농가 출하 관리",
    en: "Shipment Management of Affiliated Farms",
  },
  "solution/product/feature/control/desc/5": {
    ko: "사육현황 모니터링",
    en: "Livestock Monitoring",
  },
  "solution/product/feature/control/desc/6": {
    ko: "농장 위생/방역관리",
    en: "Farm Hygiene and Quarantine Management",
  },
  "solution/product/weightPackage/title": { ko: "개별상품", en: "Individual Products" },
  "solution/product/weightPackage/desc/upper": {
    ko: "체중에 초점을 맞춘 “체중특화” 상품으로",
    en: `Focus on weight with our “Weight-Specialized” product,`,
  },
  "solution/product/weightPackage/desc/lower": {
    ko: "사양관리 + 체중관리 + 통합제어를 이용하실 수 있습니다.",
    en: "which offers Feeding Management + Weight Management + Integrated Control.",
  },

  // ------------------ Pre-order 페이지
  // 사전구매; 비주얼
  "page/pre-order/visual/title/upper": {
    ko: "치킨몽거 스마트 플러스",
    en: "Pre-order",
  },
  "page/pre-order/visual/title/lower": {
    ko: "사전구매",
    en: "ChickenMonger Smart Plus",
  },
  "page/pre-order/visual/description": {
    ko: "더 쉽고 똑똑하게, 양계 스마트 축사의 새로운 기준!",
    en: "Smarter & Simpler - The New Standard for Smart Poultry Farming!",
  },
  // 사전구매; 신청서
  "page/pre-order/form/inquiry-type": {
    ko: "문의 종류",
    en: "Inquiry Type",
  },
  "page/pre-order/form/inquiry-type/exist": {
    ko: "기존 사용자",
    en: "Existing User",
  },
  "page/pre-order/form/inquiry-type/new": {
    ko: "신규 사용자",
    en: "New User",
  },
  "page/pre-order/form/inquiry-type/other": {
    ko: "기타",
    en: "Other",
  },
  "page/pre-order/form/name": {
    ko: "이름",
    en: "Name",
  },
  "page/pre-order/form/name/placeholder": {
    ko: "이름을 입력해 주세요.",
    en: "Enter your name.",
  },
  "page/pre-order/form/contact": {
    ko: "연락처",
    en: "Phone Number",
  },
  "page/pre-order/form/contact/placeholder": {
    ko: "연락처를 입력해 주세요.",
    en: "Enter your phone number.",
  },
  "page/pre-order/form/email": {
    ko: "이메일",
    en: "E-mail",
  },
  "page/pre-order/form/email/placeholder": {
    ko: "이메일을 입력해 주세요.",
    en: "Enter your e-mail.",
  },
  "page/pre-order/form/address": {
    ko: "주소",
    en: "Address",
  },
  "page/pre-order/form/address/placeholder": {
    ko: "주소를 입력해 주세요.",
    en: "Enter your address.",
  },
  "page/pre-order/form/packages": {
    ko: "서비스 패키지",
    en: "Service Package",
  },
  "page/pre-order/form/packages/basic": {
    ko: "스마트 플러스 기본 패키지",
    en: "Smart Plus Basic Package",
  },
  "page/pre-order/form/packages/weight": {
    ko: "체중 분석 패키지",
    en: "Weight Analysis Package",
  },
  "page/pre-order/form/packages/ai-management": {
    ko: "인공지능 맞춤형 사양 매니저 패키지",
    en: "AI-Powered Feeding Manager Package",
  },
  "page/pre-order/form/packages/robot": {
    ko: "로봇 패키지",
    en: "Robot Package",
  },
  "page/pre-order/form/breed-type": {
    ko: "사육 구분",
    en: "Farming Type",
  },
  "page/pre-order/form/breed-type/broiler": {
    ko: "육계",
    en: "Broilers",
  },
  "page/pre-order/form/breed-type/layer": {
    ko: "산란계",
    en: "Layers",
  },
  "page/pre-order/form/breed-type/ps": {
    ko: "종계",
    en: "Parent Stock (Breeders)",
  },
  "page/pre-order/form/breed-type/gps": {
    ko: "원종계",
    en: "Grandparent Stock",
  },
  "page/pre-order/form/breed-type/other": {
    ko: "기타",
    en: "Other",
  },
  "page/pre-order/form/breed-scale": {
    ko: "총 사육 규모",
    en: "Farming Scale",
  },
  "page/pre-order/form/breed-scale/notice": {
    ko: "(총 계사동 수, 총 사육 수수)",
    en: "(total barns, total birds)",
  },
  "page/pre-order/form/breed-scale/placeholder": {
    ko: "총 계사동 수, 총 사육 수수를 입력해 주세요.",
    en: "Enter your total barns and birds.",
  },
  "page/pre-order/form/contents": {
    ko: "문의 내용",
    en: "Inquiry Details",
  },
  "page/pre-order/form/contents/placeholder": {
    ko: "문의 내용을 입력해 주세요.",
    en: "Enter your inquiry details.",
  },
  "page/pre-order/form/policy-agree/notice": {
    ko: "개인정보 수집 및 이용에 동의합니다.",
    en: "I agree to the collection and use of my personal information",
  },
  "page/pre-order/form/policy-agree/view-detail": {
    ko: "상세보기",
    en: "View Details",
  },
  "page/pre-order/form/send": {
    ko: "문의하기",
    en: "Submit",
  },
  "page/pre-order/form/validation/required": {
    ko: "필수 입력입니다.",
    en: "This field is required.",
  },
  "page/pre-order/form/validation/policy-agree": {
    ko: "연락처 수집을 위해 동의해 주세요.",
    en: "Please agree to the collection of your contact information.",
  },
  "page/pre-order/form/validation/check/service-package": {
    ko: "서비스 패키지를 선택해 주세요.",
    en: "Please select a service package.",
  },
  "page/pre-order/form/validation/check/breed-type": {
    ko: "사육 구분을 선택해 주세요.",
    en: "Please select a farming type.",
  },
  "page/pre-order/form/send/success": {
    ko: "문의가 성공적으로 전송되었습니다.",
    en: "Your inquiry has been sent successfully.",
  },
  "page/pre-order/form/send/error": {
    ko: "전송에 실패했습니다. 다시 시도해 주세요.",
    en: "Failed to send. Please try again.",
  },
};

export default localeData;
