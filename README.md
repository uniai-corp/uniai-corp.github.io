# UNiAI 홈페이지

---

## 1. 프로젝트 실행

### 0. 사전준비

0-1. Node.js 설치

- 버전은 `v22.14.0`으로 설치해주세요.
- 구글에서 `node.js 설치`만 검색해도 쉬운 설명 글이 많이 있습니다.

### 1-1. 패키지 설치

- 터미널에 다음을 입력

```bash
npm i
```

### 1-2. 개발서버 구동

- `scripts`내 `"dev"` 키워드의 `"--experimental-https"`로 _*https*_ 접속 적용
- 터미널에 다음을 입력

```bash
npm run dev
```

- <http://localhost:3000/>으로 접속
- 와이파이 접속망을 통한 공유 주소는, 로컬서버 구동 시 서버 로그를 통해 URL이 제공됩니다.

```plaintext
▲ Next.js 15.3.1
  - Local:        https://localhost:3000
  - Network:      http://0.0.0.0:3000

 ✓ Starting...

      - Local: https://localhost:3000
      - Network: https://{접속망 ip}:3000
```

---

## 2. 프로젝트 환경 구성

- Node.js v22.14.0
- Next.js v15.3.1 - App Router
- `create-next-app`([참조](https://nextjs.org/docs/getting-started/installation))으로 시작
- 기타 버전 관리는 [package.json](https://github.com/uniai-corp/homepage/blob/front_dev/package.json) 참조

### 2-1. 프론트엔드 활용 기술

#### 코어

- `Next.js` v15 - App Router
- `TypeScript`

#### 상태관리

- `Jotai` (UI 상태관리)

#### 스타일링

- `pretendard` 폰트 패키지 적용
- `SASS` (모든 CSS 문법은 SASS로 함)
- `TailwindCSS` (reset.css만 적용)

#### 인터렉션

- `gsap` (ScrollTrigger 플러그인)
- `simplebar`, `simplebar-react` (커스텀 스크롤바)

#### 패키지 관리

- `npm`

#### 컨벤션

- `ESLint` (문법 체크)
- `Prettier` (코드 스타일)

---
