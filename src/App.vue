<template lang="html">
    <div class="wrapper">
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-5">Vue.js 2.0 Demo</h1>
            </div>
        </div>
        <div class="container">

            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <router-link to="/githubCommits" class="card-link" activeClass="active" v-on:click="show = !show">
                            GithubCommits
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/tableGrid" class="card-link" activeClass="active">
                            TableGrid
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/treeView" class="card-link" activeClass="active">
                            TreeView
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/starRating" class="card-link" activeClass="active">
                            StarRating
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/button" class="card-link" activeClass="active">
                            Button
                        </router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/navBar" class="card-link" activeClass="active">
                            navBar
                        </router-link>
                    </li>
                </ul>
            </div>

            <transition :name="transitionName">
                <router-view class="view"></router-view>
            </transition>

        </div>

    </div>


    

</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            transitionName: 'slide-fade'
        }
    }
}
</script>

<style lang="less">
html,
body,
.wrapper {
    height: 100%;
}
.view {
    position: absolute;
    top: 0;
    right: 15px;
    left: 15px;

    margin-bottom: 2rem;

    min-height: 100%;

    background-color: #fff;
    border-radius: .25rem;
    box-shadow: 0 0 11px rgba(0,0,0,.15);

}

//页面动画
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0
}
.view {
    transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-fade-enter {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}
.slide-fade-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

</style>