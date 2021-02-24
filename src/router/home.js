export default {
  path: 'home',
  name: 'home',
  meta: {
    chineseName: '首页'
  },
  desc: '',
  component: () => import('../components/home/index.vue'),
  children: [
    {
      path: 'product',
      name: 'product',
      meta: {
        chineseName: '基础表单',
        desc: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'
      },
      component: () => import('../components/product/index.vue')
    }
  ]
}
