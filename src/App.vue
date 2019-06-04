<template>
  <div id="app">
    <van-tabbar v-if="isShow" active-color="#000" inactive-color="rgb(180,180,180)" v-model="active" route safe-area-inset-bottom>
      <van-tabbar-item icon="home-o" replace
                       to="/first"
      >
        主页
      </van-tabbar-item>
      <van-tabbar-item replace
                       to="/shop" icon="cart-o">商城</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data:function () {
      return {
          active:0,
          isShow:true,
          names:['first','shop','mine']
      }
  },
    beforeUpdate:function(){
        if(this.names.indexOf(this.$route.name)>-1){
            this.isShow=true
        }else{
            this.isShow=false
        }
    },
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
  .ml5{
    margin-left: 5px;
  }
  .lh30{
    line-height: 30px;
  }
  .f12{
    font-size: 12px;
  }
  .b{
    font-weight: bold;
  }
  .row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .abs{
    position: absolute;
  }
  .le1{
    letter-spacing: 1px;
  }
  .bgfff{
    background-color: #fff;
  }
  .rad{
    border-radiu:50%;
  }
.bgf5f{
  background-color: #f5f5f5;
}
.minh{
  min-height: 100vh;
}
.pb60{
  padding-bottom: 60px;
}
</style>
