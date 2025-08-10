#요구사항명세서
개인 포트폴리오 원페이지 사이트 – 기능 명세서 (핵심)

1) 개요
	•	목적: 개인 경력/프로젝트/연락을 한 페이지에서 명확히 전달, 채용·클라이언트 컨택 유도
	•	타깃: 리크루터, 발주 담당자, 동료 개발자
	•	플랫폼: 반응형 웹(모바일 퍼스트), 최신 브라우저(Chromium/Firefox/Safari) 지원

⸻

2) 정보 구조 (IA)
	•	헤더(로고·내비)
	•	Hero(핵심 한 줄 소개 + CTA)
	•	About(프로필·요약 경력)
	•	Skills(핵심 기술 스택)
	•	Projects(대표 3~6개, 카드형)
	•	Experience(연대기/하이라이트)
	•	Testimonials(선택)
	•	Contact(폼 + 소셜 링크)
	•	푸터(저작권·정책)

⸻

3) 공통 UI/UX 요구
	•	헤더: 스크롤시 축소 고정(Sticky), 현재 섹션 하이라이트
	•	내비: 섹션 앵커 스크롤(부드러운 스크롤, 오프셋 보정)
	•	다크모드: 시스템 설정 자동 감지 + 토글 저장(LocalStorage)
	•	애니메이션: 섹션 인뷰 페이드/슬라이드(저가속, 200–400ms)
	•	키보드 접근성: Tab 순서/포커스 표시, Skip to content 제공
	•	언어: 기본 KO, EN 토글(선택·확장 가능)

⸻

4) 섹션별 기능 요구

4.1 Header
	•	로고 클릭 시 Hero로 이동
	•	내비 항목: About / Skills / Projects / Experience / Contact
	•	모바일: 햄버거 버튼 → 오버레이 메뉴(ESC 닫힘, 외부 클릭 닫힘)

4.2 Hero
	•	이름, 역할(예: “웹기획자 · UX 전략”), 1–2줄 가치제안
	•	주 CTA: “이력서 다운로드(PDF)” / 보조 CTA: “연락하기”
	•	배경: 간결한 그래픽 또는 그라데이션(성능 저하 금지)

4.3 About
	•	프로필 이미지(웹P 제공, 둥근 마스크)
	•	3–5줄 자기소개, 핵심 성과 3개(숫자 기반 KPI 권장)
	•	기본 정보: 근무형태/지역/이메일(클릭·복사 버튼)

4.4 Skills
	•	카테고리 탭(기획/UX/분석/툴 등)
	•	각 스킬: 아이콘 + 숙련도(텍스트 레벨: Expert/Advanced/Working)
	•	필터: “핵심만 보기” 토글(Featured)

4.5 Projects
	•	카드형(썸네일, 제목, 1줄 설명, 태그, 역할, 성과 KPI)
	•	상세 모달: 문제–접근–결과(3단 요약), 링크(데모/깃허브/보도자료)
	•	태그 필터(다중 선택), 페이지 내 검색(제목/태그)

4.6 Experience
	•	타임라인(회사/역할/기간)
	•	핵심 성과 불릿 3–5개(측정 가능한 지표)
	•	“전체 보기” 토글(요약/자세히 전환)

4.7 Testimonials (선택)
	•	슬라이더(드래그/스와이프), 인용·이름·직책·회사 로고

4.8 Contact
	•	입력: 이름*, 이메일*, 메시지*(500자), 첨부(선택, 10MB↓, 타입 제한)
	•	전송: API(서버리스 함수) 또는 메일 서비스 연동(SendGrid 등)
	•	검증: 클라이언트+서버, 스팸 방지(hCaptcha/타임허니팟)
	•	성공/실패 토스트 메시지, 중복 전송 방지(로딩/비활성)

4.9 Footer
	•	소셜 링크(LinkedIn/GitHub/Behance 등, 새탭, rel 속성)
	•	저작권, 개인정보/쿠키 안내(간략)

⸻

