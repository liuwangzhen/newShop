<template>
    <div>
        <van-nav-bar
                title="旭老豆的店"
                :border="false"
        >

        </van-nav-bar>
        <img class="user-poster" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560065729838&di=9cdd90a31a07ceb4cfbbf8aeb76683a5&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqylss%2Fatt%2Fsite1%2F20070329%2Fxin_510304290939585186234.jpg">
        <van-row class="user-links">
            <van-col span="6">
                <van-icon name="pending-payment" />
                待付款
            </van-col>
            <van-col span="6">
                <van-icon name="records" />
                待接单
            </van-col>
            <van-col span="6">
                <van-icon name="tosend" />
                待发货
            </van-col>
            <van-col span="6">
                <van-icon name="logistics" />
                已发货
            </van-col>
        </van-row>

        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="points" title="我的积分" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "mine"
    }
</script>

<style scoped lang="less">
    .van-nav-bar__title {
        font-size: 20px;
        font-weight: 600;
    }
    .user {
    &-poster {
         width: 100%;
         height: 53vw;
         display: block;
         object-fit: cover;
     }
    &-group {
         margin-bottom: 15px;
     }
    &-links {
         padding: 15px 0;
         font-size: 12px;
         text-align: center;
         background-color: #fff;
    .van-icon {
        display: block;
        font-size: 24px;
    }
    }
    }
</style>