/**
 * Router config
 */

import githubCommits from './pages/github-commits/github-commits.vue';
import tableGrid from './pages/table-grid/table-grid.vue';
import treeView from './pages/tree-view/tree-view.vue';
import starRating from './pages/star-rating/star-rating.vue';

export default [{
    path: '/githubCommits',
    component: githubCommits,
},{
    path: '/tableGrid',
    component: tableGrid,
},{
    path: '/treeView',
    component: treeView,
},{
    path: '/starRating',
    component: starRating,
}]
