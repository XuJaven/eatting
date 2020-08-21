<template>
<!-- <transition name="fade"> -->
  <div id="app">
<van-form style="margin: 16px;">
<!-- <van-cell-group> -->
  <van-field
    v-model="phone"
    type="tel"
    maxlength="11"
    label="手机号"
    placeholder="请输入手机号"
    :error-message="errorMsg.phone"
    :rules="[{ validator:phoneValidator}]"
  />
   <van-field
    v-model="userName"
    maxlength="10"
    label="姓名"
    placeholder="请输入姓名"
    :error-message="errorMsg.userName"
    :rules="[{ validator: userNameValidator}]"
  />
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="长度在 8-10 之间，必须包含大小写字母和数字"
    :error-message="errorMsg.password"
    @input="passwordValidator"
    :rules="[{ validator: passwordValidator}]"
  />
  <van-field
    v-model="passwordTwice"
    type="password"
    :disabled="twiceAble"
    label="再次输入密码"
    placeholder="请再次输入密码"
    :error-message="errorMsg.passwordTwice"
    :rules="[{ validator: passwordTwiceValidator}]"
  />
  <!-- 还要图形验证码 -->
<!-- </van-cell-group> -->
<!-- <van-button type="primary" >注册</van-button> -->
<div >
<van-button :disabled="checkAble"  block type="primary" >
      注册
    </van-button>
</div>
</van-form>
  </div>
<!-- </transition> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      userName:'',
      phone:'',
      password:'',
      passwordTwice:'',
      errorMsg: {
        userName:'',
        phone:'',
        password:'',
        passwordTwice:''
      },
      // twiceAble:false
    }
  },
  computed:{
    checkAble(){
      if(this.userName&&this.phone&&this.password&&this.passwordTwice){
        if(!this.errorMsg.phone&&!this.errorMsg.password&&!this.errorMsg.passwordTwice){
          return false
        }
        return true
      }
      return true
    },
    twiceAble(){
      if(this.password&&!this.errorMsg.password){
        return false
      }else{
        return true
      }
    }
  },
  methods:{
    phoneValidator(value){
      if(!value){
        this.errorMsg.phone=""
        // this.errorMsg.phone="请输入手机号"
      }else{
        const pattern = /^1[3|4|5|7|8][0-9]{9}$/
        if(!pattern.test(value)){
          this.errorMsg.phone="手机号格式错误"
        }else{
          this.errorMsg.phone=null
        }
      }
    },
    userNameValidator(value){
      if(!value){
        this.errorMsg.userName=""
        // this.errorMsg.userName="请输入姓名"
      }else{
        this.errorMsg.userName=null
      }
    },
    passwordValidator(value){
      if(!value){
        this.errorMsg.password=""
        // this.errorMsg.password="请输入密码"
      }else{
        const patternOne = /^\S*$/
        const patternTwo = /^.{8,10}$/
        const patternThree = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,10}$/
        if(!patternOne.test(value)){
          this.errorMsg.password="密码不能包含空格"
        }else if(!patternTwo.test(value)){
          this.errorMsg.password="密码长度不对，应为8-10个字符"
        }else if(!patternThree.test(value)){
          this.errorMsg.password="密码格式错误"
        }else{
          this.errorMsg.password=null
        }
      }
    },
    passwordTwiceValidator(value){
      if(!value){
        this.errorMsg.passwordTwice=""
        // this.errorMsg.passwordTwice="请再次输入密码"
      }else{
        if(value!==this.password){
          this.errorMsg.passwordTwice="两次输入密码不同"
        }else{
          this.errorMsg.passwordTwice=null
        }
      }
    }
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
