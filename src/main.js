Vue.config.productionTip = false
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/pages/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Row, Col,Dialog,Lazyload,Button,
    NavBar,
    Search,
    SwipeCell,
    Cell, CellGroup,
    Tab, Tabs,
    Image,
    Icon,
    Swipe,SwipeItem,
    Tabbar, TabbarItem,Tag, GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,
    Toast} from 'vant';




Vue.use(VueAxios,axios);
Vue.use(Row).use(Col).use(Dialog).use(Lazyload).use(Image).use(Button).use(NavBar).use(Search).use(SwipeCell).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(Icon).use(Swipe).use(SwipeItem).use(Tabbar).use(TabbarItem).use(Tag).use(GoodsAction)
    .use(GoodsActionIcon)
    .use(GoodsActionButton)
    .use(Toast);
new Vue({
    router,store,
  render: h => h(App)
}).$mount('#app')
