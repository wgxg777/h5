<template>
  <div>
    <div class="top"> <van-icon name="arrow-left" class="icon"  size="0.4rem" @click="back"  />
     <div class="title1">收货地址</div></div>
    <div class="copy"></div>
    <van-address-list
      class="add"
      v-model="chosenAddressId"
      :list="list"
      :switchable="switShow"
      @select="select"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>


export default {
  data() {
    return {
      chosenAddressId: this.$store.state.addressDefault.id || '',
      switShow: false,

    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    onAdd() {
      this.$router.push({ path: '/addAddress' });
    },
    onEdit(item) {
      this.$router.push({ name: 'addAddress', params: item });
    },
    select(e) {
      console.log(e);
      this.$store.commit('selectAddress', e);
      this.$router.back(-1);
    },
  },
  mounted() {
    if (this.$route.query.show === '1') {
      this.switShow = true;
    }
  },
  computed: {
    list() {
      return this.$store.state.addressList;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {

  height: 40px;
  line-height: 40px;
  width: 375px;
  position: fixed;
  top: 0;
  z-index: 99999;
  background: white;
}

.copy {
  height: 40px;
  line-height: 40px;
  width: 375px;
}
.icon{
    float: left;
    line-height: 40px;
    padding-left: 10px;
}
.title1{
  margin-left: 160px;
  font-size: 15px;
}
</style>
