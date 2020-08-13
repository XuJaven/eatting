/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  前端配置好的所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
import _imoprt from '../router/_import_production'
const Layout = () => import('../components/pages/group/Index')
export function filterAsyncRouter (userRouter = []) {
  let accessedRouters = []
  userRouter.filter(route => {
    if (route.isRouter) {
      if (route.component) {
        if (route.component === 'Layout') {
          route.component = Layout
        } else {
          route.component = _imoprt(route.component + '.vue') // 动态引入组件
        }
      }
    } else {
      if (route.children && route.children.length) {
        route.path = ''
        route.children = filterAsyncRouter(route.children)
      }
    }
    accessedRouters.push(route)
  })
  return accessedRouters
}
export function filemenu (userRouter = []) {
  let cur = []
  userRouter.forEach((item) => {
    let i = {}
    i.name = item.name
    if (item.children && item.children.length > 0) {
      i.children = filemenu(item.children)
    }
    i.path = item.path
    cur.push(i)
  })
  return cur
}

/**
 *
 * @param {Array} routes 用户过滤后的路由
 *
 * 递归为所有有子路由的路由设置第一个children.path为默认路由
 */
export function setDefaultRoute (routes) {
  routes.forEach((v, i) => {
    v.redirect = v.path
  })
}
