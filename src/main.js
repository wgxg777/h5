import Vue from 'vue';
import Vant from 'vant';


// import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';


import 'lib-flexible/flexible';
import 'vant/lib/index.css';


// FastClick.attach(document.body);
Vue.use(Vant);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
