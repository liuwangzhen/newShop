<template>
    <div>
        <heade msg="tit"><span slot="one">xuemaojiao</span></heade>
        <van-nav-bar
                :border="false"
                title="蒙多，想买啥就买啥">

        </van-nav-bar>
        <van-search placeholder="请输入商品名"
                    shape="round"
                    v-model="value"
                    show-action>
            <div slot="action"  @click="onSearch">搜索</div>
        </van-search>
        <div class="bgf5f listbody">
        <div class="row">
            <div @click="goDetail(item)" class="bgfff ml4vw mt20" v-bind:key="i" v-for="(item,i) in list">
                <img class="shopImg" :src="item.src[0]"/>
                <div class="row mt5">
                    <div class="le2 cfff cen ml5 f12 tag-huasuan lh20">聚划算</div>
                    <div class="le2 ml5 lh20 f13">{{item.content}}</div>
                </div>
                <div class="ml5 tag-manjian mt5">{{item.tag}}</div>
                <div class="oldPrice ml5 mt10">￥{{item.oldPrice}}</div>
                <div class="newPrice ml5 pb10">￥{{item.newPrice}}</div>
            </div>

        </div>
        <van-dialog
                v-model="show"
                title="你瞅啥">
            <img class="toastImg" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3371901284,1995735291&fm=26&gp=0.jpg">
        </van-dialog>
        </div>
    </div>
</template>

<script>
    import heade from '../../components/heade'
    export default {
        name: "shop",
        components:{
            heade,
        },
        data:function () {
            return {
               value:"" ,
                show:false,
                list:[{id:"123",content:"乐事薯片多口味",tag:"满200元减50",oldPrice:99.9,newPrice:29.9,src:["https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4002686635,2344634341&fm=26&gp=0.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560231582&di=ba42fc32a264eceeb33395ce66b7a93e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F010a205aa9fa05a80120be1491c53b.jpeg"],saleNumber:1233,timeover:'2019-12-12'},
                    {id:"124",content:"三只松鼠",tag:"满150元减30",oldPrice:199.9,newPrice:9.9,src:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560181927&di=5dd5a195a054485df0679b904db557fc&imgtype=jpg&er=1&src=http%3A%2F%2Fcdn.178hui.com%2Fupload%2F2016%2F0102%2F12084354641.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559636721674&di=dc39ec2e094fe46db20bd619080a2133&imgtype=0&src=http%3A%2F%2Fimg.alicdn.com%2Ftfscom%2Fi4%2F725677994%2FTB2V2TQiYYI8KJjy0FaXXbAiVXa_%2521%2521725677994.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560231409&di=020b151117ca4fa2703ff051117cc3ca&imgtype=jpg&er=1&src=http%3A%2F%2Ffile03.sg560.com%2Fupimg01%2F2016%2F06%2F902103%2FTitle%2F1353261950738716902103.jpg"],saleNumber:9821,timeover:'2019-8-12'},
                    {id:"125",content:"小面筋",tag:"满60元减10",oldPrice:29.9,newPrice:6.9,src:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559630346020&di=702f6713a38bf576b41a40fd24be7ea7&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1789%2F341%2F1839174450%2F165017%2F9f384ef5%2F56124a18N5613cd4d.jpg%2521q70.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559630346019&di=ab54e76a801c27be0c31e83e9b47b522&imgtype=0&src=http%3A%2F%2Fwww.jl.chinanews.com%2F2017%2F0807%2FU437P916DT20170807120510.jpg"],saleNumber:9821,timeover:'2019-8-6'}]
            }
        },
        methods:{
            onSearch:function () {
                this.show=true
            },
            goDetail:function (e) {
                localStorage.setItem('shops',JSON.stringify(e))
                this.$router.push({path:'/shopdetail'})
            }
        }
    }
</script>

<style scoped>
    .lh20{
        line-height: 20px;
    }
    .pb10{
        padding-bottom: 10px;
    }
    .f13{
        font-size: 13px;
    }
    .mt20{
        margin-top: 20px;
    }
    .mt10{
        margin-top:10px;
    }
    .mt5{
        margin-top: 5px;
    }
    .cen{
        text-align: center;
    }
    .ml4vw{
        margin-left: 4vw;
    }
    .tag-huasuan{
      background-color: #f8083a;
        border:1px solid #f8083a;
        border-radius: 4px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .tag-manjian{
        color:#f8083a;
        border:1px solid #f8083a;
        font-size: 12px;
        padding-left: 5px;
        border-radius: 4px;
        line-height: 20px;
        width: 22vw;
        margin-top: 10px;
    }
    .cfff{
        color: #fff;
    }
 .toastImg{
     width: 150px;
     height: 150px;
 }
 .van-dialog{
     text-align: center;
 }
   .listbody{
       min-height: 100vh;
       padding-bottom: 40px;
   }
    .shopImg{
        width: 44vw;
        height: 44vw;
    }
    .oldPrice{
        color: #ddd;
        font-size: 10px;
    }
    .newPrice{
        color:red;
        font-size: 16px;
    }
    .van-nav-bar__title {
        font-size: 20px;
        font-weight: 600;
    }
</style>