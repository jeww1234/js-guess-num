# TIL - 2025-06-30

## 📌 JavaScript
- `Math.random()`과 `Math.floor()`를 사용해서 1~100까지의 랜덤 숫자 생성
- DOM 요소 접근: `getElementById()`
- 입력값 유효성 검사 함수 `inputUnum(value)`를 통해 숫자 범위 체크
- `if (!inputUnum(uvalue)) return;` 을 활용한 잘못된 입력 방지 흐름 제어
- `gameOver` 상태 변수로 게임 종료 여부 처리
- `reset()` 함수로 초기화: `chances`, `gameOver`, `resultArea`, `컴퓨터 숫자`
- `addEventListener()`를 통해 버튼 이벤트 등록

## 🎨 CSS

### 🔹 position 속성
요소를 문서 흐름 속에서 어떻게 배치할지 결정함.

- **static**: 기본값. 일반적인 문서 흐름에 따라 배치됨.
- **relative**: 자기 자신의 원래 위치를 기준으로 이동 가능. 공간은 유지됨.
- **absolute**: 가장 가까운 *position이 지정된 조상*을 기준으로 위치. 문서 흐름에서 빠짐.
- **fixed**: 브라우저 창(화면)을 기준으로 위치. 스크롤해도 고정됨.
- **sticky**: 원래 위치에 있다가 스크롤 위치가 특정 지점에 도달하면 고정됨, 부모 영역을 넘어가면 사라짐

---

### 🔸 display: flex
요소들을 유연하게 정렬할 수 있는 레이아웃 방식.

- **flex-direction**: 아이템 나열 방향 (`row`, `column`, `row-reverse`, `column-reverse`)
- **justify-content**: 주 축 정렬 (`flex-start`, `center`, `space-between`, `space-around`, `space-evenly`)
- **align-items**: 교차 축 정렬 (`stretch`, `center`, `flex-start`, `flex-end`)
- **align-self**: 개별 아이템의 교차축 정렬 설정
- **align-content**: 줄 단위로 교차 축 정렬

---

### 🔹 가상 클래스 (Pseudo-classes)

스타일을 조건부로 적용하는 선택자

- **`:hover`**: 마우스를 올렸을 때
- **`:focus`**: 포커스가 잡혔을 때 (예: input 클릭)
- **`:active`**: 요소를 클릭하는 순간
- **`:nth-child(n)`**: 부모 안에서 n번째 자식 요소에 스타일 적용. (짝수, 홀수 등도 가능)

## 🧱 HTML
- **시멘틱 태그**: `header`, `main`, `section`, `article`, `footer` 등 의미 기반 구조화
- `block`, `inline`, `inline-block`의 차이점:
  - `block`: 한 줄 전체 차지 (`div`, `p`, `section` 등)
  - `inline`: 줄 안에서만 콘텐츠 크기만큼 (`span`, `a`, `strong` 등) width/height 불가능
  - `inline-block`: inline처럼 흐르면서 block처럼 width/height 가능