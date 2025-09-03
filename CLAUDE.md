# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소의 코드를 작업할 때 참고하는 가이드라인을 제공합니다.

## 🌏 커뮤니케이션 언어 규칙

**핵심 원칙: 한국어로 커뮤니케이션하고 한국어로 작성**

### 📝 작성 언어
- **모든 문서**: 한국어로 작성 (README, 주석, 문서화 등)
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **변수명/함수명**: 영어 사용 (코드 표준)

### 💬 커뮤니케이션 언어
- **사용자와의 대화**: 한국어 사용
- **에러 메시지 설명**: 한국어로 설명
- **진행 상황 보고**: 한국어로 보고
- **기술적 설명**: 한국어로 설명

### 📋 예외사항
- **코드 자체**: 영어 변수명/함수명 유지
- **라이브러리/프레임워크**: 원본 영어 이름 사용
- **기술 용어**: 필요시 한국어(영어) 병기

```tsx
// ✅ 올바른 방식
function getUserData() {  // 함수명은 영어
  // 사용자 데이터를 가져오는 함수 (주석은 한국어)
  return userData;
}

// ❌ 잘못된 방식  
function getUserData() {
  // Function to get user data (주석을 영어로)
  return userData;
}
```

## 저장소 개요

Figma Code Connect 통합이 포함된 Figma 디자인 시스템 모노레포입니다.

### 🏗️ 프로젝트 구조
```
code-connect-sds/
├── CLAUDE.md           # 📋 프로젝트 가이드라인
├── package.json        # 🔧 모노레포 워크스페이스 설정
└── sds/               # 🎨 SDS 메인 패키지
    ├── src/           # 📦 원본 컴포넌트 (수정 금지)
    ├── workspace/     # ⚡ 개발 작업 영역
    │   ├── pages/     # 📄 페이지 구현
    │   ├── main.tsx   # 🚀 앱 진입점  
    │   ├── styles.css # 🎨 페이지별 스타일
    │   └── index.html # 📝 HTML 템플릿
    ├── scripts/       # 🤖 자동화 스크립트
    └── vite.*.config.ts # ⚙️ 빌드 설정
```

## ⚡ 개발 환경

### 🚀 빠른 시작
React 18.3.1 통일 환경에서 SDS 컴포넌트를 완전히 활용할 수 있습니다.

```bash
# 루트에서 바로 개발 서버 실행 (권장)
npm run dev                    # → http://localhost:5555

# 다른 명령어들
npm run build                  # SDS 라이브러리 빌드
npm run storybook              # 스토리북 실행
```

### 📁 SDS 세부 구조
```
sds/src/                       # 🚫 수정 금지 영역
├── ui/primitives/             # Button, Input, Text 등
├── ui/compositions/           # Cards, Forms, Headers 등
├── ui/layout/                # Section, Flex, Grid
├── ui/icons/                 # Figma 생성 아이콘
├── data/                     # Context Providers
└── figma/                    # Code Connect 매핑

sds/workspace/                 # ✅ 작업 영역
├── pages/                    # 페이지 구현
│   ├── HomePage/
│   ├── Pricing/
│   └── ProductDetail/
├── styles.css                # 페이지 레이아웃 스타일
├── main.tsx                  # React 앱 진입점
└── index.html                # HTML 템플릿
```

### 컴포넌트 Import 방식
```tsx
// Alias 사용 (권장)
import { Button } from "primitives/Button/Button";
import { Section } from "layout/Section/Section";
import { Flex, FlexItem } from "layout/Flex/Flex";
import { usePricing } from "data";
import { useMediaQuery } from "hooks";
```

## 🎯 Figma 디자인 구현 룰셋

### 1. **디자인 분석 우선순위**
```
1. Figma MCP로 실제 콘텐츠 추출 (텍스트, 이미지, URL)
2. 전체 레이아웃 구조 파악 (Grid? Flex? 몇 개 열?)
3. 각 섹션별 max-width와 정렬 방식
4. 컴포넌트 간 간격과 크기 비율
5. 반응형 동작 방식
```

### 2. **구현 접근법**
- **컴포넌트**: SDS 컴포넌트는 완성되어 있음, 수정 금지
- **페이지 레벨**: 컴포넌트 배치, 레이아웃, 간격에 집중
- **스타일**: `workspace/styles.css`에 페이지별 스타일 추가

