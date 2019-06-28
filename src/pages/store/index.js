import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
      age:26,
      details:{},
    },
    getters:{

    },
    mutations:{
        add:function (state,n) {
            state.age+=n
        },
        red:function (state,n) {
            state.age-=n
        },
        changeDetail:function (state,detail) {
           state.details=detail
        },
    },
    actions:{
        addAction:function (context,n) {
            context.commit('add',n)
        }
    },
    modules:{
        moduleA:{
            namespaced: true,
            state: { age2:18},
            mutations: {
                add2:function(state){
                    state.age2++;
                    state.age++
                }
            },
            actions: {},
            getters: {}
        }
    }


})