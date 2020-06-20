/* global Vue, todoStorage */

// 아래 코드는 만든 모듈을 윈도우에 갖다 붙임
(function (exports) {
    'use strict';

    const filters = {
        all: function (todos) {
            return todos;
        },
        active: function (todos) {
            return todos.filter(todo => !todo.completed);
        },
        completed: function (todos) {
            return todos.filter(todo => todo.completed);
        },
    };

    // 새로운 Vue 인스턴스 생성 > Vue.js 앱의 시작
    // params: option 객체 (데이터, 템플릿 등: API reference 참고)
    exports.app = new Vue({
       // vue 인스턴스에 마운트 할 DOM 엘리먼트
       // 'vm.$el' 로 엑세스 할 수 있음
       el: '.todoapp',

       // 데이터가 변경되면 화면이 다시 렌더링 됨
       // 생성된 이후에 추가한 data 속성은 변경에 따른 렌더링 없음 (= 반응형이 아니다)
       data: {
           todos: todoStorage.fetch(),
           newTodo: '',
           editedTodo: null,
           visibility: 'all',
       },

       // 감시할 data가 변경되었을 때 실행해야 할 콜백 함수를 등록
       watch: {
           // todos가 변경되면 handler를 실행함
           todos: {
               deep: true,  // 중첩된 데이터(객체나 배열)를 watch 해야 함을 알려주는 옵션
               handler: todoStorage.save,
           },
       },

       // REF: https://kr.vuejs.org/v2/api/#computed
       computed: {
           // 화살표 함수는 this에 부모 컨텍스트를 바인딩하므로 사용 금지
           filteredTodos: function () {
                return filters[this.visibility](this.todos);
           },
           remaining: function () {
                return filters.active(this.todos).length;
           },
           allDone: {
                get: function () {
                    return this.remaining === 0;
                },
                set: function (value) {
                    this.todos.forEach(function (todo) {
                        todo.completed = value;
                    });
                },
           },
       },

       // 모든 methods는 자동으로 this에 Vue 인스턴스를 바인딩
       // => 메소드 호출(.function())을 하는 것 같으니 당연한 소리
       methods: {
            pluralize: function (word, count) {
                return word + (count === 1 ? '' : 's');
            },
            addTodo: function () {
                const value = this.newTodo && this.newTodo.trim();
                if (!value) {
                    return;
                }
                this.todos.push({
                    id: this.todos.length + 1,
                    title: value,
                    completed: false
                });
                this.newTodo = '';
            },
            removeTodo: function (todo) {
                const index = this.todos.indexOf(todo);
                this.todos.splice(index, 1);
            },
            editTodo: function (todo) {
                this.beforeEditCache = todo.title;
                this.editedTodo = todo;
            },
            doneEdit: function (todo) {
                if (!this.editedTodo) {
                    return;
                }
                this.editTodo = null;
                todo.title = todo.title.trim();     // 띄어쓰기 등 공백으로만 된 내용은 추가 안함
                if (!todo.title) {
                    this.removeTodo(todo);
                }
            },
            cancleEdit: function (todo) {
                this.editedTodo = null;
                todo.title = this.beforeEditCache;
            },
            removeCompleted: function () {
                this.todos = filters.active(this.todos);
            },
       },

       // 지시문 : 엘리먼트에게 어떻게 동작하라고 지시하는 것
       // v-* 의 형태를 가지고 있음
       directives: {
            'todo-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
       }
    });
})(window);