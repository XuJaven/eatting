<template lang="html">
  <div class="ratings" ref="ratings">
    <div class="ratings-content" >
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <p class="title">综合评分</p>
          <p class="rank">高于周边商家{{seller.rankRate}}%</p>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect @select="selectRating" @toggle="toggleContent" :ratings="ratings" :selectType="selectType" :onlyContent="onlyContent"></ratingselect>
      <div class="rating-wrapper" >
        <ul>
          <li v-for="(rating,index) in ratings" :key=index class="rating-item" v-show="needShow(rating.rateType, rating.text)">
            <div class="avatar">
              <img :src="rating.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend">
                <span class="icon-thumb_up" v-show="rating.rateType === 0"></span>
                <span class="icon-thumb_down" v-show="rating.rateType === 1"></span>
                <span class="item" v-for="(item,index) in rating.recommend" :key=index>{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | changeDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star.vue'
import ratingselect from '@/components/ratingselect/ratingselect.vue'
import split from '@/components/split/split.vue'
import {formateDate} from '@/assets/js/date.js'
import BScroll from 'better-scroll'

const ALL = 2
const ERR_OK = 0

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      ratings: [],
      selectType: ALL,   // 选择要看的评论的类型
      onlyContent: true // 控制评论是只看内容还是看内容和评价
    }
  },
  methods: {
    selectRating(type) {
      this.selectType = type
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    toggleContent() {
      this.onlyContent = !this.onlyContent
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    needShow(type, text) {
      if (this.onlyContent && !text) {
        return false  // 如果要显示内容，而又没有内容，则不显示
      }
      if (this.selectType === ALL) {
        return true   // 如果要显示全部，就全显示
      } else {
        return type === this.selectType  // 显示要求的类型
      }
    }
  },
  filters: {
    changeDate(time) {
      let date = new Date(time)
      return formateDate(date, 'yyyy-MM-dd')
    }
  },
  created() {
  /*   this.$http.get('/api/ratings').then((res) => {
      // if (res.data.errno === ERR_OK) {
      this.ratings = res.data
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.ratings, {
          click: true,
          mouseWheel: true
        })
      })
      // }
      // console.log('ratings', this.ratings)
    }) */
    this.ratings = this.$store.state.ratings
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.ratings, {
        click: true,
        mouseWheel: true
      })
    })
  },
  components: {
    star,
    ratingselect,
    split
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/mixin.scss';

.ratings {
  position: absolute;
  top: 190px;
  bottom: 0;
  margin-bottom:50px;
  left: 0;
  width: 100%;
  overflow: hidden;
  .overview {
    display: flex;
    padding: 18px 0;
    .overview-left {
      flex: 0 0 137px;
      padding: 6px 0;
      width: 137px;
      border-right: 1px solid rgba(7,17,27,0.1);
      text-align: center;
      @media only screen and (max-width: 320px) {
        flex: 0 0 120px;
        width: 120px;
      } // 适应iphone5等小屏幕手机
      .score {
        margin-bottom: 6px;
        line-height: 28px;
        font-size: 24px;
        color: rgb(255,153,0);
      }
      .title {
        margin-bottom: 8px;
        line-height: 12px;
        font-size: 12px;
        color: rgb(7,17,27);
      }
      .rank {
        line-height: 10px;
        font-size: 10px;
        color: rgb(147,153,159);
      }
    }
    .overview-right {
      flex: 1;
      padding: 6px 0 6px 24px;
      @media only screen and (max-width: 320px) {
        padding-left: 6px;
      }
      .score-wrapper {
        margin-bottom: 8px;
        font-size: 0;
        .title {
          display: inline-block;
          vertical-align: top;
          line-height: 18px;
          font-size: 12px;
          color: rgb(7,17,27);
        }
        .star {
          display: inline-block;
          margin: 0 12px;
          vertical-align: top;
        }
        .score {
          display: inline-block;
          line-height: 18px;
          vertical-align: top;
          font-size: 12px;
          color: rgb(255,153,0);

        }
      }
      .delivery-wrapper {
        font-size: 0;
        .title {
          display: inline-block;
          vertical-align: top;
          line-height: 18px;
          font-size: 12px;
          color: rgb(7,17,27);
        }
        .delivery {
          display: inline-block;
          vertical-align: top;
          margin-left: 12px;
          line-height: 18px;
          font-size: 12px;
          color: rgb(147,153,159);
        }
      }
    }
  }
  .rating-wrapper {
    padding: 0 18px;
    .rating-item {
      display: flex;
      padding: 18px 0;
      @include border-1px(rgba(7,17,27,0.1));
      .avatar {
        flex: 0 0 28px;
        width: 28px;
        height: 28px;
        margin-right: 12px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
        }
      }
      .content {
        position: relative;
        flex: 1;
        .name {
          margin-bottom: 4px;
          line-height: 12px;
          font-size: 10px;
          color: rgb(7,17,27);
        }
        .star-wrapper {
          margin-bottom: 6px;
          font-size: 0;
          .star {
            display: inline-block;
            vertical-align: top;
            margin-right: 6px;
          }
          .delivery {
            display: inline-block;
            vertical-align: top;
            line-height: 12px;
            font-size: 10px;
            color: rgb(147,153,159);
          }
        }
        .text {
          margin-bottom: 8px;
          line-height: 18px;
          font-size: 12px;
          color: rgb(7,17,27);
        }
        .recommend {
          line-height: 16px;
          font-size: 0;
          .icon-thumb_up {
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 12px;
            color: rgb(0,160,220);
          }
          .icon-thumb_down {
            display: inline-block;
            margin: 0 8px 4px 0;
            font-size: 12px;
            color: rgb(183,187,191);
          }
          .item {
            display: inline-block;
            margin: 0 8px 4px 0;
            padding: 0 6px;
            border: 1px solid rgba(7,17,27,0.1);
            border-radius: 1px;
            font-size: 9px;
            color: rgb(147,153,159);
            background: #fff;
          }
        }
        .time {
          position: absolute;
          top: 0;
          right: 0;
          line-height: 12px;
          font-size: 10px;
          color: rgb(147,153,159);
        }
      }
    }
  }
}
</style>
