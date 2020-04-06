<template>
  <div class="first">
    <van-search
      placeholder="请输入搜索关键词"
      readonly
      @click="jumpSearch"
      class="searchInput"
      shape="round"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#3FAE29" v-if="this.$store.state.index === 0">
      <van-swipe-item v-for="item in carouselSrc" v-bind:key="item.id" @click="swipeClick(item)">
        <img :src="item.src" class="img" />
      </van-swipe-item>
    </van-swipe>
    <div class="icons" @scroll.passive="getScroll($event)">
      <div class="flex">
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/54218/17/15626/10939/5dc943c1E83ec6248/5d79f0aa0409960c.png"
          />
          <div style="text-align:center">买菜</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/91711/37/2068/9948/5dc943fbE521063a3/f7bb4a0bff29de56.png"
          />
          <div style="text-align:center">水果</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/78727/5/15223/9818/5dcd0af1Eedadaf17/4e3ede9e1046b17f.png"
          />
          <div style="text-align:center">鲜花</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/72878/4/15403/9388/5dcd0b1bEdc09cb1e/7d8eb3bd65d9e457.png"
          />
          <div style="text-align:center ;font-size:10px">送药上门</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
      </div>
      <div class="flex">
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/85459/31/2223/7469/5dcd0bccE231f1acd/3e9a7e6117c23567.png"
          />
          <div style="text-align:center">家居时尚</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/59203/20/15701/7963/5dcd0be9E90052f56/e977ade50ca758d3.png"
          />
          <div style="text-align:center">烘培蛋糕</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/58944/6/15355/7008/5dcd0c2cEd8dd594f/4639f5e3ed6e1463.png"
          />
          <div style="text-align:center">签到</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/100645/4/8403/7469/5e0482f6E3158988e/6fc2fcc20a9f3c41.png"
          />
          <div style="text-align:center">鲜豆庄园</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/106411/17/13059/7654/5e4fe0c8Eddfa40dc/a5eab0f36b75b671.png"
          />
          <div style="text-align:center">领现金</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
        <div class="flex-v pd">
          <van-image
            width="1.3513513513513513rem"
            height="1.3513513513513513rem"
            fit="cover"
            src="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
          />
          <div style="text-align:center">超市</div>
        </div>
      </div>
    </div>
    <div class="soc">
      <div class="inx" v-bind:style="{  marginRight: px + 'rem' }"></div>
    </div>

    <!-- <van-grid :column-num="5" icon-size="50px" :border="false" class="vanGrid">
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/79434/2/755/7787/5cef9114E9410b0d8/c89876ee93a3f18a.png"
        text="超市"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/54218/17/15626/10939/5dc943c1E83ec6248/5d79f0aa0409960c.png"
        text="买菜"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/91711/37/2068/9948/5dc943fbE521063a3/f7bb4a0bff29de56.png"
        text="水果"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/78727/5/15223/9818/5dcd0af1Eedadaf17/4e3ede9e1046b17f.png"
        text="鲜花"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/72878/4/15403/9388/5dcd0b1bEdc09cb1e/7d8eb3bd65d9e457.png"
        text="送药上门"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/85459/31/2223/7469/5dcd0bccE231f1acd/3e9a7e6117c23567.png"
        text="家居时尚"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/59203/20/15701/7963/5dcd0be9E90052f56/e977ade50ca758d3.png"
        text="烘培蛋糕"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/58944/6/15355/7008/5dcd0c2cEd8dd594f/4639f5e3ed6e1463.png"
        text="签到"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/100645/4/8403/7469/5e0482f6E3158988e/6fc2fcc20a9f3c41.png"
        text="鲜豆庄园"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/106411/17/13059/7654/5e4fe0c8Eddfa40dc/a5eab0f36b75b671.png"
        text="领现金"
      />
    </van-grid>

    <van-grid :column-num="5" icon-size="50px" :border="false">
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/74568/14/15299/7923/5dcd0f19E785953c0/ca7b732ab0851ff4.png"
        text="平台公示"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/92381/16/2999/8110/5ddbd64aEa9da874c/8f9b1b161d2a638f.png"
        text="大牌免运"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/91711/37/2068/9948/5dc943fbE521063a3/f7bb4a0bff29de56.png"
        text="水果"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/78727/5/15223/9818/5dcd0af1Eedadaf17/4e3ede9e1046b17f.png"
        text="鲜花"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/72878/4/15403/9388/5dcd0b1bEdc09cb1e/7d8eb3bd65d9e457.png"
        text="送药上门"
      />
      <van-grid-item
        icon="https://img30.360buyimg.com/mobilecms/jfs/t1/85459/31/2223/7469/5dcd0bccE231f1acd/3e9a7e6117c23567.png"
        text="家居时尚"
      />
    </van-grid>-->

    <div class="flex flex-pack-between ml10 mr10">
      <div class="title">限时抢购</div>
      <div class="more">
        更多产品
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="flex flex-align-start ml10 mr10 flashSale mt10">
      <div class="flex flex-v mr10">
        <van-image
          width=" 2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v mr10">
        <van-image
          width="2.8rem"
          height="2.8rem"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div style="text-align:center">新鲜的猫肉</div>
        <div class="pay">￥100</div>
      </div>
    </div>

    <div class="flex flex-pack-between ml10 mr10">
      <div class="title">猜你喜欢</div>
      <div class="more">
        更多产品
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="flex flex-wrap ml5 mr5">
      <div class="flex flex-v recommend flex-1">
        <van-image
          width="3.7rem"
          height="3.7rem"
          fit="cover"
          src="//img.alicdn.com/img/i3/161960079/O1CN01Sirv521CSDs6NZrHM_!!0-saturn_solar.jpg_210x210.jpg"
        />
        <div class="mt5" style="text-align:left">面包</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v recommend flex-1">
        <van-image
          width="3.7rem"
          height="3.7rem"
          fit="cover"
          src="//gw2.alicdn.com/bao/uploaded/i2/2116537128/O1CN01sTjAYO22WfjyJEiG0_!!2116537128.jpg_210x210.jpg"
        />
        <div class="mt5" style="text-align:left">鸡翅</div>
        <div class="pay">￥84</div>
      </div>
      <div class="flex flex-v recommend flex-1">
        <van-image
          width="3.7rem"
          height="3.7rem"
          fit="cover"
          src="http://img.nodebook.top/2020_02_27_04_18_1663786image/jpeg"
        />
        <div class="mt5" style="text-align:left">金针菇</div>
        <div class="pay">￥100</div>
      </div>
      <div class="flex flex-v recommend flex-1">
        <van-image
          width="3.7rem"
          height="3.7rem"
          fit="cover"
          src="http://img.nodebook.top/2020_02_27_07_56_1236673image/jpeg"
        />
        <div class="mt5" style="text-align:left">无锡阳山水蜜桃2个 500g以上</div>
        <div class="pay">￥100</div>
      </div>
    </div>
  </div>
