<template lang="html">
    <div class="card">
        <card-header></card-header>
        <div class="card-block">
            
            <div class="row">
                <div class="col-12 col-md-5">
                    <!-- add an event form -->
                    <div class="card">
                        <div class="card-header">
                            添加活动
                        </div>
                        <div class="card-block">
                            <form action="">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="活动标题"
                                    v-model="event.title">
                                </div>
                                <div class="form-group">
                                    <textarea type="text" class="form-control" placeholder="活动描述"
                                    v-model="event.detail"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="date" class="form-control" placeholder="Date" 
                                    v-model="event.date">
                                </div>
                                <button type="button" class="btn btn-primary" @click="addEvent">添加</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-7">
                    <!-- show the events -->
                    <ul class="list-group">
                        <a href="javascript:void(0);" class="list-group-item list-group-item-action flex-column align-items-start"
                            v-for="(event, index) in events" :key="event.id">

                            <div class="d-flex w-100 justify-content-between">
                                <h4>
                                    <!--<i class="zmdi zmdi-star-circle"></i>-->
                                    {{event.title}}
                                </h4>
                                <small v-if="event.date"><i class="zmdi zmdi-calendar-note"></i> {{event.date}}</small>
                            </div>
                            <p class="text-muted" v-if="event.detail">{{event.detail}}</p>

                            <div class="w-100">
                                <button type="button" class="btn btn-outline-primary btn-sm">
                                    <i class="zmdi zmdi-edit"></i>
                                </button>

                                <button type="button" class="btn btn-outline-danger btn-sm"
                                    @click="deleteEvent(index,event.id)">
                                        <i class="zmdi zmdi-delete"></i>
                                </button>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    import $http from 'axios';

    import cardHeader from '@/components/card-header/cardHeader.vue';

    export default {
        name: 'EventsBulletinBoard',
        components: {
            cardHeader
        },
        data() {
            return {
                event: {
                    title: '',
                    detail: '',
                    date: ''
                },
                events: [],
            }
        },
        created() {
            //应用加载时可运行
            this.getEvents();
        },
        methods: {
            getEvents() {
                const _this = this;
                $http.get('/api/events')
                     .then(function(res){
                        _this.events = res.data;
                     })
                     .catch(function(error){
                        console.error(error);
                     });
            },
            addEvent() {
                //添加活动
                const _this = this;
                if(this.event.title) {
                    $http.post('/api/events', _this.event)
                         .then(function(){
                            _this.events.push(_this.event)
                            _this.event = {
                                title: '',
                                detail: '',
                                date: ''
                            }
                         })
                         .catch(function(error){
                            console.error(error);
                         })
                    
                }
            },
            deleteEvent(index,id) {
                //删除
                const _this = this;
                if( confirm('确定要移除该事件？') ) {
                    $http.delete('/api/events/'+id)
                         .then(function(){
                            _this.events.splice(index,1);
                         })
                         .catch(function(error){
                             console.log(error)
                         })
                }
                //console.log(index);
            }
        }
    }
</script>

<style lang="less">

</style>
