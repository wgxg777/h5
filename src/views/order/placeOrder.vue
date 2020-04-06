<template>
  <div class="order">
    <div class="top">
      <van-icon name="arrow-left" class="icon" size="0.4rem" @click="back" />
      <div class="title1">结算</div>
    </div>
    <div class="copy"></div>
    <div class="address flex bgw">
      <div @click="selectAdd">
        <div>{{address.address}}</div>
        <div style=" font-size: 13px;">{{address.name}}{{address.tel }}</div>
      </div>
      <div>
        <van-icon name="arrow" size="0.4rem" class="rightIcon"  />
      </div>
    </div>
    <van-cell
      class="mt10"
      title="送达时间"
      is-link
      :value="form.deliveryTime"
      @click="showPicker = true"
    />
    <van-cell is-link class="celld">
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <van-image

          v-for=" item in list.list"
          v-bind:key="item.id"
           :v-if="item.cover"
          width="0.8rem"
          height="0.8rem"
          :src="item.cover"
          class="img ml10"
        />
      </template>
    </van-cell>

    <van-cell-group>
      <van-field
        class="mt5"
        v-model="form.message"
        rows="1"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        input-align="right"
      />
    </van-cell-group>

    <van-cell-group class="mt10">
  <van-cell title="商品金额" :value="`￥${list.total}`" />
  <van-cell title="运费" value="0"  />
</van-cell-group>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-submit-bar
  :price="list.total*100"
  button-text="提交订单"
  @submit="onSubmit"
/>
  </div>
</template>

<script>
import { Toast } from 'vant';

const time = {
  今天: [
    '7:00~7:29',
    '7:30~7:59',
    '8:00~8:29',
    '8:30~8:59',
    '9:00~9:29',
    '9:30~9:59',
    '10:00~10:29',
    '10:30~10:59',
    '11:00~11:29',
    '11:30~11:59',
    '12:00~12:29',
    '12:30~12:59',
    '13:00~13:29',
    '13:30~13:59',
    '14:00~14:29',
    '14:30~14:59',
    '15:00~15:29',
    '15:30~15:59',
    '16:00~16:29',
    '16:30~16:59',
    '17:00~17:29',
    '17:30~17:59',
    '18:00~18:29',
    '18:30~18:59',
    '19:00~19:29',
    '19:30~19:59',
    '20:00~20:29',
    '20:30~20:59',
    '21:00~21:29',
    '21:30~21:59',
    '22:00~22:29',
    '22:30~22:59',
    '23:00~23:29',
    '23:30~23:59',
  ],
  明天: [
    '7:00~7:29',
    '7:30~7:59',
    '8:00~8:29',
    '8:30~8:59',
    '9:00~9:29',
    '9:30~9:59',
    '10:00~10:29',
    '10:30~10:59',
    '11:00~11:29',
    '11:30~11:59',
    '12:00~12:29',
    '12:30~12:59',
    '13:00~13:29',
    '13:30~13:59',
    '14:00~14:29',
    '14:30~14:59',
    '15:00~15:29',
    '15:30~15:59',
    '16:00~16:29',
    '16:30~16:59',
    '17:00~17:29',
    '17:30~17:59',
    '18:00~18:29',
    '18:30~18:59',
    '19:00~19:29',
    '19:30~19:59',
    '20:00~20:29',
    '20:30~20:59',
    '21:00~21:29',
    '21:30~21:59',
    '22:00~22:29',
    '22:30~22:59',
    '23:00~23:29',
    '23:30~23:59',
  ],
};

export default {
  data() {
    return {
      form: {
        message: '',
        deliveryTime: '请选择送达时间',
      },
      list: this.$store.state.order,
      total: '',
      showPicker: false,
      columns: [{ values: Object.keys(time) }, { values: time['今天'] }],
    };
  },
  methods: {
    selectAdd() {
      this.$router.push({ path: '/myAddress?show=1' });
    },
    onSubmit() {
      if (this.form.deliveryTime === '请选择送达时间' || this.form.deliveryTime === '') {
        Toast('请选择送达时间');
        return;
      }
      Toast('支付成功');
      const ids = [];
      this.$store.state.order.list.forEach((item) => {
        ids.push(item.id);
      });
      console.log(ids);

      this.$store.commit('deleteCar', ids);

      setTimeout(() => { this.$router.push({ path: '/' }); }, 2000);
    },
    back() {
      this.$router.back(-1);
    },
    onConfirm(value) {
      this.form.deliveryTime = value.join('');
      this.showPicker = false;
    },
    getTotal(list) {
      let total = 0;

      list.forEach((item) => {
        total += item.price * item.num;
      });
      return total.toFixed(2);
    },
  },
  computed: {
    address() {
      return this.$store.state.addressDefault;
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style lang="scss" scoped>
.order {
  background-color: rgba(200, 200, 200, 0.5);
}
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
  margin-left: 170px;
  font-size: 15px;
}
.address {
  height: 80px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
  padding-left: 15px;
}
.address > div > div {
  width: 330px;
  margin-top: 5px;
  line-height: 23px;
  color: #131313;
  font-size: 15px;
  font-weight: 600;
  margin-left: 5px;
}
.rightIcon {
  line-height: 80px;
}
.celld {
  height: 50px;
}
</style>
