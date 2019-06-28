import Vue from 'vue'
import Router from 'vue-router'
import first from '@/pages/first/first'
import detail from '@/pages/detail/detail'
import shop from '@/pages/shop/shop'
import shopdetail from '@/pages/shopdetail/shopdetail'
import mine from '@/pages/mine/mine'
import App from '../App'
Vue.use(Router)

export default new Router({
        mode:"hash",
        base:'/dist',
    path:'/',
    component:App,
    routes:[
        {path:'',redirect:'/first'},
        {
                    path:'/first',
                    name:'first',
                    component:first,
        },
        {
            path:'/detail',
            name:'detail',
            component:detail,
            meta:{
                keepAlive:true
            }
        },
        {
            path:'/shop',
            name:'shop',
            component:shop,
        },
        {
            path:'/mine',
            name:'mine',
            component:mine,
        },
        {
            path:'/shopdetail',
            name:'shopdetai',
            component:shopdetail,
        },

    ],
})