<template lang="html">
    <div class="container-fluid" style="padding:0;">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-5">Vue.js 2.0 Demo</h1>
                <ul class="nav nav-tabs" style="margin-top: 3rem;">
                    <li class="nav-item">
                        <router-link to="/githubCommits" class="nav-link" activeClass="active">
                            GithubCommits
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tableGrid" class="nav-link" activeClass="active">
                            TableGrid
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/treeView" class="nav-link" activeClass="active">
                            TreeView
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/starRating" class="nav-link" activeClass="active">
                            StarRating
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/button" class="nav-link" activeClass="active">
                            Button
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/navBar" class="nav-link" activeClass="active">
                            navBar
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.jumbotron {
    padding-bottom: 0;
}
</style>