### 3. **CSS 우선순위**
```css
/* 1순위: 페이지 레이아웃 */
.page-container { /* 전체 구조 */ }
.section-grid { /* 섹션별 배치 */ }

/* 2순위: 컴포넌트 배치 */
.cards-grid { /* 컴포넌트들의 그리드 */ }
.component-wrapper { /* 개별 래퍼 */ }

/* 3순위: 컴포넌트 커스터마이징 */
.cards-grid .button { width: 100%; }
```

### 4. **데이터 정확성 (중요!)**
**Figma 디자인의 실제 텍스트를 정확히 그대로 사용하세요.**

```tsx
// ❌ 잘못된 방식 - 임의로 변경한 텍스트
// Figma에 "Title"이라고 되어 있는데 임의로 바꾼 경우
<h1>Choose your plan</h1>
<Button>Get started</Button>

// ✅ 올바른 방식 - Figma와 정확히 동일
// Figma에 실제로 "Title", "Subtitle"이라고 되어 있다면 그대로 사용
<h1>Title</h1>
<p>Subtitle</p>
<Button>Button</Button>

// ✅ 또는 Figma에 실제 콘텐츠가 있다면 그것을 사용  
<h1>Choose your plan</h1>
<p>Find the perfect plan for your team's needs</p>
<Button>Get started today</Button>
```

**핵심**: Figma MCP로 확인한 실제 텍스트와 100% 일치시키기

### 5. **구현 체크리스트**
- [ ] Figma MCP로 실제 텍스트/이미지 추출했는가?
- [ ] 전체 페이지 max-width 설정했는가?
- [ ] 컴포넌트들이 적절한 그리드로 배치되었는가?
- [ ] 버튼이 컨테이너에 맞춰 늘어나는가?
- [ ] 모바일 반응형 동작하는가?
- [ ] 섹션 간 spacing이 올바른가?

## 🚫 금지사항

- ❌ SDS 컴포넌트 내부 로직 수정
- ❌ src/ 폴더 내 파일 수정
- ❌ 컴포넌트 파일에 CSS 직접 추가
- ❌ Figma 디자인과 다른 텍스트 사용 (임의 변경 금지)
- ❌ Figma MCP 확인 없이 추측으로 텍스트 작성

## 🔴 중요: Import 에러 방지 규칙

### ⚠️ 필수 체크리스트 (코드 작성 전 반드시 확인)
**모든 코드 작성 시 이 체크리스트를 먼저 확인하고 시작하세요**

1. **Import 확인** - 사용하는 모든 컴포넌트가 import 되었는가?
2. **개발 서버 상태** - 페이지가 제대로 렌더링되는가?
3. **콘솔 에러** - ReferenceError나 다른 에러가 없는가?

### 🚨 자주 발생하는 Import 실수들
```tsx
// ❌ 자주 하는 실수 - 컴포넌트 사용했지만 import 안함
export function Page() {
  return (
    <div>
      <Accordion>  {/* ← ReferenceError 발생! */}
        <AccordionItem title="Title">  {/* ← ReferenceError 발생! */}
          <Text>Content</Text>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// ✅ 올바른 방식 - 사용하는 모든 컴포넌트 import
import { Accordion, AccordionItem } from "primitives";
import { Text } from "primitives";

export function Page() {
  return (
    <div>
      <Accordion>
        <AccordionItem title="Title">
          <Text>Content</Text>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

### 📋 SDS 컴포넌트 Import 가이드
**사용 빈도가 높은 컴포넌트들 - 자주 빼먹는 것들**

```tsx
// Layout 컴포넌트들
import { Section, Flex, FlexItem } from "layout";

// Text 관련 컴포넌트들
import { TextHeading, Text, TextStrong } from "primitives";

// 상호작용 컴포넌트들 (자주 빼먹음!)
import { Button, IconButton } from "primitives";
import { Navigation, NavigationPill } from "primitives";
import { Accordion, AccordionItem } from "primitives";  // ← 특히 자주 빼먹음
import { TextLink, TextLinkList, TextListItem } from "primitives";

// Form 컴포넌트들
import { Input, Select } from "primitives";

// 복합 컴포넌트들
import { PricingCard, pricingPlanToPricingCardProps } from "compositions";
import { Header, Footer } from "compositions";

