<template>
    <div>
        <van-nav-bar
                :title="title"
                left-arrow
                :border="false"
                @click-left="onClickLeft"
        />
    </div>
</template>

<script>
    export default {
        name: "shopdetail",
        data:function () {
            return{
                title:this.$route.query.options.content
            }
        },
        methods:{
            onClickLeft:function () {
                window.history.length>1?this.$router.go(-1):this.$router.push('/')
            },
        }
    }
</script>

<style scoped>
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
</style>