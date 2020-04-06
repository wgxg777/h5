<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
}
.flex{display: flex;}/*flex布局*/
.flex-inline{display: inline-flex;}/*行内排列*/
.flex-v{flex-direction:column;}/*垂直布局*/
.flex-1{flex: 1;}
.flex-2{flex: 2;}
.flex-0{flex-shrink:0;}/*不缩放*/
.flex-align-start{align-items: flex-start;}   /*垂直居中*/
.flex-align-center{align-items: center;}   /*垂直居中*/
.flex-align-end{align-items: flex-end;}   /*垂直居中*/
.flex-pack-start{justify-content:flex-start;} /*左对齐*/
.flex-pack-center{justify-content:center;} /*左对齐*/
.flex-pack-between{justify-content: space-between;}/*两端对齐*/
.flex-pack-around{justify-content: space-around;}/*两端对齐*/
.flex-pack-end{justify-content: flex-end;}   /*右对齐*/
.flex-nowrap{flex-wrap: nowrap;}
.flex-wrap{flex-wrap: wrap;}
.flex-align-content-center{align-content:center;} /*在容器内, 额外的空白部分的分布*/
.flex-align-content-start{align-content:flex-start;} /*在容器内, 额外的空白部分的分布*/
.bgw{
  background: white !important;
}
  .mg10 {
    margin: 10px !important;
  }

  .mg15 {
    margin: 15px !important;
  }

  .mg20 {
    margin: 20px !important;
  }

  .mg30 {
    margin: 30px;
  }

  .mt5 {
    margin-top: 5px;
  }

  .mt10 {
    margin-top: 10px !important;
  }

  .mt15 {
    margin-top: 15px;
  }

  .mt20 {
    margin-top: 20px;
  }

  .mt24 {
    margin-top: 24px;
  }

  .mt30 {
    margin-top: 30px;
  }

  .mb5 {
    margin-bottom: 5px;
  }

  .mb10 {
    margin-bottom: 10px;
  }

  .mb15 {
    margin-bottom: 15px;
  }

  .mb20 {
    margin-bottom: 20px;
  }

  .mb24 {
    margin-bottom: 24px;
  }

  .mb30 {
    margin-bottom: 30px;
  }

  .ml5 {
    margin-left: 5px;
  }

  .ml10{
    margin-left: 10px;
  }

  .ml15 {
    margin-left: 15px;
  }

  .ml20 {
    margin-left: 20px;
  }

  .ml30 {
    margin-left: 30px;
  }

  .mr5 {
    margin-right: 5px;
  }

  .mr10 {
    margin-right: 10px;
  }

  .mr15 {
    margin-right: 15px;
  }

  .mr20 {
    margin-right: 20px;
  }

  .mr30 {
    margin-right: 30px;
  }

  .pd10 {
    padding: 10px;
  }

  .pd15 {
    padding: 15px;
  }

  .pd20 {
    padding: 20px;
  }

  .pr30 {
    padding: 30px;
  }

  .pt5 {
    padding-top: 5px;
  }

  .pt10 {
    padding-top: 10px;
  }

  .pt15 {
    padding-top: 15px;
  }

  .pt20 {
    padding-top: 20px;
  }

  .pt30 {
    padding-top: 30px;
  }

  .pb5 {
    padding-bottom: 5px;
  }

  .pb10 {
    padding-bottom: 10px;
  }

  .pb15 {
    padding-bottom: 15px;
  }

  .pb20 {
    padding-bottom: 20px;
  }

  .pb30 {
    padding-bottom: 30px;
  }

  .pl5 {
    padding-left: 5px;
  }

  .pl10 {
    padding-left: 10px;
  }

  .pl15 {
    padding-left: 15px;
  }

  .pl20 {
    padding-left: 20px;
  }

  .pl30 {
    padding-left: 30px;
  }

  .pr5 {
    padding-right: 5px;
  }

  .pr10 {
    padding-right: 10px;
  }

  .pr15 {
    padding-right: 15px;
  }

  .pr20 {
    padding-right: 20px;
  }

  .pr30 {
    padding-right: 30px;
  }
</style>
