// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'ant-design-vue/dist/antd.css';
import App from './src/App'
import router from './src/router'
import axios from 'axios'
import store from './src/store/index'
import Antd from 'ant-design-vue'
import Vuex from 'vuex'
import 'lib-flexible/flexible'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueLazyLoad)
// 禁止access origin为*
// axios.defaults.withCredentials = true
Vue.prototype.$axios=axios;
Vue.prototype.$http = axios;
NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 100,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 5000, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
