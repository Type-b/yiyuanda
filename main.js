// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './src/App'
import router from './src/router'
import Vue from 'vue';
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.use(Antd)

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  // chrome
  document.body.scrollTop = 0;
  // firefox
  document.documentElement.scrollTop = 0;
  // safari
  window.pageYOffset = 0;
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
