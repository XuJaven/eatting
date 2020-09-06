<template>
 <!-- 如果还未登录 -->
  <div style="text-align: center;margin-top:50px">
    <div>还未登陆，请先登陆哦</div>
<van-button type="primary" to="login">登陆</van-button>
 </div>
</template>

<script>
export default {
  name: 'MineBefore',
}
</script>

<style scoped>
.userInforCard{
  padding:10px;
  padding-left: 1rem
}
</style>
