<template>
    <div class="goods">
        <van-nav-bar
                :title="titles"
                left-arrow
                :border="false"
                @click-left="onClickLeft"
        />
        <van-swipe class="goods-swipe" :autoplay="3000">
            <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
                <img :src="thumb" >
            </van-swipe-item>
        </van-swipe>
        <van-cell-group>
            <van-cell>
                <div class="goods-title">{{ goods.title }}</div>
                <div class="goods-price">{{ formatPrice(goods.price) }}</div>
            </van-cell>
            <van-cell class="goods-express">
                <van-col span="10">运费：{{ goods.express }}</van-col>
                <van-col span="14">剩余：{{ goods.remain }}</van-col>
            </van-cell>
        </van-cell-group>
        <van-cell-group class="goods-cell-group">
            <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
                <template slot="title">
                    <span class="van-cell-text">旭老豆的店</span>
                    <van-tag class="goods-tag" type="danger">官方</van-tag>
                </template>
            </van-cell>
            <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
        </van-cell-group>

        <van-cell-group class="goods-cell-group">
            <van-cell title="查看商品详情" is-link @click="sorry" />
        </van-cell-group>

        <van-goods-action>
            <van-goods-action-icon icon="chat-o" @click="sorry">
                客服
            </van-goods-action-icon>
            <van-goods-action-icon icon="cart-o" @click="onClickCart">
                购物车
            </van-goods-action-icon>
            <van-goods-action-button type="warning" @click="sorry">
                加入购物车
            </van-goods-action-button>
            <van-goods-action-button type="danger" @click="sorry">
                立即购买
            </van-goods-action-button>
        </van-goods-action>
    </div>
</template>

<script>
    import {
        Toast,
    } from 'vant';
    export default {
        name: "shopdetail",
        components: {
            [Toast.name]: Toast},
        data:function () {
            return{
                titles:'',
                goods: {
                    title: '',
                    price: 2680,
                    express: '免运费',
                    remain: 999,
                    thumb: [
                        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                        'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                    ]
                }
            }
        },
        methods:{
            onClickLeft:function () {
                window.history.length>1?this.$router.go(-1):this.$router.push('/')
            },
            formatPrice() {
                // return '¥' + (this.goods.price / 100).toFixed(2);
                return '¥' + (this.goods.price).toFixed(2);
            },
            onClickCart() {
                // this.$router.push('cart');
                Toast('你在这里等着，我去买个橘子~');
            },
            sorry() {
                Toast('你在这里等着，我去买个橘子~');
            },
        },
        created:function () {
            let shops=JSON.parse(localStorage.getItem('shops'))
            this.goods.thumb=shops.src
            this.goods.title=shops.content
            this.goods.price=shops.newPrice
            this.titles=shops.content
        },
    }
</script>

<style lang="less" scoped>
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
    .goods {
        padding-bottom: 50px;
    &-swipe {
    img {
        width: 100%;
        display: block;
    }
    }
    &-title {
         font-size: 16px;
     }
    &-price {
         color: #f44;
     }
    &-express {
         color: #999;
         font-size: 12px;
         padding: 5px 15px;
     }
    &-cell-group {
         margin: 15px 0;
    .van-cell__value {
        color: #999;
    }
    }
    &-tag {
         margin-left: 5px;
     }
    }
</style>