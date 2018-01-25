# The way to install Vue.js

## 1.1 독립 실행 버전

### 1.1.1 vuejs.org에서 다운로드
- `<script>` 태그에 포함
- `Vue`는 전역 변수로 등록됨
- Vue.js의 두 가지 버전을 다운로드 할 수 있음
  - 개발용 : https://vuejs.org/js/vue.js
  - 배포용 : https://vuejs.org/js/vue.min.js

### 1.1.1 CDN
- jsdelivr : https://cdn.jsdelivr.net/vue/2.1.10/vue.min.js
- cdnjs : https://cdnjs.cloudflare.com/ajax/libs/vue/2.1.10/vue.min.js

<br>

## 1.2 NPM
- 대규모 앱을 제작할 때 권장되는 설치 방법
- 최신 안정 버전 : `npm install vue`
- 최신 안정 버전 + CSP를 준수하는 버전 : `npm install vue@csp`
- 개발 빌드(깃허브에서 직접 설치함) : `npm install vuejs/vue#dev`

<br>

## 1.3 Bower 사용
- 최신 안정 버전 : `bower install vue`
