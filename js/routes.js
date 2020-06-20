(function (app, Router) {
    'use strict';

    // director: 서드파티 라우터, 다른 라우터로는 Page.js가 있음
    // github repository: https://github.com/flatiron/director
    // 공식 라우터는 vue-router(https://github.com/vuejs/vue-router)
    const router = new Router();

    ['all', 'active', 'completed'].forEach(visibility => {
        router.on(visibility, () => {
            app.visibility = visibility;
        });
    });

    router.configure({
        notfound: function () {
            window.location.hash = '';
            app.visibility = 'all';
        }
    });

    router.init();
})(app, Router);