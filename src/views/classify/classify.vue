<template>
  <div class="flex">
    <van-sidebar v-model="activeKey" class="classify" @change="onChange">
      <van-sidebar-item v-for="(item ,index) in titleList" v-bind:key="index" :title="item" />
    </van-sidebar>
    <div class="copy"></div>
    <div class="flex flex-v rightCon">
      <div
        class="classView flex flex-align-center"
        v-for=" (classView,index) in classList"
        v-bind:key="index"
      >
        <van-image
          class="flex-1 img"
          width="1.92rem"
          height="1.92rem"
          :src="JSON.parse(classView.propaganda)[0].url"
        />
        <div class="ml20 flex-2">
          <div style="font-size: 0.35rem;">{{classView.name}}</div>
          <div style="color: #8c8c8c;overflow:hidden;">{{classView.bewrite}}</div>
          <div class="flex flex-pack-between">
            <div class="pay">￥{{classView.price}}</div>
            <van-icon
              class="icon"
              name="shopping-cart-o"
              color="rgba(63, 174, 41, 1)"
              size="0.7rem"
              @click="addCar(classView)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getOneAllGoods } from '@/http/indexApi';
import { Toast } from 'vant';

export default {
  data() {
    return {
      titleList: [
        '新鲜水果',
        '新鲜水果',
        '安心蔬菜',
        '肉禽蛋',
        '海鲜水产',
        '营养早餐',
        '豆制品',
        '精选好货',
        '米面粮油',
        '调味剂',
        '乳品烘培',
      ],
      activeKey: 0,
      searchkey: 13,
      classList: [],
    };
  },
  methods: {
    addCar(e) {
      console.log(e);
      const obj = { ...e };
      obj.cover = JSON.parse(e.propaganda)[0].url;
      this.$store.commit('add', obj);
      Toast.success({
        message: '添加成功',
        duration: 500,
      });
    },
    init() {
      getOneAllGoods(this.searchkey).then((res) => {
        console.log(res);
        this.classList = res.data;
      });
    },
    onChange(e) {
      this.searchkey = e + 13;
    },
  },
  watch: {
    searchkey(newValue, oldValue) {
      console.log(`newValue${newValue}`);
      console.log(`oldValue${oldValue}`);
      if (newValue !== oldValue) {
        this.init();
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.copy {
  width: 109px;
  height: 100%;
}
.classify {
  width: 109px;
  text-align: center;
  position: fixed;
  left: 0;
}
.classify ::v-deep .van-sidebar-item {
  height: 52px;
}
.classify ::v-deep .van-sidebar-item--select {
  height: 52px;
  border-color: rgba(63, 174, 41, 1);
}
.classView {
  height: 129px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
}
.rightCon {
  width: 265px;
}
.pay {
  color: rgb(255, 30, 25);
  font-family: PingFangSC-Regular;
  font-weight: bold;

  margin-top: 10px;
}
.icon {
  margin-right: 10px;
}
</style>
