import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home/Home.vue'
import Detail from '../pages/home/Detail.vue'
import Bannerdetail from '../pages/home/Bannerdetail.vue'
import Addressdetail from '../pages/home/Addressdetail.vue'
import Searchdetail from '../pages/home/Searchdetail.vue'
import Discover from '../pages/discover/Discover.vue'
import Order from '../pages/order/Order.vue'
import Mine from '../pages/mine/Mine.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      // alias: '/',
      component: Home,
      children: [
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'bannerdetail/:id',
          component: Bannerdetail
        },
        {
          path: 'address',
          component: Addressdetail
        },
        {
          path: 'search',
          component: Searchdetail
        }
      ]
    },
    {
    	path: '/discover',
    	component: Discover
    },
    {
    	path: '/order',
    	component: Order
    },
    {
    	path: '/mine',
    	component: Mine
    },
    {
    	//由于是从上往下读，所以要放在最后，否则读以上路径都会显示home组件
    	path: '**',
    	redirect: '/home'
    }
  ]
})
