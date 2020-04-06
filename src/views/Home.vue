<template>
  <div class="home">
    <first-page v-show="this.$store.state.index === 0"></first-page>
    <classify v-show="this.$store.state.index  === 1"></classify>
    <shopping-cart v-show="this.$store.state.index === 2"></shopping-cart>
    <mine v-show="this.$store.state.index === 3"></mine>
    <div class="bott"></div>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :badge="getCartListLength">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import firstPage from '@/views/firstPage/firstPage.vue';
import classify from '@/views/classify/classify.vue';
import shoppingCart from '@/views/shoppingCart/shoppingCart.vue';
import mine from '@/views/mine/mine.vue';

export default {

  name: 'Home',
  data() {
    return {
      active: 0,
    };
  },
  components: {
    firstPage,
    classify,
    shoppingCart,
    mine,
  },
  methods: {

    onChange() {
      this.$store.commit('setIndex', this.active);
    },
  },

  computed: {
    getCartListLength() { // 通过方法访问
      return this.$store.getters.getCartListLength;
    },
  },
  mounted() {
    this.active = this.$store.state.index;
  },

};
</script>

<style  >
.bott {
  width: 100%;
  height: 50px;
}
</style>
