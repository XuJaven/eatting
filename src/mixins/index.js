var myMixin = {
  beforeCreate () {
    switch(this.$route.name){
    case 'mine':
    case 'myadd':
      document.body.style.backgroundColor="#e2e5ef"
      break
    default:
      document.body.style.backgroundColor="#fff" 
      break
    }
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  },
  beforeDestroy () {
    /* if (this.name) {
      this.$bus.$off(this.name)
      this.$bus.$off(this.name + 'Clear')
    } */
    console.log('test')
  }
}
export default {
  install (Vue) {
    Vue.mixin(myMixin)
  }
}
