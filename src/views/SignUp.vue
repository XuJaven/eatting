<template>
<!-- <transition name="fade"> -->
  <div id="app">
    <div>login</div>
<van-cell-group>
  <van-field
    v-model="username"
    error
    required
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="phone"
    required
    label="手机号"
    placeholder="请输入手机号"
    error-message="手机号格式错误"
  />
</van-cell-group>
<van-button type="primary" >注册</van-button>
  </div>
<!-- </transition> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      username:'',
      phone:''
    }
  },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
