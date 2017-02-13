/**
 * Router config
 */

import githubCommits from './pages/github-commits/github-commits.vue';

import todo from './pages/github-commits/github-commits.vue';

export default [{
    // 配置路由，当路径为'/githubCommits',使用组件githubCommits
    path: '/githubCommits',
    component: githubCommits,
}]
