<template>
  <div style="text-align: center;">
     <!-- 登录后显示 -->
<!-- <div  class="eatCard userInforCard" >
  <div>{{userInfo.name}}</div>
  <div>{{userInfo.phone}}</div>
</div>
    <div class="eatCard">
<van-grid :column-num="3">
  <van-grid-item icon="map-marked" text="我的地址" to="myadd"  />
  <van-grid-item icon="cart" text="购物车" />
  <van-grid-item icon="wap-nav" text="我的订单" />
</van-grid>
  </div> -->
 <!-- 如果还未登录 -->
  <div>
    <div>还未登陆，请先登陆哦</div>
<van-button type="primary" to="login">登陆</van-button>
 </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userInfo:{
        name:'XXX',
        phone:'192000000000',
      }
    }
  },
  methods:{  
   
  }
}
</script>

<style scoped>
.userInforCard{
  padding:10px;
  padding-left: 1rem
}
</style>
