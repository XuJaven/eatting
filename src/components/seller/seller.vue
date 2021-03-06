<template lang="html">
  <div class="seller" ref="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <i class="icon icon-favorite" :class="{'active': favorite}" @click="toggleFavorite"></i>
          <p class="text">{{favoriteText}}</p>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul class="supports" v-if="seller.supports">
          <li class="support-item border-1px" v-for="(item,index) in seller.supports" :key=index>
            <span class="icon" :class="classMap[seller.supports[index].type]"></span>
            <span class="text">{{seller.supports[index].description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="(pic,index) in seller.pics" :key=index>
              <img :src="pic" alt="" ref="pic">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="(info,index) in seller.infos" :key=index>{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import star from '@/components/star/star.vue'
import split from '@/components/split/split.vue'
import BScroll from 'better-scroll'
import {saveToLocal, loadFromLocal} from '@/assets/js/store.js'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      favorite: (() => {
        return loadFromLocal(this.seller.id, 'favorite', false)
      })() // 立即执行函数，从localStorage获取favorite的值
    }
  },
  computed: {
    /* favoriteText是根据favorite的
      值而变化的，所以在计算属性中 */
    favoriteText() {
      if (this.favorite === false) {
        return '收藏'
      } else {
        return '已收藏'
      }
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'] // 通过seller.supports[index].type映射对应的className
  },
  watch: { // watch监听，seller的更新时重新计算better-scroll
    seller() {
      this.$nextTick(() => {
        this._initScroll()
        this._initPics()
      })
    }
  },
  mounted() { // 组件已经挂载到DOM上了
    this.$nextTick(() => {
      this._initScroll()
      this._initPics()
    })
  },
  methods: {
    _initScroll() {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.seller, {
          click: true,
          mouseWheel: true
        })
      } else {
        this.scroll.refresh() // 因为watch执行的比mounted晚，所以要重置better-scroll
      }
    },
    _initPics() {
      if (this.seller.pics) {
        // console.log('pic', this.$refs.pic)
        let picWidth = this.$refs.pic[0].clientWidth // 原生JS获取图片的宽度
        // console.log('picWidth', picWidth)
        let margin = 6
        let width = (picWidth + margin) * this.seller.pics.length - margin
        this.$refs.picList.style.width = width + 'px'
        // console.log('xxxx', this.$refs.picList.offsetWidth)
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,  // 因为是横向滚动，所以设置scrollX为true
              eventPassthrough: 'vertical', // 忽略纵向滚动
              click: true
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    },
    toggleFavorite(event) {
      if (!event._constructed) {
        return
      }
      this.favorite = !this.favorite
      saveToLocal(this.seller.id, 'favorite', this.favorite)
    }
  },
  components: {
    star,
    split
  }
}
</script>

<style lang="scss">
@import '../../assets/sass/mixin.scss';

.seller {
  position: absolute;
  top: 190px;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  margin-bottom:50px;
  .overview {
    position: relative;
    padding: 18px;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: rgb(7,17,27);
      font-size: 14px;
    }
    .desc {
      padding-bottom: 18px;
      font-size: 0;
      @include border-1px(rgba(7,17,27,0.1));
      .star {
        display: inline-block;
        vertical-align: top;
        margin-right: 8px;
      }
      .text {
        display: inline-block;
        vertical-align: top;
        margin-right: 12px;
        line-height: 18px;
        font-size: 10px;
        color: rgb(77,85,93);
      }
    }
    .remark {
      display: flex;
      padding-top: 18px;
      .block {
        flex: 1;
        text-align: center;
        border-right: 1px solid rgba(7,17,27,0.1);
        &:last-child {
          border-right: none;
        }
        h2 {
          margin-bottom: 4px;
          line-height: 10px;
          font-size: 10px;
          color: rgb(147,153,159);
        }
        .content {
          line-height: 24px;
          font-size: 10px;
          color: rgb(7,17,27);
          .stress {
            font-size: 24px;
          }
        }
      }
    }
    .favorite {
      position: absolute;
      right: 11px;
      top: 18px;
      width: 50px;
      text-align: center;
      .icon {
        display: block;
        margin-bottom: 4px;
        line-height: 24px;
        font-size: 24px;
        color: #d4d6d9;
        &.active {
          color: rgb(240,20,20);
        }
      }
      .text {
        line-height: 10px;
        font-size: 10px;
        color: rgb(77,85,93);
      }
    }
  }
  .bulletin {
    padding: 18px 18px 0 18px;
    .title {
      margin-bottom: 8px;
      line-height: 14px;
      color: rgb(7,17,27);
      font-size: 14px;
    }
    .content-wrapper {
      padding: 0 12px 16px 12px;
      @include border-1px(rgba(7,17,27,0.1));
      .content {
        line-height: 24px;
        font-size: 12px;
        color: rgb(240,20,20);
      }
    }
    .supports {
      .support-item {
        padding: 16px 12px;
        font-size: 0;
        @include border-1px(rgba(7,17,27,0.1));
        &:last-child {
          @include border-none;
        }
        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          vertical-align: top;
          margin-right: 6px;
          background-size: 16px 16px;
          background-repeat: no-repeat;
          &.decrease {
              @include bg-image("decrease_4");
          }
          &.discount {
              @include bg-image("discount_4");
          }
          &.guarantee {
              @include bg-image("guarantee_4");
          }
          &.invoice {
              @include bg-image("invoice_4");
          }
          &.special {
              @include bg-image("special_4");
          }
        }
        .text {
          line-height: 16px;
          font-size: 12px;
          color: rgb(7,17,27);
        }
      }
    }
  }
  .pics {
    padding: 18px;
    .title {
      margin-bottom: 12px;
      line-height: 14px;
      color: rgb(7,17,27);
      font-size: 14px;
    }
    .pic-wrapper {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      .pic-list {
        font-size: 0;
        .pic-item {
          display: inline-block;
          margin-right: 6px;
          width: 120px;
          height: 90px;
          &:last-child {
            margin-right: 0;
          }
          img {
            width: 120px;
            height: 90px;
          }
        }
      }
    }
  }
  .info {
    padding: 18px 18px 0 18px;
    color: rgb(7,17,27);
    .title {
      padding-bottom: 12px;
      line-height: 14px;
      font-size: 14px;
      @include border-1px(rgba(7,17,27,0.1));
    }
    .info-item {
      padding: 16px 12px;
      line-height: 16px;
      font-size: 12px;
      @include border-1px(rgba(7,17,27,0.1));
      &:last-child {
        @include border-none();
      }
    }
  }
}
</style>
