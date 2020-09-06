<template>
  <div>
    <van-tabs v-model="activeOrder">
  <van-tab v-for="(item,index) in  orderList" :key="index" :title="item.title" class="order-body">
    <div class="test" ref="menuWrapper">
      <div >
    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/1cde.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">A米汉堡</a>
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
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/d64c553.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">烤肉拌饭</a>
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
            <img src="../images/3.jpg" alt="">
          </div>
          <div class="main_left_title" style="line-height:70px;margin-left:10px">
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/9ecd.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">杨铭宇黄焖鸡米饭</a>
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
            <img src="../images/2.jpg" alt="">
          </div>
          <div class="main_left_title" style="line-height:70px;margin-left:10px">
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/4c981e4.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">格子那只水饺</a>
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
            <img src="../images/4.jpg" alt="">
          </div>
          <div class="main_left_title" style="line-height:70px;margin-left:10px">
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>

    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/1b718f.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">食尚便当</a>
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
            <img src="../images/5.jpg" alt="">
          </div>
          <div class="main_left_title" style="line-height:70px;margin-left:10px">
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>


    <div class="order">
      <div class="title" style="">
        <div class="title_left">
          <div class="title_img">
            <a href=""><img src="../images/880259b.jpg" alt=""></a>
          </div>
          <div class="title_main">
            <div class="title_name" style="font-size:14px;font-weight:bold"><a href="">翔仔弯</a>
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
            <img src="../images/6.jpg" alt="">
          </div>
          <div class="main_left_title" style="line-height:70px;margin-left:10px">
            <span>eeeeeeeeeeeeeeeeee</span>
          </div>
        </div>
        <div class="mian_right">
          <div>
            <div style="float: right;font-weight: bold;position: relative;top: 20px;">¥9</div>
            <div style=" float: right;position: relative;top: 35px;font-size: 10px;right: -18px;color: #aaa;">共1件</div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    <!-- 
    <div class="order-item">
      <div class="item">
        <div class="item-head">
          <a class="shop-p" href=""><img width="39px" height="39px" src="../images/9ecd.jpg" ></a>
          <a class="shop-n" href="">杨铭宇黄焖鸡米饭</a>
          <i class="icon-keyboard_arrow_right icon"></i>
          <span class="shop-status" text-align="left">本店已休息</span>
          <span class="order-status">已送达</span>
        </div>
        <div class="item-food">
          <span class="food-p"><img width="70px" height="60px" src="../images/2.jpg" ></span>
          <span class="food-n">食物名称</span>
          <span class="food-price">¥9</span>
          <span class="food-num">共1件</span>
        </div>
      </div>
    </div>
    <div class="order-item">
      <div class="item">
        <div class="item-head">
          <a class="shop-p" href=""><img width="39px" height="39px" src="../images/d64c553.jpg" ></a>
          <a class="shop-n" href="">烤肉拌饭</a>
          <i class="icon-keyboard_arrow_right icon"></i>
          <span class="shop-status">本店已休息</span>
          <span class="order-status">已送达</span>
        </div>
        <div class="item-food">
          <span class="food-p"><img width="70px" height="60px" src="../images/3.jpg" ></span>
          <span class="food-n">食物名称</span>
          <span class="food-price">¥9</span>
          <span class="food-num">共1件</span>
        </div>
      </div>
    </div>
    <div class="order-item">
      <div class="item">
        <div class="item-head">
          <a class="shop-p" href=""><img width="39px" height="39px" src="../images/4c981e4.jpg" ></a>
          <a class="shop-n" href="">格子那只水饺</a>
          <i class="icon-keyboard_arrow_right icon"></i>
          <span class="shop-status">本店已休息</span>
          <span class="order-status">已送达</span>
        </div>
        <div class="item-food">
          <span class="food-p"><img width="70px" height="60px" src="../images/4.jpg" ></span>
          <span class="food-n">食物名称</span>
          <span class="food-price">¥9</span>
          <span class="food-num">共1件</span>
        </div>
      </div>
    </div>
    <div class="order-item">
      <div class="item">
        <div class="item-head">
          <a class="shop-p" href=""><img width="39px" height="39px" src="../images/1b718f.jpg" ></a>
          <a class="shop-n" href="">食尚便当</a>
          <i class="icon-keyboard_arrow_right icon"></i>
          <span class="shop-status">本店已休息</span>
          <span class="order-status">已送达</span>
        </div>
        <div class="item-food">
          <span class="food-p"><img width="70px" height="60px" src="../images/5.jpg" ></span>
          <span class="food-n">食物名称</span>
          <span class="food-price">¥9</span>
          <span class="food-num">共1件</span>
        </div>
      </div>
    </div>
    <div class="order-item">
      <div class="item">
        <div class="item-head">
          <a class="shop-p" href=""><img width="39px" height="39px" src="../images/880259b.jpg" ></a>
          <a class="shop-n" href="">翔仔弯</a>
          <i class="icon-keyboard_arrow_right icon"></i>
          <span class="shop-status">本店已休息</span>
          <span class="order-status">已送达</span>
        </div>
        <div class="item-food">
          <span class="food-p"><img width="70px" height="60px" src="../images/6.jpg" ></span>
          <span class="food-n">食物名称</span>
          <span class="food-price">¥9</span>
          <span class="food-num">共1件</span>
        </div>
      </div>
    </div> -->
  </van-tab>
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
import BScroll from 'better-scroll'
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

  },
  mounted(){

    this.$nextTick(() => {
      console.log(this.$refs.menuWrapper[0])
      new BScroll(this.$refs.menuWrapper[0], {
        click: true, // better-scroll会派发一个click事件
        mouseWheel: true    
      })

    })
  }
}
</script>

<style scoped>
  .test{
    /*position: absolute;*/
    width: 100%;
    overflow: hidden;
    height:500px;
  }
.order{
  /*height: 100%;*/
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
  width: 100%;
  height: 100%;
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
