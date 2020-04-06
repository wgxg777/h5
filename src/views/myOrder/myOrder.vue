<template>
  <div class="myOrder">
    <div class="top">
      <van-icon name="arrow-left" class="icon" size="0.4rem" @click="back" />
      <div class="title1">我的订单</div>
    </div>
    <div class="copy"></div>
    <van-tabs v-model="activeName" animated color="#3FAE29" line-width="1.3rem">
      <van-tab title="全部" name="1">
        <div class="ov">
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待支付" name="2">
        <div class="ov">
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待发货" name="3">
        <div class="ov">
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货" name="4">
        <div class="ov">
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待评价" name="5">
        <div class="ov">
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
          <div class="all bgw mt10">
            <div class="flex flex-pack-between timeAndType flex-align-center">
              <div class="ml10">2020-04-05 12:06:44</div>
              <div class="mr10">待发货</div>
            </div>
            <div class="content flex flex-pack-between flex-align-center">
              <van-image
                width="1.6rem"
                height="1.6rem"
                src="http://img.nodebook.top/2020_02_27_04_29_4424203image/jpeg"
                class="ml10"
              />
              <div class="mr10">￥100</div>
            </div>
            <div class="bottom flex flex-pack-between flex-align-center">
              <div></div>
              <div class="mr10">共一份商品，实付100元</div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: '1',
    };
  },
  methods: {
    back() {
      this.$router.back(-1);
    },
  },
  mounted() {
    this.activeName = this.$route.query.index;
  },
};
</script>

<style lang="scss" scoped>
.myOrder {
  background: rgba(243, 243, 243, 0.836);
}
::v-deep .van-tab {
  flex-basis: 20% !important;
}
.ov {
  overflow: scroll;
  height: 88vh;
}
.all {
  height: 178px;
}
.timeAndType {
  height: 47px;
  font-size: 14px;
}
.content {
  height: 82px;
  background: blanchedalmond;
}
.bottom {
  height: 50px;
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
  margin-left: 160px;
  font-size: 15px;
}
</style>
