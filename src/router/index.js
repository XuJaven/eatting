import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import Order from '@/views/Order'

import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'
import Home from '@/views/Restaurant.vue'
Vue.use(Router)

export default new Router({
  // base:'/test/',
  mode:'history',
  routes: [
    /* { path: '/', 
      name: 'Home', 
      component: Home, 
      meta: {
        keepAlive: true
      }
    },
    { path: '/home', redirect: '/' }, */
    { path: '/mine', 
      name: 'mine', 
      component: Mine,
      meta: {
        keepAlive: true
      } 
    },
    { path: '/order', 
      name: 'order', 
      component: Order,
      meta: {
        keepAlive: true
      } 
    },
    { path: '/login', 
      name: 'login', 
      component: Login,
      meta: {
        title:'登陆',
      } 
    },
    { path: '/signup', 
      name: 'signup', 
      component: SignUp,
      meta: {
        title:'注册',
      } 
    },
    {path: '/',name: 'home', component: Home,
      meta: {
        keepAlive: true
      },
      children: [
        {path: '/goods', redirect: '/home' },
        {path: '/',name: 'goods', component: goods,
          meta: {
            keepAlive: true,
            title:'商品',
          }
        },
        {path: '/ratings',name: 'ratings', component: ratings,
          meta: {
            keepAlive: true,
            title:'评价',
          }
        },
        {path: '/seller',name: 'seller', component: seller,
          meta: {
            keepAlive: true,
            title:'商家',
          }
        }
      ]
    },
    {path: '/home', redirect: '/' }
  ]
})
 