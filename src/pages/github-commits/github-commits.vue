<template lang="html">
    <div class="card">
        
        <card-header></card-header>

        <div class="card-block">
            <div class="btn-group float-left" data-toggle="buttons">
                <label class="btn btn-secondary btn-sm"
                    v-bind:class="{'active':branch === currentBranch}"
                    v-for="branch in branches">
                    <input type="radio" name="branch" autocomplete="off"
                    v-bind:id="branch"
                    v-bind:value="branch"
                    v-model="currentBranch">{{branch}}
                </label>
            </div>
            <div class="loading float-left" v-show="isLoading">
                &nbsp;&nbsp;&nbsp;&nbsp;
                <i class="zmdi zmdi-refresh zmdi-hc-spin"></i>
            </div>
        </div>

        <ul class="list-group list-group-flush">
            <li v-for="item in commits" class="list-group-item">
                <div class="card-text">
                    <a :href="item.html_url" target="_blank" class="commit">{{ item.sha.slice(0, 7) }}</a> --
                    {{item.commit.message}}
                </div>
                <div style="margin-left:5px;font-size:12px;">
                    <a :href="item.author.html_url" target="_blank">{{ item.commit.author.name }}</a>
                    &nbsp;&nbsp;
                    <span class="date text-muted">{{ item.commit.author.date | formatDate }}</span>
                </div>
            </li>
        </ul>

        <div class="card-block text-center">
            <!-- 请求错误 -->
            <div class="alert alert-info" v-show='isAlert'>
                <p>The request data timeout, please reload.</p>
                <button type="button" class="btn btn-secondary" v-on:click='reload'>Reload</button>
            </div>

            <button type="button" class="btn btn-secondary"
                v-show='loadMoreBtn.show'
                v-bind:disabled="loadMoreBtn.disabled"
                v-on:click.self="loadMore">

                <i class="zmdi zmdi-refresh zmdi-hc-spin"  v-show='loadMoreBtn.loading'></i>
                {{loadMoreBtn.text}}
            </button>
        </div>
    </div> <!-- / .card End -->
</template>

<script>
import cardHeader from '../../components/card-header/cardHeader.vue';
export default {
    components: {
        cardHeader
    },
    data: function() {
        return {
            branches: {
                'master': 'master',
                'dev' : 'dev'
            },
            currentBranch: 'master',
            isLoading: false,
            loadMoreBtn: {
                text: 'More',
                show: false,
                loading: false,
                disabled: false
            },
            isAlert: false,
            perPage: 5,
            commits: null
        }
    },

    created: function() {
        /**
         * created
         * 类型： Function
         * 实例已经创建完成之后被调用。
         * 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。
         * 然而，挂载阶段还没开始，$el 属性目前不可见。
         */
        this.fetchData();
    },

    watch: {
        // 观测变化,可以是值也可以是方法
        currentBranch: function() {
            this.isAlert = false;
            this.fetchData();
        }
    },

    filters: {
        formatDate: function(d) {
            return d.replace(/T|Z/g, ' ');
        }
    },

    methods: {
        /**
         * methods
         * 类型: { [key: string]: Function }
         * methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。
         * 方法中的 this 自动绑定为 Vue 实例。
         */

        fetchData: function(perPage) {
            // 获取数据
            //
            var that = this; // 下面的 onload事件中 this 不再指向实例,所以要变量存一下
            that.isLoading = true;

            if ( perPage == undefined ) {
                var perPage = that.perPage;
            }

            var xhr = new XMLHttpRequest(),
                apiUrl = 'https://api.github.com/repos/vuejs/vue/commits?per_page='+ perPage + '&sha=';

            xhr.open('GET', apiUrl + that.currentBranch);

            xhr.timeout = 5000; // 超时时间，单位是毫秒

            xhr.onload = function() {
                // 请求完成时触发该函数
                //
                var state = this.readyState,
                    responseCode = xhr.status;
                //console.log("xhr.onload called. readyState: " + state + "; status: " + responseCode);
                if ( state === 4 ) {
                    if ( responseCode === 200 ) {
                        that.isLoading = false;
                        that.commits = JSON.parse(xhr.responseText);
                        that.loadMoreBtn.show = true;
                        that.loadMoreBtn.loading = false;
                        that.loadMoreBtn.disabled = false;
                        that.loadMoreBtn.text = 'More';
                    } else {
                        console.log(xhr.responseText);
                    }
                }

            };
            xhr.ontimeout = function (e) {
                // XMLHttpRequest 超时触发该函数.
                //
                console.warn('请求超时');
                that.isAlert = true;
                that.isLoading = false;
                that.loadMoreBtn.show = false;
            };
            xhr.error = function(e) {
                console.warn("xhr.error called. Error: " + e);
            };
            // xhr.onreadystatechange = function(){
            //
            // };
            xhr.send(null);
        },

        loadMore: function(event) {
            // 加载更多
            //
            var that = this;

            that.loadMoreBtn.disabled = true;
            that.loadMoreBtn.loading = true;
            that.loadMoreBtn.text = 'loading...';

            this.fetchData(that.perPage += that.perPage);

            //console.log('当前perPage：'+that.perPage)
        },

        reload: function() {
            var that = this;
            that.isAlert = false;
            this.fetchData();
        }
    },
}
</script>

<style lang="less">

</style>
