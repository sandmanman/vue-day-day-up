import Vue from 'vue'
import Router from 'vue-router'

//import Hello from '@/components/Hello'
import githubCommits from '@/pages/github-commits/github-commits';
import treeView from '@/pages/tree-view/tree-view';
import starRating from '@/pages/star-rating/star-rating';
import button from '@/pages/button/button';
import navBar from '@/pages/nav-bar/nav-bar';
import EventsBulletinBoard from '@/pages/events-bulletin-board/events-bulletin-board';


Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'Hello',
        //     component: Hello
        // },
        {
            path: '/githubCommits',
            component: githubCommits,
        }, {
            path: '/treeView',
            component: treeView,
        }, {
            path: '/starRating',
            component: starRating,
        }, {
            path: '/button',
            component: button,
        }, {
            path: '/navBar',
            component: navBar,
        }, {
            path: '/EventsBulletinBoard',
            component: EventsBulletinBoard,
        }
    ]
})