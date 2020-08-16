
export default {
  beforeDestroy () {
    if (this.name) {
      this.$bus.$off(this.name)
      this.$bus.$off(this.name + 'Clear')
    }
    console.log('test')
  }
}
