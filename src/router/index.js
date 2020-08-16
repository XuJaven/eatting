import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import Order from '@/views/Order'

import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'
import Restaurant from '@/views/Restaurant.vue'
Vue.use(Router)

export default new Router({
  // base:'/test/',
  mode:'history',
  routes: [
    {path: '/restaurant',name: 'restaurant', component: Restaurant,
      children: [
        //这里注意写完整
        {path: '/goods', redirect: '/restaurant' },
        {path: '/',name: 'goods', component: goods},
        {path: '/ratings',name: 'ratings', component: ratings},
        {path: '/seller',name: 'seller', component: seller}
      ]},

    { path: '/', 
      name: 'Home', 
      component: Home, 
      meta: {
        keepAlive: true
      }
    },
    { path: '/home', redirect: '/' },
    { path: '/mine', 
      name: 'mine', 
      component: Mine,
      meta: {
        keepAlive: true
      } 
    },
    { path: '/login', 
      name: 'login', 
      component: Login,
      meta: {
        keepAlive: false
      } 
    },
    { path: '/order', 
      name: 'order', 
      component: Order,
      meta: {
        keepAlive: true
      } 
    }
  ]
})
 