5) 데이터/콘텐츠 관리
	•	콘텐츠 소스: /content/*.json 또는 CMS(API 기반, 예: Contentful/Notion API)
	•	필수 스키마 예시
	•	Project: id, title, subtitle, tags[], role, period, kpis[], cover(src,alt), links{demo,repo,press}, featured(bool), detail{problem,approach,outcome}
	•	Experience: company, role, start, end|null, highlights[]
	•	Skill: category, name, level, featured(bool), icon
	•	다국어: i18n JSON 분리(ko, en)

⸻

6) 비기능 요구
	•	성능: LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms (모바일 4G 기준)
	•	이미지: 차세대 포맷(webp/avif), <img loading="lazy">, srcset/sizes
	•	SEO: 메타태그, 정적 타이틀 전략, JSON‑LD(Portfolio/Person/Project)
	•	OG/Twitter: 제목/설명/대표 이미지
	•	접근성: WCAG 2.1 AA, 명도 대비 4.5:1, 대체텍스트, ARIA 레이블
	•	보안: HTTPS 강제, 헤더( CSP, HSTS, XFO deny, X-Content-Type-Options )
	•	개인정보: 폼 전송시 최소 수집, 보관기간·목적 고지

⸻

7) 상호작용 & 이벤트 로깅
	•	CTA 클릭: hero_cta_resume / hero_cta_contact
	•	프로젝트 카드: project_open(project_id), project_filter(tag)
	•	언어·테마 토글: lang_change(to), theme_change(to)
	•	폼: contact_submit/success/fail
	•	수집 도구: Plausible/GA4(익명 IP), 옵트아웃 링크 제공

⸻

8) 반응형 규격
	•	모바일(≤640px): 1열 카드, 축약 텍스트, 상단 고정 콜투액션 버튼 숨김 없음
	•	태블릿(641–1024px): 2열 카드, 좌우 패딩 확대
	•	데스크톱(≥1025px): 12컬럼 그리드, 3열 카드
	•	터치영역 ≥ 44px, 폰트 최소 16px

⸻

9) 폼/이메일 연동
	•	API: POST /api/contact
	•	Request: { name, email, message, attachment(optional) }
	•	응답: { ok: true } 또는 에러 코드
	•	서버 검증: 레이트리밋, 파일 MIME/크기 검사, 스팸 토큰 검증
	•	알림: 운영자 이메일 전송 + 백업(스프레드시트/DB 선택)

⸻

10) SEO/스키마(핵심)
	•	페이지 타이틀: {이름} – 웹기획 포트폴리오
	•	메타 설명: 120–160자 요약(핵심 성과 포함)
	•	JSON‑LD
	•	Person: name, jobTitle, url, sameAs[]
	•	CreativeWork(Projects): headline, datePublished, author
	•	사이트맵, robots.txt, Canonical

⸻

11) 접근성 체크리스트(요구 기준)
	•	키보드만으로 모든 기능 사용 가능
	•	포커스 트랩/순환 금지, 모달 ARIA 속성
	•	이미지 대체텍스트, 아이콘은 aria-hidden
	•	폼 오류: 필드별 구체 메시지 + ARIA live

⸻

12) 설정/구성(개발 가이드)
	•	아이콘: SVG 스프라이트(필요시)
	•	폰트: 시스템 폰트 우선, 웹폰트는 지연 로드
	•	색상 토큰: --color-fg, --color-bg, --color-accent
	•	다크모드 토큰 세트 별도 제공

⸻

13) 배포/운영
	•	정적 호스팅(Vercel/Netlify) + Edge 캐시
	•	이미지 최적화 파이프라인(빌드 시 변환)
	•	모니터링: Uptime 체크, 오류 로깅(Sentry 등)
	•	버전: 태그 릴리스, 체인지로그 유지

⸻

14) 수용 기준(AC)
	•	Core Web Vitals 목표 충족(Lighthouse 90+)
	•	i18n: KO 기본, EN 전환 정상, URL 또는 로컬 스토리지 반영
	•	모든 내비 앵커 정확한 섹션 오프셋 스크롤
	•	프로젝트 필터/검색 동작 및 조합 필터 지원
	•	연락 폼 서버·클라 검증, 스팸 방지, 성공/실패 토스트
	•	다크/라이트 토글 퍼시스턴스
	•	스키마(JSON‑LD) 검증 통과, OG 미리보기 정상
	•	키보드 접근·스크린리더 기본 시나리오 통과

⸻

15) 준비물(콘텐츠 인계)
	•	프로필 사진 1장(정사각·WebP)
	•	이력서 PDF(최신)
	•	프로젝트 썸네일(1200×630, WebP/PNG)
	•	소개 문구·성과 KPI(숫자 포함)
	•	소셜/레퍼런스 링크 목록

⸻

16) 향후 확장(선택)
	•	블로그 섹션(최신 3건 프리뷰)
	•	RSS/이메일 구독
	•	프로젝트 비교 보기, 케이스 스터디 상세 페이지 분리
