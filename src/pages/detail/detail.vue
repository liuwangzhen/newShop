<template>
    <div class="pb20">
        <van-nav-bar
                title="生如夏花"
                left-arrow
                :border="false"
                @click-left="onClickLeft"
        />
        <div class="row pb10 pt5">
            <img class="headimg ml10" :src="options.headimg" />
            <div class="f16 b lh30 ml10 le2">{{options.author}}</div>
            <div class="abs f16 attention">关注</div>
        </div>
        <van-swipe @change="swipeChange" indicator-color="white">
            <van-swipe-item :style="{height:height1}" v-bind:key="index" v-for="(item,index) in list">
                <van-image  fit="fill" :src="item"></van-image>
            </van-swipe-item>
        </van-swipe>
        <div class="ml10 mt10 le2">{{options.content}}</div>
        <div class="mt10 ml10">
        <van-icon info="22" size="20px" name="like-o" ></van-icon>
        <van-icon info="9" class="ml30" size="20px" name="star-o"/>
        </div>
    </div>
</template>

<script>

    export default {
        name: "detail",
        data:function () {
            return{
                detail:"dasf",
                list:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559285127333&di=6006c4c8499f2bfda35e181f4b2490a8&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Forj360%2F007xTlCBly1fyud2l8x8kj30rs6etb2a.jpg',"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559305275925&di=bd470cc42f09e373839cd6e304876096&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F07%2F20160507191419_J2m8R.thumb.700_0.jpeg"],
                height1:"auto",
                options:this.$route.query.options
            }
        },
        methods:{
            onClickLeft:function () {
                window.history.length>1?this.$router.go(-1):this.$router.push('/')
            },
            swipeChange:function (e) {
                var image = new Image()
                image.src=this.list[e]
                var pix=image.height/image.width
                return this.height1=100*pix+'vw'
            }
        },
        beforeCreate:function () {
            // console.log(this.$route.query.options)

        },
        created:function () {
            this.list.unshift(this.$route.query.options.src)
            var image = new Image()
            image.src=this.$route.query.options.src
            var pix=image.height/image.width
            this.height1=100*pix+'vw'
        },
        mounted:function () {

        }
    }

</script>

<style scoped>
    .ml20{
        margin-left:20px;
    }
    .pb20{
        padding-bottom: 20px;
    }
    .ml30{
        margin-left: 30px;
    }
    .mt10{
        margin-top: 10px;
    }
    .ml10{
        margin-left: 10px;
    }
    .pb10{
        padding-bottom: 10px;
    }
    .pt5{
        padding-top:5px;
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
    /*轮播*/
    .van-image__error, .van-image__img, .van-image__loading {
        display: block;
        width: 100vw;
        max-height: 70vh;
    }
    .van-swipe {
        max-height: 70vh;
    }
    .van-image{
        width: 100vw;
    }
    .headimg{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .attention{
        color: red;
        right: 5vw;
        line-height: 30px;
        border: 1px solid red;
        width: 16vw;
        text-align: center;
        letter-spacing: 2px;
        border-radius: 4vw;
    }
    .van-info{
        top:-4px;
        right:-10px;
        color: #000;
        background-color: #fff;
    }
</style>