<template>
<div>
  <div v-if="$route.meta.keepAlive">
     <router-view ></router-view>
     <keep-alive>
    <eat-footer @change-tab="_changTab"></eat-footer>
    </keep-alive>
  </div>
  <div v-if="!$route.meta.keepAlive">
    <van-nav-bar
  :title="pageTitle"
  left-arrow
  @click-left="$router.go(-1)"
/>
     <!-- <transition name="fade"> -->
     <router-view ></router-view>
      <!-- </transition> -->
  </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      pageTitle:this.$route.meta.title
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods:{
    // 底部导航
    _changTab(path){
      this.$router.replace(path)
    },
    // 当路由变换
    fetchData(){
      this.pageTitle=this.$route.meta.title
    },
  /*     async _login(){
      let url = '/dms/goods/getAllByTypeId'
      let res = await this.$http.get(url)
      let {data,message,status}=res
      if(status===0){
        this.$notify({ type: 'success', message:message})
      }else{
        this.$notify({ type: 'warning', message:message})
      }
    }, */
  },
  mounted(){
    console.log(this.$store.state.seller)
    // this._login()
    
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
}
</style>