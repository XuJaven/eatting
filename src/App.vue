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
     <transition name="fade">
     <router-view ></router-view>
      </transition>
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
  },
  mounted(){

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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
