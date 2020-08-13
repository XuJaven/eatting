<template>
  <div>
<van-tabbar v-model="active" @change="$emit('change-tab',active)">
  <van-tabbar-item v-for="(item,index) in tabbarList" :key='index' :name="item.value" :icon="item.icon">
    {{item.text}}
    </van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
// 子组件传值或调用方法【子组件this.$emit,父组件@】
// 父组件传值【父组件v-bind,子组件props】,调用方法【父组件this.$refs.refname.methodame】或者【父组件this.$bus.$emit，子组件this.$bus.$on】
// 切换导航时调用changeTab
export default {
  name: 'eatFooter',
  /*  model: {
    prop: 'active',
    event: 'changeTab'
  }, */
  props: {
    active: {
      type: String,
      default: '',
      required: false
    }
  },
  data(){
    return{
      tabbarList:[
        {icon:'home-o',text:'首页',value:'home'},
        {icon:'home-o',text:'订单',value:'order'},
        {icon:'home-o',text:'我的',value:'mine'}
      ]
    }
  },
  methods:{

  },
  mounted(){
    /* this.$bus.$on('method',()=>{
    }) */
  }
}
</script>

<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
