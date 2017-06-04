import Vue from 'vue';
import VueRouter from 'vue-router';

// 引入router-config.js文件
import routeConfig from './router-config';

import App from './App.vue';

//加载路由中间件
Vue.use(VueRouter)
//定义路由
var router = new VueRouter({
    routes: routeConfig
})
new Vue({
    el: '#app',
    render: function(h) {
        return h(App)
    },
    router,
})