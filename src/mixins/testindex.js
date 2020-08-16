import busMixins from './busMixins'

export default {
  install (Vue) {
    Vue.mixin(busMixins)
  }
}
