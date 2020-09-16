<template>
  <div id="app">
  <van-form style="margin: 16px;">
  <van-field
    v-model="phone"
    label="手机号"
    placeholder="请输入手机号"
  />
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
<van-button type="primary" block :disabled="checkAble" @click="_login">登陆</van-button>
<van-button style="border:none;" type="default" to="signup">注册</van-button>
</van-form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      password:'',
      phone:''
    }
  },
  computed:{
    checkAble(){
      if(this.phone&&this.password){
        return false
      }
      return true
    }
  },
  methods:{
    // 登录
    async _login(){
      let url = '/auth/frontlogin'
      let param ={
        password:this.password,
        username:this.phone
      }
      let res = await this.$http.post(url,param)
      let {data,message,status}=res
      if(status===200){
        let  {tokenValue,user}= data
        this.$http.setSession(tokenValue)
        sessionStorage.setItem('user', JSON.stringify(user))
        let test = sessionStorage.getItem('user')
        this.$notify({ type: 'success', message:message})
        this.$router.replace('mine')
      }else{
        this.$notify({ type: 'warning', message:message})
      }
      // this.$http.setSession('test')
      // this.$router.replace('mine')
    },
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
