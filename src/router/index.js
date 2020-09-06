import router from '@/router/config.js'

router.beforeEach((to, from, next)=>{
  let isLogin = sessionStorage.getItem('token')
  // 未登录
  if (isLogin === null) {
    switch(to.name){
    case 'order':
      next({ name: 'orderbefore' }) 
      break
    case 'mine':
      next({ name: 'minebefore' }) 
      break
    default:
      next() 
      break
    }
    // 登录　　
  }else{
    next()
  }  
})
export default router
 