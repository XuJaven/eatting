<template>
<div>
  <div id="app" v-if="$route.meta.keepAlive">
    <!-- <keep-alive>
    <img alt="Vue logo" src="./assets/logo.png">
    </keep-alive> -->
     <router-view ></router-view>
     <keep-alive>
    <eat-footer @change-tab="_changTab"></eat-footer>
    </keep-alive>
  </div>
  <div v-if="!$route.meta.keepAlive">
     <router-view ></router-view>
  </div>
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
    _changTab(path){
      this.$router.replace(path)
    }
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
