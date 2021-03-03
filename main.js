// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './src/App'
import router from './src/router'
import Vue from 'vue';
import store from './src/store/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import Vuex from 'vuex'
import 'lib-flexible/flexible'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(Antd)

NProgress.configure({     
  easing: 'ease',  // 动画方式    
  speed: 100,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 5000, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})
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
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.sessionStorage.getItem('user'),
  token: window.sessionStorage.getItem('token')
}
const mutations = {
  //将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  //获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  }
}

const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
