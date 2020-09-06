<template>
<!-- 未登录时显示下面 -->
<div style="text-align: center; margin-top:50px">
<div>还未登陆，无法查看订单哦</div>
<van-button type="primary" to="login">登陆</van-button>
</div>
</template>
<script>
//参考 https://youzan.github.io/vant/#/zh-CN/tab
export default {
  name: 'App',
  
}
</script>

<style scoped>
</style>
