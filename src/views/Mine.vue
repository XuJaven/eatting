<template>
  <div id="app">
    <div class="eatCard">
    test
  </div>
    <div>还未登陆，请先登陆哦</div>
<van-button type="primary" to="login">登陆</van-button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  methods:{
    
  }/* ,
  created(){
    document.body.style.backgroundColor="#e2e5ef"
  } */
}
</script>

<style scoped>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #e2e5ef;
}*/
/* #app{
  background: #e2e5ef;
} */
  .eatCard{
    background: white;
    border-radius: 5px;
    height:100px;
    margin:5px;
  }
</style>
