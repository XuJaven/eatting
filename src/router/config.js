import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import Order from '@/views/Order'
import MyAdd from '@/views/MyHome/MyAdd'

import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'
import Home from '@/views/Restaurant.vue'
// 未登录
import MineBefore from '@/views/LoginBefore/MineBefore'
import OrderBefore from '@/views/LoginBefore/OrderBefore'
Vue.use(Router)
const route = {}
route.mode = 'history'
route.routes= [
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
  {path: '/home', redirect: '/' },
  { path: '/myadd', 
    name: 'myadd', 
    component: MyAdd,
    meta: {
      title:'我的地址',
    } 
  },
  // 未登录时
  { path: '/minebefore', 
    name: 'minebefore', 
    component: MineBefore,
    meta: {
      keepAlive: true
    } 
  },
  { path: '/orderbefore', 
    name: 'orderbefore', 
    component: OrderBefore,
    meta: {
      keepAlive: true
    } 
  },
]

export default new Router(route)
 