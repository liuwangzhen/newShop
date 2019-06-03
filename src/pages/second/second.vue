<template>
    <div>
        <heade><span slot style="color:blue">是pig</span></heade>
        <div class="s0">

        <div @click="goBack">fanhui</div>
        </div>
        <div class="s0-ss">这是外层</div>
<div :class="[isActive ? 'active' :'']">bigbang</div>

        <van-icon class-prefix="my-icon" name="extra" />
        <van-button type="danger" round>{{count}}</van-button>
        <div @click="addAge(num1)">{{arr}}</div>
        <div @click="reduce(num1)">减法</div>
        <div @click="addAction(10)">加法action</div>
        <div v-for="item in message">{{item | filter1}}</div>
    </div>
</template>

<script>
    import heade from "../../components/heade"
    import { mapState } from 'vuex'
    import {mapMutations} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        name: "second",
        data(){
            return {
                show: true,
                isActive:true,
                items: [
                    { message: 'Foo',id:"22" },
                    { message: 'Bar',id:"11" }
                ],
                message:[2,3,4,5,6],
                num1:30
            }
        },

        components:{
            heade,
        },
        filters:{
            filter1:function (val) {
                if(val>3){
                    return val
                }
            }
        },
        created:function () {

        },
        methods: {
            goBack: function () {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            },
            ...mapMutations({
                addAge:'add',
                reduce:'red',
            }),
            // addAction:function () {
            //     this.$store.dispatch('addAction',{n:20})
            // }
            ...mapActions({
                addAction:'addAction'
            }),

        },
        computed:{
            arr(){ return 12321 },
            ...mapState({
            count:"age"
        })
        }

    }

</script>

<style lang="scss" scoped>
     @mixin w200($x,$x2){
         width: $x2;
         color: $x;
     }
     $w30:30%;
     $w20:200px;
     $type:zhuzhu;
     %appach{
         color: red;
     }
     @for $i from 1 to 7 {
         .w#{$i} {width:20px * $i;}
     }
     .w30{
         width: $w30;
     }

    .s0 {
        color: #00ff00;
        width: #{$w20};
        .s1 {
            background-color: #ff0000;
            color: #000000;
        }
        &-ss{
            @if $type==ss{
                color:black;
            }
            @else{
                @include w200(red,100%);


        }
        }

    }

    .err{

        color: red;
    }
    .serious{
        @extend .err
    }
    .active{
        color: blue;

    }
</style>