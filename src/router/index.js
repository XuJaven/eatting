import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
import Mine from '@/views/Mine'
import Login from '@/views/Login'
import Order from '@/views/Order'

import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'

/*import signup from '@/views/user/signup'
import login from '@/views/user/login'
import main from '@/views/user/main'
import order from '@/views/user/order'
import test from '@/views/admmanager/test'
import appoint from '@/views/admmanager/appoint'
import ordertable from '@/views/admmanager/ordertable'
import department from '@/views/admmanager/department'
import backlogin from '@/views/admin/backlogin'
import slide from '@/views/admmanager/slide'
import doctor from '@/views/admmanager/doctor'
import doctormain from '@/views/doctor/doctormain'
import admsignup from '@/views/admin/admsignup'
import adminmain from '@/views/admin/adminmain'*/
Vue.use(Router)

export default new Router({
  // base:'/test/',
  mode:'history',
  routes: [
    {path: '/', redirect: '/goods'}, // 路由重定向
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller},

    /* { path: '/', 
      name: 'Home', 
      component: Home, 
      meta: {
        keepAlive: true
      }
    },
    { path: '/home', redirect: '/' }, */
    { path: '/mine', 
      name: 'Mine', 
      component: Mine,
      meta: {
        keepAlive: true
      } 
    },
    { path: '/login', 
      name: 'Login', 
      component: Login,
      meta: {
        keepAlive: false
      } 
    },
    { path: '/order', 
      name: 'Order', 
      component: Order,
      meta: {
        keepAlive: true
      } 
    }
    /*    { path: '/test', name: 'Test', component: test },
     { path: '/', name: 'Home', component: Home },
      { path: '/home', name: 'Home', component: Home },
   { path: '/adminhome', name: 'adminHome', component: Home },
      { path: '/signup', name: 'signup', component: signup },
      { path: '/login', name: 'login', component: login },
      { path: '/main', name: 'main', component: main },
      { path: '/order', name: 'order', component: order },
      { path: '/appoint', name: 'appoint', component: appoint },
      { path: '/ordertable', name: 'ordertable', component: ordertable },
      { path: '/department', name: 'department', component: department },
      { path: '/backlogin', name: 'backlogin', component: backlogin },
      { path: '/slide', name: 'slide', component: slide },
      { path: '/doctor', name: 'doctor', component: doctor },
      { path: '/doctormain', name: 'doctormain', component: doctormain },
      { path: '/admsignup', name: 'admsignup', component: admsignup}, */
  ]
})
 