<template>
  <div>
    <div class="top">
      <van-icon name="arrow-left" class="icon" size="0.4rem" @click="back" />
      <div class="title1">收货地址</div>
    </div>
    <div class="copy"></div>
    <van-address-edit
      :address-info="info"
      :area-list="areaList"
      show-postal
      :show-delete="isEdit"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Toast } from 'vant';
import areaList from '@/assets/areaList';

export default {
  data() {
    return {
      isEdit: false,
      areaList,
      searchResult: [],
      info: this.$route.params,
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
    onSave(e) {
      e.address = e.province + e.city + e.county + e.addressDetail;
      console.log(e);
      Toast('save');
      if (this.isEdit) {
        this.$store.commit('editAddress', e);
        this.back();
      } else {
        this.$store.commit('addAddress', e);
        this.back();
      }
    },
    onDelete(e) {
      Toast('delete');
      this.$store.commit('deleteAddress', e);
      this.back();
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  mounted() {
    if (Object.keys(this.$route.params).length !== 0) {
      this.isEdit = true;
    }
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
.icon {
  float: left;
  line-height: 40px;
  padding-left: 10px;
}
.title1 {
  margin-left: 160px;
  font-size: 15px;
}
</style>
