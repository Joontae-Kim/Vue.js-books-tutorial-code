## Chapter 3. Directive
### 디렉티브란
라이브러리에서 DOM 엘리먼트가 무언가를 수행하도록 지시하는 특수한 토큰

<br>

### 몇 가지 디렉티브
- v-show: 조건에 따라 엘리먼트를 화면에 표시
  ```
  <h1 v-show="ok">안녕하세요!</h1>
  ```
  차이점은 `v-show`가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. `v-show`는 단순히 엘리먼트에 `display` CSS 속성을 토글합니다.
- v-if: `v-show` 대신 사용할 수 있음
- v-else: `v-if`의 평가 결과가 거짓이면 엘리먼트를 표시

<br>

### Official Site에서 소개한 추가 디렉티브
- v-else-if: `v-if`에 대한 `else if` 블록 역할을 합니다. 또한 여러 개를 사용할 수 있습니다.
  > 2.1.0부터 새롭게 추가됨

  ```
  <div v-if="type === 'A'">
    A
  </div>
  <div v-else-if="type === 'B'">
    B
  </div>
  <div v-else-if="type === 'C'">
    C
  </div>
  <div v-else>
    Not A/B/C
  </div>
  ```
  `v-else`와 마찬가지로, `v-else-if` 엘리먼트는 `v-if` 또는 `v-else-if` 엘리먼트 바로 뒤에 와야 합니다.

<br>

### Official Site에서 연급한 `v-if` vs `v-show`
- `v-if`는 조건부 블럭 안의 이벤트 리스너와 자식 컴포넌트가 토글하는 동안 적절하게 제거되고 다시 만들어지기 때문에 “진짜” 조건부 렌더링 입니다

- `v-if`는 또한 게으릅니다 초기 렌더링에서 조건이 거짓인 경우 아무것도 하지 않습니다. 조건 블록이 처음으로 참이 될 때 까지 렌더링 되지 않습니다.

- 비교해보면, `v-show`는 훨씬 단순합니다. `CSS` 기반 토글만으로 초기 조건에 관계 없이 엘리먼트가 항상 렌더링 됩니다.

- 일반적으로 `v-if`는 토글 비용이 높고 `v-show`는 초기 렌더링 비용이 더 높습니다. 매우 자주 바꾸기를 원한다면 `v-show`를, 런타임 시 조건이 바뀌지 않으면 `v-if`를 권장합니다.

### Official Site에서 연급한 `v-if` 와 `v-for`
- `v-if`와 함께 사용하는 경우, `v-for`는 `v-if`보다 높은 우선순위를 갖습니다.
- 추가설명 첨부: [리스트 렌더링 가이드](https://kr.vuejs.org/v2/guide/list.html#v-for-%EC%99%80-v-if)
