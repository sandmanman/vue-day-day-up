import Vue from 'vue';
import VueRouter from 'vue-router';

import routeConfig from './router-config'; // 引入router-config.js文件

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './app';

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