// Data & Hooks
import { usePricing } from "data";
import { useMediaQuery } from "hooks";
```

### 🔧 에러 발생 시 즉시 해결 방법
1. **콘솔 에러 확인**: `ReferenceError: [ComponentName] is not defined`
2. **Import 추가**: 해당 컴포넌트를 primitives나 적절한 경로에서 import
3. **페이지 새로고침**: Vite HMR로 자동 업데이트 확인
4. **브라우저 콘솔**: 추가 에러가 없는지 재확인

## 🔴 중요: Figma MCP 연결 우선 원칙

**핵심 룰: Figma MCP 연결 실패 시 작업 중단**

### ⛔ 절대 금지사항
- **Figma MCP 연결 실패 → 추측으로 구현 진행** ❌
- **Mock 데이터 사용 → 디자인 불일치 발생** ❌
- **로그인 문제 무시하고 일반적인 패턴으로 구현** ❌

### ✅ 올바른 접근 방식
1. **Figma MCP 연결 확인** → 로그인 상태와 페이지 접근 가능 여부 확인
2. **연결 실패 시 작업 중단** → 연결 문제 해결까지 구현 작업 진행 금지
3. **정확한 데이터 추출** → MCP를 통해 실제 디자인 텍스트, 가격, 레이아웃 정보 확보
4. **데이터 기반 구현** → 추출된 정확한 데이터만 사용하여 구현
5. **단계별 검증** → 각 단계에서 MCP 데이터와 실제 결과물 비교

### 🚨 작업 중단 시점
- Figma 페이지 로그인 화면 표시
- MCP 도구에서 404 또는 접근 권한 오류
- 디자인 데이터를 정확히 읽을 수 없는 상황
- 실제 콘텐츠 대신 플레이스홀더만 보이는 경우

**원칙**: 정확한 디자인 데이터 없이는 구현하지 않는다

## 🚀 개발 서버 실행 규칙

### 🔥 **Claude 경고!** - 가장 자주 하는 실수
**⚠️ 절대 금지**: Claude가 sds 폴더나 workspace 폴더에서 개발 서버 실행하는 실수  
**🔴 고질적 문제**: 매 세션마다 잘못된 경로에서 빌드 시도 → 실패 → 사용자 지적 → 수정하는 패턴 반복

```bash  
# 🚨 Claude가 매번 하려고 하는 실수들 (절대 금지!)
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds
npm run workspace:dev  # ❌ 이렇게 직접 실행하면 실패!

cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds/workspace
vite --config ../vite.workspace.config.ts  # ❌ vite 명령어 없음!

# ✅ 유일한 정답 (npm workspace 설정 이용!)
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds
npm run dev  # → 내부적으로 sds/workspace에서 빌드됨
```

### ⚠️ 중요: 올바른 경로에서 실행해야 함
**문제**: 잘못된 경로에서 실행하면 "사이트에 연결할 수 없음" 오류 발생

### ✅ 유일한 올바른 실행 방법

**🚀 Pricing 페이지 개발 서버:**
```bash
# 방법 1: 루트에서 npm 스크립트 실행 (권장)
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds
npm run dev
# → 내부적으로 workspace 폴더에서 빌드됨
# → http://localhost:5555 에서 Pricing 페이지 확인 가능

# 방법 2: workspace 폴더에서 직접 실행
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds/workspace
npx vite --config ../vite.workspace.config.ts
# → http://localhost:5173 에서 확인 (기본 vite 포트)
```

**🏗️ SDS 라이브러리 빌드:**
```bash
# 라이브러리 빌드시에만 사용
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds
npm run build
```

### ❌ 절대 사용하면 안되는 명령어들
```bash
# 이런 명령어들은 모두 오류 발생
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds
npm run workspace:dev  # ❌ 경로 오류

cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds/workspace
vite --config ../vite.workspace.config.ts  # ❌ vite 명령어 없음

cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds
npm run app:dev  # ❌ 다른 서버 (우리가 원하는게 아님)
```

### 🔧 개발 서버 문제 해결 워크플로우

**1단계: 서버 실행 상태 확인**
```bash
# 프로세스 확인
ps aux | grep "vite\|npm" | grep -v grep

# 포트 확인  
lsof -ti:5555
```

**2단계: 서버가 죽어있다면 재실행**
```bash
# 반드시 루트에서 실행
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds
npm run dev
```

**3단계: 페이지 렌더링 확인**
```bash
# 페이지 응답 테스트
curl -I http://localhost:5555

# Playwright로 실제 페이지 확인 (추천)
# 브라우저에서 콘솔 에러 체크
```

**4단계: Import 에러 발생 시**
- 콘솔에서 `ReferenceError` 확인
- 해당 컴포넌트 import 추가
- 페이지 자동 새로고침 확인

### 🚨 실제 발생했던 빌드 오류 사례

#### Case 0: **가장 빈번한 실수** - 잘못된 폴더에서 빌드 실행
**증상**: 개발 서버 실행 후 "사이트에 연결할 수 없음" 오류 반복 발생
**원인**: Claude가 계속 잘못된 경로에서 `npm run dev` 실행
**빈도**: **매번 발생하는 고질적 문제!**

```bash
# ❌ Claude가 자주 하는 실수 (절대 금지!)
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds
npm run workspace:dev  # ← 이렇게 하면 항상 실패!

