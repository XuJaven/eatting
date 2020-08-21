<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>HOME</div>
    <van-button type="primary" to="restaurant">店铺测试</van-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  methods:{
    /*    _changTab(text){
      // console.log(text)
      router.push({ name: 'user'})
    } */
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
