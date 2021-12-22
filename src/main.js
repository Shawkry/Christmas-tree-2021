import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import * as  echarts from 'echarts';
Vue.prototype.$echarts = echarts



import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
