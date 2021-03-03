import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import NProgress from 'nprogress'
Vue.use(Router)

// 切换路由回到页顶
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            chineseName: '首页'
          },
          desc: '',
          component: () => import('../components/home/index.vue')
        },
        {
          path: '/product',
          name: 'product',
          meta: {
            chineseName: '产品列表'
          },
          desc: '',
          component: () => import('../components/product/index.vue')
        },
        {
          path: '/Consultant',
          name: 'Consultant',
          meta: {
            chineseName: '咨询师库'
          },
          desc: '',
          component: () => import('../components/teacher/index.vue')
        },
        {
          path: '/About',
          name: 'About',
          meta: {
            chineseName: '关于我们',
            requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
          },
          desc: '',
          component: () => import('../components/about/index.vue')
        },
        {
          path: '/login',
          name: 'login',
          meta: {
            chineseName: '登录'
          },
          desc: '',
          component: () => import('../components/login/login.vue')
        },
        {
          path: '/register',
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
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()

  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next()
})
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
// // 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
