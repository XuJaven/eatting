<template>
  <div style="text-align: center;">
     <!-- 登录后显示 -->
<div  class="eatCard userInforCard" >
  <van-row>
    <van-col :span="18">
  <div>{{userInfo.name}}</div>
  <div>{{userInfo.phone}}</div>
  </van-col>
  <van-col :span="6">
  <van-button @click="_logout">退出</van-button>
  </van-col>
  </van-row>
</div>
    <div class="eatCard">
<van-grid :column-num="3">
  <van-grid-item icon="map-marked" text="我的地址" to="myadd"  />
  <van-grid-item icon="cart" text="购物车" />
  <van-grid-item icon="wap-nav" text="我的订单" />
</van-grid>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userInfo:{
        name:'admin',
        phone:'192000000000',
      }
    }
  },
  methods:{  
    _logout(){
      this.$http.clearSession()
      this.$router.replace('login')
    }
  }
}
</script>

<style scoped>
.userInforCard{
  padding:10px;
  padding-left: 1rem
}
</style>
