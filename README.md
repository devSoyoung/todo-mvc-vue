## TODO MVC with Vue.js

일하게 될 팀에서 Vue.js를 사용하고 있는데, 한 번도 써본 적이 없어서 주말에 간단하게 워밍업 느낌으로 todomvc의 예제를 클론 코딩 해보기로 했다. 공식 Document를 읽고 공부하는 것도 좋지만 최근에 기말고사 공부하면서 너무 수학공부만 했더니 아무 코드라도 쓰고 싶다. 백견이 불여일타!

[todomvc](https://github.com/tastejs/todomvc/tree/master/examples/vue)의 vue example을 참고해서 따라했고, 코드는 ES6 기준으로 작성했다. `var` 공포증이 있어서;;

## Vue.js 라이프사이클 다이어그램
![라이프사이클 다이어그램](https://kr.vuejs.org/images/lifecycle.png)

* `beforeCreate`
* `created`
* `beforeMount`
* `mounted`
    * `beforeUpdate`
    * `updated`
* `beforeDestroy`
* `destroyed`

## 참고하면 좋은 내용
### Watch API
* 중첩 데이터 감시 : https://ui.toast.com/weekly-pick/ko_20190307/
* `watch`와 `computed`는 유사하지만, 구분해서 사용할 필요가 있음
    * `watch` : 부수효과 처리를 위한 것
    * `computed` : 상태 변경을 위한 것

### Directive: 디렉티브
* 디렉티브에 대한 기초 설명 : https://velopert.com/3044
* Vue의 기능을 사용하기 위해 HTML 태그에 들어가는 속성으로 `v-*`의 형태
* 사용자 지정 디렉티브 : https://kr.vuejs.org/v2/guide/custom-directive.html

## 느낀 점
* `watch`나 `computed` 같이 상태(데이터)가 변경될 때 실행하기 위해서 등록하는 친구가 어떤건 Object고 어떤건 Function이라는게 아직 직관적이지 않고 무지 불편하게 느껴진다.
* React랑 계속 비교하게 되는데 리액트는 컴포넌트 하나가 함수이다보니 코드를 배치하는게 자유롭지만 일관성을 유지하기가 어려운데 여기는 옵션 객체에 프로퍼티로 붙이니까 명시적으로 관리할 수 있는 느낌을 받아서 그 부분은 좋은 것 같다.
* React에 Hooks이 등장하면서 라이프 사이클이 훨씬 간략해졌다고 개인적으로 느끼고 있는데, 뷰는 일단 라이프사이클이 React의 클래스 컴포넌트처럼 많이 구분되어 있다. 이게 처음엔 불편할 수도 있는데 자세하게 나뉘어져 있으면 각 라이프사이클에서 맡는 역할이 보다 명확해진다고 느껴서 좋다고 생각한다.
* HTML에서 태그에다가 조건을 집어넣는게 어떤 점에서는 편리해서 좋은데, 또 다른 부분(JS 코드랑 분리되어 있는 점)에서는 불-편.. 
* Vue 도큐먼트가 잘 되어있다고 들었는데, 설명은 일단 엄청 디테일하고 많은데 문장이 잘 흡수가 안된다. 독해력이 떨어진건가.. 책을 읽자..
* Ref로 가져와야하는 리액트랑 다르게 DOM에 접근하기가 훨씬 쉽다. 사용자가 정의한 디렉티브를 이용해서 포커스 같은 기능을 수행하는 부분이 마음에 들었다.
* React는 `setState` 등 제공된 메서드로만 상태를 변경할 수 있는데, Vue는 data로 등록한 애를 맘대로 변경할 수 있다. 이 부분은 더 편하다.
* 이 예제로는 궁금한 개념 몇 가지 찾아보고 익히는 수준밖에 안돼서 다른거를 좀 만들어봐야겠다.

공부 좀 더 하고나서 이 레포를 보면 이불킥을 할지도 모르지만.. 오랜만에 선형대수 아닌걸 공부해서 즐거웠다.
