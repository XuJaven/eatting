import router from '@/router/config.js'

router.beforeEach((to, from, next)=>{
  // 改变背景色
  switch(to.name){
  case 'mine':''
  case 'myadd':
    document.body.style.backgroundColor="#e2e5ef"
    break
  default:
    document.body.style.backgroundColor="#fff" 
    break
  }
  let isLogin = sessionStorage.getItem('Authorization')
  // 未登录
  if (isLogin) {
    next()
  }else{
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
  }  
})
export default router
 