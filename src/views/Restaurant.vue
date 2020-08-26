<template>
<div>
  <v-header :seller="seller"></v-header>
     <van-tabs v-model="activeSeller">
  <van-tab v-for="(item,index) in  sellerList"   :key="index" :title="item.title" :to='item.route'>
    </van-tab>
</van-tabs>
<keep-alive>
    <!-- <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。-->
    <router-view :seller="seller">
    </router-view>
  </keep-alive>
</div>
</template>

<script>
import header from '@/components/header/header.vue'
import {
  urlParse
} from '@/assets/js/util.js'

const ERR_OK = 0

export default {
  data() {
    return {
      seller: {
        id: (() => { // 每个商家都有一个id标识
          let queryParam = urlParse()
          // console.log(queryParam)
          return queryParam.id
        })() // 立即执行函数获取id
      },
      sellerList:[
        {value:1,title:'商品',route:'goods'},
        {value:2,title:'评论',route:'ratings'},
        {value:3,title:'商家',route:'seller'}
      ],
      activeSeller: 0
    }
  },
  created() {
    this.$http.get(`/api/seller?id=${this.seller.id}`).then((res) => {
      if (res.data.errno === ERR_OK) {
        // this.seller = res.data.data // 此方法id会被覆盖丢弃，改用Object.assign方法
        this.seller = Object.assign({}, this.seller, res.data.data)
        /* Object.assign 是es6语法，类似jQuery的$extend方法，详见MDN文档
        https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */
      }
    })

  },
  mounted(){
console.log('开始',this.$route)
    let that = this
    for(let item of this.sellerList){
      if(item.route==that.$route.name){
        that.activeSeller =that.sellerList.indexOf(item)
        break
      }
    }

  },
  components: {
    'v-header': header
  }
}
</script>

<style scoped>

</style>
