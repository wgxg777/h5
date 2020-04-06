<template>
  <div class="productDetail">
    <van-image :src="backIcon" @click="back" class="icon" />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" ref="swpie1">
      <van-swipe-item
        v-for="(item,index) in list.carouselList"
        v-bind:key="item"
        @click="swipeClick(index)"
      >
        <img :src="item" class="img" />
      </van-swipe-item>
    </van-swipe>
    <div class="flex flex-v bgw">
      <div class="detailName">{{list.name}}</div>
      <div class="detailBewrite">{{list.bewrite}}</div>
      <div class="pay">￥{{list.price}}</div>
    </div>

    <div class="mt10">
      <div class="flex flex-v bgw specification">
        <div style="font-weight: 800;">规格</div>
        <div>
          <span>净含量</span>
          <span>{{list.weight}}</span>
        </div>
        <div>
          <span>保存条件</span>
          <span>{{list.conditions}}</span>
        </div>
        <div>
          <span>保质期</span>
          <span>{{list.shelf_life}}</span>
        </div>
      </div>
      <div class="mt10">
        <img v-for="(item) in list.detailList" v-bind:key="item" :src="item" class="img" />
      </div>

      <div class="di">我也是有底线的~</div>
      <van-goods-action>
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="getCartListLength"  @click="goCar"/>
        <van-goods-action-button type="warning" text="加入购物车" @click="addCar" />
        <van-goods-action-button type="danger" text="立即购买" @click="buyNow" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { getProductDetail } from '@/http/indexApi';
import backIcon from '@/assets/back_icon.png';
import { ImagePreview } from 'vant';


export default {
  data() {
    return {
      backIcon,
      list: [],
    };
  },

  methods: {
    addCar() {
      this.$store.commit('add', { id: this.list.id });
    },
    back() {
      this.$router.back(-1);
    },
    init() {
      console.log();
      getProductDetail(this.$route.query.id).then((res) => {
        this.list = res.data;
      });
    },
    buyNow() {
      const { list } = this;
      list.num = 1;
      const obj = {};
      obj.list = [];
      obj.list.push(list);
      obj.total = list.price * list.num;
      console.log(obj);
      this.$store.commit('saveOrder', obj);
      this.$router.push({ name: 'placeOrder' });
    },
    goCar() {
      this.$store.commit('setIndex', 2);
      this.$router.go(-1);
    },
    swipeClick(index) {
      const bigThis = this;
      ImagePreview({
        images: [...this.list.carouselList],
        startPosition: index,
        onClose(e) {
          bigThis.$refs.swpie1.swipeTo(e.index);
          // do something
        },
      });
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    getCartListLength() { // 通过方法访问
      return this.$store.getters.getCartListLength;
    },
  },
};
</script>

<style lang="scss" scoped>
.productDetail {
  background-color: rgba(200, 200, 200, 0.5);
}
.my-swipe {
  height: 375px;
}

.img {
  width: 100%;
  height: auto;
  display: block;
}

.icon {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 99;
}
.detailName {
  font-weight: 700;
  width: 100%;
  height: 20px;
  font-size: 16px;
  color: #151513;
  padding-left: 8px;
  box-sizing: border-box;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.detailBewrite {
  width: 100%;
  font-size: 13px;
  color: #878787;
  padding-left: 8px;
  box-sizing: border-box;
  line-height: 20px;
}
.pay {
  color: rgb(255, 30, 25);
  font-family: PingFangSC-Regular;
  font-weight: bold;
  line-height: 17px;
  padding-top: 5px;
  font-weight: 700;
  font-size: 16px;
  padding-left: 8px;
}
.specification > div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
}
.specification > div > span {
  display: inline-block;
  width: 130px;
}
.di {
  text-align: center;
  height: 35px;
  line-height: 35px;
  margin-bottom: 50px;
}
</style>
