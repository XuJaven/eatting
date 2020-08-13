import HelloWorld from './HelloWorld'
import EatFooter from './EatFooter'
export default {
  install (Vue) {
    Vue.component('HelloWorld',HelloWorld )
    Vue.component('EatFooter',EatFooter )

  }
}