<template>
  <div>
    <van-tabs v-model="activeOrder">
  <van-tab v-for="(item,index) in  orderList" :key="index" :title="item.title">内容 1</van-tab>

</van-tabs>
<!-- 未登录时显示下面 -->
<!-- <div>
<div>还未登陆，无法查看订单哦</div>
<van-button type="primary" to="login">登陆</van-button>
</div> -->
</div>
</template>
<script>
//参考 https://youzan.github.io/vant/#/zh-CN/tab
export default {
  name: 'App',
  data(){
    return{
      orderList:[
        {value:1,title:'全部'},
        {value:2,title:'待消费'},
        {value:3,title:'待评价'},
        {value:4,title:'退款'}
      ],
      activeOrder: 1
    }
  },
  methods:{

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