</template>


<script>
import { getIndexCarousel } from '@/http/indexApi';

export default {
  name: 'firstPage',
  data() {
    return {
      active: 0,
      carouselSrc: [],
      px: 25 / 37.5,
    };
  },
  watch: {
    $route() {
      this.init();
    },
  },
  methods: {
    swipeClick(e) {
      console.log(e);
      this.$router.push({ path: `/productDetail?id=${e.id}` });
    },
    onChange() {
      console.log(this.active);
    },
    jumpSearch() {
      console.log('jumpsearh');
    },
    init() {
      getIndexCarousel().then((res) => {
        this.carouselSrc = res.data.list;
      });
    },
    onChangeMenu(index) {
      console.log(index);
    },
    getScroll(e) {
      const notRolled = e.target.scrollWidth - e.target.scrollLeft - e.target.clientWidth;
      const scrollBar = e.target.scrollWidth - e.target.clientWidth;
      const px = (notRolled / scrollBar) * 25;
      this.px = px / 37.5;
      console.log(px);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.first {
}
.my-swipe {
  padding-bottom: 30px;
  margin-top: 45px;
}
::v-deep .van-swipe-item {
}
.searchInput {
  height: 45px;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
}
.img {
  width: 100%;
  height: auto;
}
::v-deep .van-swipe__indicator {
  background: rgba(63, 174, 41, 1);
}
.slidingMenu ::v-deep .van-swipe__indicator {
  background: rgba(63, 174, 41, 1);
  width: 15px;
  height: 4px;
  border-radius: 5px;
}
::v-deep .van-grid-item__content {
  padding: 5px 5px;
}
::v-deep .van-grid-item__icon + .van-grid-item__text {
  margin-top: 5px;
}
.slidingMenu {
  height: 185px;
}
.more {
  line-height: 24px;
}
.flashSale {
  overflow: scroll;
  &::-webkit-scrollbar {
    //width: 0;
    //height: 0;
    display: none;
  }
}
.pay {
  color: rgb(255, 30, 25);
  font-family: PingFangSC-Regular;
  font-weight: bold;
  line-height: 17px;
  margin-top: 10px;
  text-align: center;
}
.recommend {
  border: 1px solid rgba(246, 246, 246, 1);
  padding: 20px;
}
.soc {
  width: 50px;
  height: 5px;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 8px;
  margin: 20px auto 0 auto;
}
.inx {
  width: 25px;
  height: 5px;
  border-radius: 8px;
  background-color: #3fae29;
  float: right;
}
.vanGrid {
  overflow: scroll;
}
.icons {
  width: 100%;
  height: 190px;
  margin-right: 10px;

  &::-webkit-scrollbar {
    //width: 0;
    //height: 0;
    display: none;
  }
  overflow: scroll;
}
.pd {
  margin: 1.8px 12.3px;
}
</style>
