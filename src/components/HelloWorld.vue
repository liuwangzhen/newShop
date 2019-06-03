<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-show="isShow" >

    <van-row>
      <router-link @click="isShow=false" :to="{path:'/second',query:{like:'eat'}}">to second</router-link>
    </van-row>
      <van-row><router-link :to="{path:'/first',query:{id:1231,name:'东方不败'}}">to first</router-link>
    </van-row>
    </div>


  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
    data:function () {
        return {
            visible:true,
            isShow:true,
        }
    },
  props: {
    msg: String
  },
    methods:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
