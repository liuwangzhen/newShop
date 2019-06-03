<template>
    <div class="bgf5f minh pb60">
        <van-nav-bar
                     title="欢迎来到我的世界"
                     :border="false"
        >

        </van-nav-bar>


       <van-search placeholder="请输入关键词"
                   shape="round"
                   v-model="value"
                   show-action>
           <div slot="action"  @click="onSearch">搜索</div>
       </van-search>
        <van-tabs v-model="idx" @click="onClick" :right-width="0" :left-width="0">

             <van-tab v-bind:key="i" :title="n" v-for="(n,i) in titles">
                 <div class="row">
                 <div class="col">
                     <div @click="goDetail(item)" v-if="i%2==0" v-bind:key="i" class="item" v-for="(item,i) in list">
                     <van-image
                             width="44vw"
                             :src="item.src"
                             fit="contain"
                     />
                         <div>
                             <div class="content le1">
                             {{item.content}}
                             </div>
                             <div class="header row">
                                 <img class="head-img" :src="item.headimg" />
                                 <div class="f12 lh30 ml5">{{item.author}}</div>
                                 <div class="abs row zan lh30">
                                     <van-icon class="lh30" size="16" name="like-o"></van-icon>
                                     <div class="f12 ml5">{{item.like}}</div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="col">
                     <div @click="goDetail(item)" v-bind:key="i" v-if="i%2!=0" class="item" v-for="(item,i) in list">
                         <van-image
                                 width="44vw"
                                 :src="item.src"
                                 fit="contain"
                                 class="rad"
                         />
                         <div class="content le1">
                             {{item.content}}
                         </div>
                         <div class="header row">
                             <img class="head-img" :src="item.headimg" />
                             <div class="f12 lh30 ml5">{{item.author}}</div>
                             <div class="abs row zan lh30">
                                 <van-icon class="lh30" size="16" name="like-o"></van-icon>
                                 <div class="f12 ml5">{{item.like}}</div>
                             </div>
                         </div>
                     </div>
                 </div>
                 </div>
             </van-tab>

        </van-tabs>


        <van-dialog
                v-model="show"
                title="别看了，没后台搜不了">
            <img src="https://img.yzcdn.cn/1.jpg">
        </van-dialog>

    </div>
</template>
<script>
    export default {
      components:{
      },
        data(){
          return{
              show: false,
              value:"",
              titles:["推荐","附近","时尚","美肤","彩妆","美食","游戏",],
              idx:0,
              list:[],
              active:0,
          }
        },
        methods:{
            onSearch:function () {
                this.show=true
            },
            onClick(index) {
                var that=this;
                switch (index) {
                    case 0:
                        that.axios.get('http://localhost/test/test.php').then(function (res) {
                            console.log(res.data);
                            that.list = res.data
                        })
                            .catch(function (error) {
                                console.log(error);
                            });
                        break;
                    case 1:
                        this.$options.methods.getAxios.bind(this)(1);
                        break;
                    default:
                        this.$options.methods.getAxios.bind(this)(2);
                }
            },
            getAxios:function (kind) {
                var that=this
                that.axios.get('http://localhost/test/test2.php?kind='+kind).then(function (res) {
                    console.log(res.data);
                    that.list = res.data
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            goDetail:function (e) {
                this.$router.push({path:'/detail', query:{options:e}});

            }
        },
        beforeCreate:function () {
            var that=this;
            that.axios.get('http://localhost/test/test.php').then(function (res) {
                console.log(res.data);
                that.list=res.data
            })
                .catch(function (error) {
                    console.log(error);
                });
        },
        created:function () {

        },
        mounted:function(){

        }

    }
</script>
<style scoped>
    .bgf5f{
        background-color: #f5f5f5;
    }
    .minh{
        min-height: 100vh;
    }
    .pb60{
        padding-bottom: 60px;
    }
    /*导航*/
    .van-nav-bar .van-icon {
        color: #000;
    }
    .van-nav-bar__arrow {
        min-width: 1em;
        font-size: 20px;
        font-weight: 600;
    }
    .van-nav-bar__title {
        font-size: 20px;
        font-weight: 600;
    }
    /*搜索高宽*/
    .van-search .van-cell {
        padding: 10px 10px 10px 10px;
    }
    .van-search__content--round {
        border-radius: 30px;
    }
    .van-cell{
        max-width: 87vw;
    }
    .van-search__content{
        max-width: 90vw;
    }
    .van-search__action{
        margin-left: 10px;
    }


    /*tab*/
    .van-tab--active {
        font-weight: 600;
        letter-spacing: 2px;
        color: #323233;
    }
    .van-tab{
        font-size: 16px;
        letter-spacing: 2px;
    }
    .van-tabs__content{
        background-color: #f5f5f5;
        padding-bottom: 30px;
    }
    .van-tab__pane, .van-tab__pane-wrapper {
        background-color: #f5f5f5;
    }
    /*images*/

    .item{
        width: 44vw;
        margin-left: 4vw;
        margin-top: 4vw;
        background-color: #fff;
        /*border-top-left-radius: 6px;*/
        /*border-top-right-radius: 6px;*/
        /*border-bottom-left-radius: 6px;*/
        /*border-bottom-right-radius: 6px;*/
    }
    .van-image__error,.rad .van-image__img, .van-image__loading {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
    }


    .content{
        line-height: 20px;
        font-size: 13px;
        font-weight: 400;
        padding: 5px 5px 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .header{
        padding: 10px 5px 10px 5px;
    }
    .head-img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .zan{
        margin-left: 24vw;
    }
</style>