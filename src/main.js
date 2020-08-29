import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import myMixin from '@/mixins'
import api from '@/http'
import http from 'axios'
import Vant from 'vant'
import { Notify } from 'vant';
import MyPlugins from '@/components'
import 'vant/lib/index.css'
import filters from '@/assets/filters'
import Tools from '@/assets/utils/tools'
import '@/assets/sass/index.scss'
import '@/assets/style/index.css'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(myMixin)
Vue.use(MyPlugins)
Vue.prototype.$notify = Notify
Vue.prototype.$http = http
Vue.prototype.$api = api
Vue.prototype.$tools = Tools
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
