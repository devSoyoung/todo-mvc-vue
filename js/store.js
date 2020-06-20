(function (exports) {
    'use strict';

    const STORAGE_KEY = 'todos-vuejs';

    // window.todoStorage 에 todos 저장하고, localStorage 에 저장/가져오기 하는 것
    exports.todoStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        save: function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        },
    };
})(window);