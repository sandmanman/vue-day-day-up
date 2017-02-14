<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <router-link to="/githubCommits" class="nav-link">
                            GithubCommits
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/tableGrid" class="nav-link">
                            TableGrid
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/treeView" class="nav-link">
                            TreeView
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/todo" class="nav-link">
                            Todo
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/starRating" class="nav-link">
                            StarRating
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-9">
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav-item {
    .router-link-active {
        color: #fff;
        background-color: #0275d8;
        border-radius: 4px;
    }
}
</style>
