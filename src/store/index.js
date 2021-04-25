// store index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  user: window.localStorage.getItem('user'),
  token: window.localStorage.getItem('token') || window.sessionStorage.getItem('token'),
  expire: 30, // 期望保存天数
  startTime: window.localStorage.getItem('startTime')
}
const mutations = {
  // 将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    window.localStorage.setItem('token', data)
  },
  // 保存登陆时间
  SET_STARTIME: (state, data) => {
    state.startTime = data
    window.localStorage.setItem('startTime', data)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.localStorage.setItem('user', data)
  },
  // 临时登陆
  SET_SESSIONTOKEN: (state, data) => {
    state.token = data
    window.sessionStorage.setItem('token', data)
  },
  // 登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    state.startTime = null
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('startTime')
  }
}

const actions = {
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
