import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import productDetail from '../views/productDetail/productDetail.vue';
import myAddress from '../views/mine/myAddress.vue';
import addAddress from '../views/mine/addAddress.vue';
import placeOrder from '../views/order/placeOrder.vue';
import myOrder from '../views/myOrder/myOrder.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: productDetail,
  },
  {
    path: '/myAddress',
    name: 'myAddress',
    component: myAddress,
  },
  {
    path: '/addAddress',
    name: 'addAddress',
    component: addAddress,
  },
  {
    path: '/placeOrder',
    name: 'placeOrder',
    component: placeOrder,
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: myOrder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