# ❌ 또 다른 실수 패턴
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds/sds/workspace  
vite --config ../vite.workspace.config.ts  # ← vite 명령어 없어서 실패!
```

**✅ 유일한 올바른 방법:**
```bash
# 반드시 루트 폴더에서만 실행!
cd /Users/jh.seok/석주희/개발/오늘의집/Joohee/code-connect-sds
npm run dev
```

**교훈**:
- 🔴 **npm workspace 설정을 무시하면 실패** - 직접 실행하면 환경 설정이 안됨
- 🔴 **Claude의 고질적 실수** - sds 폴더에서 `npm run workspace:dev` 직접 실행 시도
- ✅ **무조건 루트에서 npm run dev!** - 내부적으로는 sds/workspace에서 빌드되지만 루트에서 시작
- ✅ **npm workspace 위임 방식** - 루트 → sds → workspace 순서로 위임되는 구조

**실제 발생 패턴 분석:**
1. Claude가 `sds/` 폴더에서 `npm run workspace:dev` 실행 → 실패
2. 사용자가 "안된다" 피드백 → Claude가 다시 같은 실수 반복  
3. 사용자가 "경로 문제"라고 지적 → 그제서야 루트 폴더로 이동
4. **이 패턴이 계속 반복됨!**

#### Case 1: "아무것도 안뜬다" - ReferenceError 발생
**증상**: 페이지가 완전히 비어보임, 흰 화면만 표시
**원인**: 사용한 컴포넌트를 import하지 않음
**해결**: 즉시 Playwright나 브라우저 콘솔로 에러 확인

```bash
# 실제 발생했던 에러 메시지
ReferenceError: Accordion is not defined
    at Pricing (http://localhost:5555/pages/Pricing/Pricing...
```

**교훈**: 
- ✅ 페이지가 안보이면 무조건 콘솔 에러부터 확인
- ✅ Playwright의 console messages로 실시간 에러 모니터링
- ❌ "안되네요" 하고 추측하지 말고 구체적 에러 확인

#### Case 2: 개발 서버 "사이트에 연결할 수 없음"
**증상**: localhost:5555 접속 불가
**원인**: 개발 서버가 실제로 실행되지 않음 (프로세스 죽음)
**해결**: 프로세스 상태 확인 후 재실행

```bash
# 문제 확인 방법
curl -I http://localhost:5555
# → curl: (7) Failed to connect to localhost port 5555

# 해결 방법  
ps aux | grep "vite\|npm" | grep -v grep  # 프로세스 없음 확인
npm run dev  # 재실행
```

**교훈**:
- ✅ 연결 안되면 서버 프로세스부터 확인
- ✅ curl로 빠르게 포트 상태 테스트
- ❌ 브라우저만 새로고침하지 말고 서버 상태 확인

#### Case 3: 개발 서버는 실행되는데 페이지 로딩 실패
**증상**: 서버는 실행 중이지만 페이지 렌더링 안됨
**원인**: JavaScript 런타임 에러로 인한 컴포넌트 렌더링 실패
**해결**: Playwright console messages 확인

```typescript
// 실제 에러가 발생했던 코드
<div className="faq-section">
  <Accordion>  {/* ← import 안됨! */}
    <AccordionItem title="Title">  {/* ← import 안됨! */}
      <Text>Content</Text>
    </AccordionItem>
  </Accordion>
</div>

// 수정된 코드 (import 추가)
import { Accordion, AccordionItem } from "primitives";
```

**교훈**:
- ✅ 서버 실행 != 페이지 렌더링 성공
- ✅ 브라우저 콘솔이나 Playwright로 JS 에러 반드시 확인
- ❌ 서버만 돌아가면 끝이라고 생각하지 말기

### 📋 에러 디버깅 체크리스트
**페이지가 안보일 때 순서대로 체크:**

1. ☐ 개발 서버 프로세스 살아있나? → `ps aux | grep vite`
2. ☐ 포트 5555 응답하나? → `curl -I http://localhost:5555`
3. ☐ JavaScript 에러 있나? → Playwright console messages 확인
4. ☐ Import 빠뜨린 컴포넌트 있나? → ReferenceError 체크
5. ☐ 수정 후 자동 새로고침 됐나? → HMR 작동 확인

### ❌ 잘못된 실행 방법
```bash
# sds 폴더에서 실행하면 경로 문제 발생
cd sds
npm run workspace:dev  # 경로 문제로 연결 거부
```

### 🔍 서버 상태 확인
```bash
# 포트 확인
lsof -i :5555

# Vite 프로세스 확인  
ps aux | grep vite

# 브라우저 접속
http://localhost:5555
```

### 🐛 트러블슈팅
- **"사이트에 연결할 수 없음"**: 개발 서버가 올바른 경로에서 실행되지 않음
- **포트 충돌**: 5555 포트가 이미 사용 중인 경우 프로세스 종료 후 재시작
- **빌드 오류**: node_modules 삭제 후 npm install 재실행

**핵심**: workspace 폴더가 빌드의 기준점이므로 경로 설정이 중요함

## 🔧 주요 도구

### 🎨 Figma 통합 도구 (모두 공식)
- **Figma Dev Mode MCP**: Claude에서 디자인 데이터 실시간 추출 ([공식 가이드](https://github.com/figma/dev-mode-mcp-server-guide))
- **Figma REST API**: 파일/노드 정보 및 에셋 가져오기 ([API 문서](https://www.figma.com/developers/api))
- **Code Connect**: 디자인 컴포넌트↔코드 컴포넌트 매핑 ([Code Connect 문서](https://www.figma.com/developers/code-connect))

### 🛠️ 개발 도구
```bash
# 🚀 개발 (루트에서)
npm run dev              # workspace 개발 서버 (권장)
npm run build            # SDS 라이브러리 빌드
npm run storybook        # 컴포넌트 스토리북

# 🔧 SDS 폴더에서 (필요시)
cd sds
npm run workspace:dev    # workspace 개발 서버
npm run app:dev         # SDS 앱 개발 서버  
npm run build:lib       # 라이브러리만 빌드
npm run app:lint        # ESLint 실행
```

## 예제: Pricing 페이지 구현

```tsx
// workspace/pages/Pricing/Pricing.tsx
import React, { useState } from 'react';
import { Section } from "layout/Section/Section";
import { PricingCard } from "compositions/Cards/Cards";
// ... 기타 imports

export function Pricing() {
  return (
    <div className="pricing-page">
      {/* Figma 실제 텍스트 사용 */}
      <Hero variant="subtle">
        <TextHeading>Choose your plan</TextHeading>
        <Text>Find the perfect plan for your team</Text>
      </Hero>

      {/* Grid 레이아웃으로 카드 배치 */}
      <div className="pricing-cards-grid">
        {plans.map((plan, index) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </div>
  );
}
```

```css
/* workspace/styles.css */
.pricing-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--sds-size-space-600);
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-cards-grid .button {
  width: 100%;
}
```

## 환경 변수

Figma API 사용을 위한 설정:
```bash
FIGMA_ACCESS_TOKEN=your_token_here
FIGMA_FILE_KEY=your_file_key_here
```

## 🚨 문제 해결

### 🎨 스타일이 적용되지 않는 경우
1. **페이지 레벨 스타일 확인**: `workspace/styles.css`에 레이아웃 스타일 추가
2. **Grid/Flexbox 활용**: 컴포넌트 배치는 CSS Grid나 Flexbox로 해결
3. **컴포넌트 수정 금지**: `src/` 폴더 컴포넌트는 절대 건드리지 말기

### 📦 컴포넌트 import 에러
1. **Alias 경로 사용**: `primitives/`, `layout/`, `compositions/` 경로 확인
2. **vite 설정 확인**: `vite.workspace.config.ts`의 alias 설정 점검
3. **상대 경로 금지**: `../../../src/` 대신 alias 사용

### 📝 텍스트/데이터 불일치
1. **Figma MCP 필수**: 추측 대신 실제 디자인 데이터 추출
2. **정확한 복사**: Figma의 모든 텍스트를 정확히 일치시키기
3. **임의 수정 금지**: "더 나은" 텍스트로 바꾸는 것 금지

### 🚀 개발 서버 문제
1. **포트 충돌**: 5555 포트가 사용 중이면 자동으로 다른 포트 사용
2. **루트에서 실행**: `npm run dev` 명령어를 프로젝트 루트에서 실행
3. **의존성 설치**: 문제시 `npm install` 재실행

---

**핵심**: SDS 컴포넌트는 완성품이므로 수정하지 말고, 페이지 레벨에서 레이아웃과 스타일링에 집중하며, Figma의 실제 데이터를 정확히 사용하기