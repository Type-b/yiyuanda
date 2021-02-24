import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../layout/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            chineseName: '首页'
          },
          desc: '',
          component: () => import('../components/home/index.vue')
        },
        {
          path: 'product',
          name: 'product',
          meta: {
            chineseName: '产品列表'
          },
          desc: '',
          component: () => import('../components/product/index.vue')
        },
        {
          path: 'Consultant',
          name: 'Consultant',
          meta: {
            chineseName: '咨询师库'
          },
          desc: '',
          component: () => import('../components/teacher/index.vue')
        },
        {
          path: 'About',
          name: 'About',
          meta: {
            chineseName: '关于我们'
          },
          desc: '',
          component: () => import('../components/about/index.vue')
        },
        {
          path: 'login',
          name: 'login',
          meta: {
            chineseName: '登录'
          },
          desc: '',
          component: () => import('../components/login/login.vue')
        },
        {
          path: 'register',
          name: 'register',
          meta: {
            chineseName: '注册'
          },
          desc: '',
          component: () => import('../components/login/register.vue')
        }
      ]
    }
  ]
})
