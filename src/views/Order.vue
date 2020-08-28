<template>
  <div>
    <van-tabs v-model="activeOrder">
  <van-tab title="全部" class="order-body">
    <div v-for="(item,index) in myDate" :key="item.id">
      <div class="order">
        <div class="title" style="">
          <div class="title_left">
            <div class="title_img">
              <a  href=""><img src="../images/1cde.jpg" alt=""></a>
            </div>
            <div class="title_main">
              <div class="title_name" style="font-size:14px;font-weight:bold"><a style="color:black" href="">{{item.name}}</a>
                <a href=""><i class="icon-keyboard_arrow_right icon"></i></a>
              </div>
              <div>
                <span style="background: #999;color:white;font-size:10px;padding:1px 5px;border-radius:5px">本店已休息</span>
              </div>
            </div>
          </div>
          <div class="title_right">
            <span style="color: #999; font-size:12px">已送达</span>
          </div>
        </div>
        <div class="main">
          <div class="main_left">
            <div class="main_left_img">
              <img src="../images/1.jpg" alt="">
            </div>
            <div class="main_left_title" style="line-height:70px;margin-left:10px">
              <span>{{item.nameMore}}</span>
            </div>
          </div>
          <div class="mian_right">
            <div>
              <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥{{item.price}}</div>
              <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共{{item.kucun}}件</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loadmore" style="width:95%;height:40px;background:white;border-radius:10px;margin:0 10px;margin:0 auto;">
      <div style="text-align:center;line-height:40px" @click="loadMore">
        <span>查看更多</span>
        <van-icon name="arrow-down" />
      </div>
    </div>
  </van-tab>
  <van-tab title="待消费" class="order-body"></van-tab>
  <van-tab title="待评价" class="order-body"></van-tab>
  <van-tab title="退款" class="order-body"></van-tab>
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
      activeOrder: 1,
      date:[
        {id:1,name:"正新鸡排",nameMore:"小吃",price:"3",kucun:"1",img1:""},
        {id:2,name:"A米汉堡",nameMore:"小吃",price:"5",kucun:"1",img1:""},
        {id:3,name:"黄焖鸡",nameMore:"小吃",price:"3",kucun:"1",img1:""},
        {id:4,name:"醉排骨",nameMore:"小吃",price:"7",kucun:"1",img1:""},
        {id:5,name:"沙县大酒店",nameMore:"小吃",price:"0",kucun:"1",img1:""},
        {id:6,name:"快餐",nameMore:"小吃",price:"3",kucun:"42",img1:""},
        {id:7,name:"周毅妈妈家",nameMore:"小吃",price:"34",kucun:"42",img1:""},
        {id:8,name:"红烧肉",nameMore:"小吃",price:"3",kucun:"32",img1:""},
      ],
      myDate:[],
      i:1,
    }
  },
  created(){
    if(this.date.length > 1){
      this.myDate[0]=this.date[0];
      this.myDate[1]=this.date[1];
    }
  },
  methods:{
    loadMore(){
      this.i += 2;
      for(let k = 2;k <= this.i;k ++){
        if(k > this.date.length){
          alert("not more");
          return;
        }
        this.$set(this.myDate,k,this.date[k])
      }

    }
  },
  
}
</script>

<style scoped>
.order{
  height: 100%;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 10px;
  background: #fff;
}
.title{
  display: flex;
  justify-content: space-between;
  align-content:flex-start;
}
.title_left{
  display: flex;
  justify-content: start;
  align-content: center;
}
.title_img{
  width: 39px;
  height: 39px;
  border-radius: 5%;
  overflow: hidden;
  margin-right: 10px;
}
.title_img img{
  width: 39px;
  height: 39px;
}
.main_left_img{
  width: 70px;
  height: 70px;
  border-radius: 10px;
  overflow: hidden;
}
.main_left_img img{
  width: 70px;
  height: 70px;
}
.main{
  display: flex;
  justify-content: space-between;
  align-content:center;
  margin-top: 10px;
}
.main_left{
  display: flex;
  justify-content: start;
  align-content:center;
  margin-left: 49px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.order-body {
  padding-top: 10px;
  background: #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 50px;
}
.title_name :hover {
  color:#000;
}
.order-body .order-item{
  padding: 10px;
  border-radius: 5px;
  margin: 10px 10px;
  background: #fff;
}
.order-body .order-item .shop-p{
  display: inline-block;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  margin: 0px 5px;
  border-radius: 5px;
}
.order-body .order-item .shop-n{
  font-size: 14px;
  font-weight: bold;
}
.order-body .order-item .shop-n:link {
  color:#000;
}
.order-body .order-item .shop-n:visited {
  color:#000;
}
.order-body .order-item .shop-n:hover {
  color:#000;
}
.order-body .order-item .shop-n:active {
  color:#000;
}

.order-body .order-item .shop-status{
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  padding: 1px 5px;
  color: #eee;
  background: #999;
  position: relative;
  top: 18px;
  left: -70px;
}
.order-body .order-item .order-status{
  font-weight: bold;
  font-size: 12px;
  color: #999;
  position: relative;
  float: right;
}

.order-body .order-item .item-food{
  padding: 5px;
  margin-top: 10px;
}
.order-body .order-item .item-food .food-p{
  margin-left: 45px;
  margin-right: 5px;
  border: 1px solid black;
  display: inline-block;
  height: 60px;
  width: 65px;
  border-radius: 6px;
}
.order-body .order-item .item-food .food-n{
  font-size: 12px;
  margin-left: 5px;
  font-weight: bold;
  position: relative;
  top: 15px;
}
.order-body .order-item .item-food .food-price{
  float: right;
  font-weight: bold;
  position: relative;
  top: 10px;
}
.order-body .order-item .item-food .food-num{
  float: right;
  position: relative;
  top: 25px;
  font-size: 10px;
  right: -18px;
  color: #aaa;
}
</style>
