var myMixin = {
  methods: {
    hello: function () {
      // console.log('hello from mixin!')
    }
  },
  beforeDestroy () {
    /* if (this.name) {
      this.$bus.$off(this.name)
      this.$bus.$off(this.name + 'Clear')
    } */
  }
}
export default {
  install (Vue) {
    Vue.mixin(myMixin)
  }
}
