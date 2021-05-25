import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
// eslint-disable-next-line no-unused-vars
import NProgress from 'nprogress'
import computeTime from '../utils/computeTime.js'
import 'nprogress/nprogress.css'
// import { sort } from 'semver'
Vue.use(Router)

// 切换路由回到页顶
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../layout/index.vue')
    },
    {
      path: '/user',
      meta: {
        chineseName: '个人档案'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'user',
          path: '',
          meta: { title: '个人档案', icon: 'home' },
          component: resolve => require(['../components/user/userDetail.vue'], resolve)
        }
      ]
    },
    {
      path: '/home',
      meta: {
        chineseName: '首页'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'home',
          path: '',
          meta: { title: '首页', icon: 'home' },
          component: resolve => require(['../components/home/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/product',
      meta: {
        chineseName: '产品列表'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'product',
          path: '/product',
          meta: { title: '产品列表', icon: 'home' },
          component: resolve => require(['../components/product/index.vue'], resolve)
        },
        {
          path: '/product/detail',
          name: 'detail',
          meta: {
            chineseName: '产品详情'
          },
          desc: '',
          component: resolve => require(['../components/product/productDetail/index.vue'], resolve)
        }
      ]
    },

    {
      path: '/Consultant',
      meta: {
        chineseName: '产品列表'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'Consultant',
          path: '/Consultant',
          meta: {
            chineseName: '咨询师库'
          },
          desc: '',
          component: resolve => require(['../components/teacher/index.vue'], resolve)
        },
        {
          name: 'ConsultantDetail',
          path: '/Consultant/teacherDetail',
          meta: {
            chineseName: '咨询师详情'
          },
          desc: '',
          component: resolve => require(['../components/teacher/teacherDetail/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/About',
      meta: {
        chineseName: '关于我们',
        requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'About',
          path: '/About',
          meta: {
            chineseName: '关于我们'
          },
          desc: '',
          component: resolve => require(['../components/about/index.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      meta: {
        chineseName: '登录'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'login',
          path: '/login',
          meta: {
            chineseName: '登陆'
          },
          desc: '',
          component: resolve => require(['../components/login/login.vue'], resolve)
        }
      ]
    },
    {
      path: '/register',
      meta: {
        chineseName: '注册'
      },
      desc: '',
      component: resolve => require(['../layout/index.vue'], resolve),
      children: [
        {
          name: 'register',
          path: '/register',
          meta: {
            chineseName: '注册'
          },
          desc: '',
          component: resolve => require(['../components/login/register.vue'], resolve)
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      component: {
        template: '<div>not found</div>'
      }
    }
  ]
})
// // 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const start = new Date()
  const startDate = store.state.startTime
  const endDate = start.valueOf()
  const expire = store.state.expire
  if (computeTime(startDate, endDate) > expire) {
    store.commit('LOGOUT')
  }
  const token = store.state.token
  NProgress.start()
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next()

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
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
export default router
