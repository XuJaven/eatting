<template>
  <div id="app">
    <img alt="Vue logo" src="@/assets/logo.png">
    <div>order</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <eat-footer @changeTab="_changTab"></eat-footer> -->
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
    /*     _changTab(text){
      // console.log(text)
      router.push({ name: 'user'})
    } */
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
