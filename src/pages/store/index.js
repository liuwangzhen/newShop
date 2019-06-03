import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
      age:26,
    },
    mutations:{
        add:function (state,n) {
            state.age+=n
        },
        red:function (state,n) {
            state.age-=n
        }
    },
    actions:{
        addAction:function (context,n) {
            context.commit('add',n)
        }
    },
})