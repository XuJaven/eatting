<template>
  <div id="app">
    <div class="eatCard">
<van-grid :column-num="3">
  <van-grid-item icon="map-marked" text="我的地址" to="myadd"  />
  <van-grid-item icon="cart" text="购物车" />
  <van-grid-item icon="wap-nav" text="我的订单" />
</van-grid>
  </div>
    <div>还未登陆，请先登陆哦</div>
<van-button type="primary" to="login">登陆</van-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  methods:{  
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    
  }
}
</script>

<style scoped>
</style>
