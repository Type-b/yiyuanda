import http from '../../http.js'
const { $default } = http

const api = {
  // 产品列表
  getProductList () {
    return $default.get('/yyd/product/queryAllProductList').then(resp => {
      return resp
    }).catch((err) => { return err })
  },
  // 产品查询
  getProductSearch (data) {
    return $default.get('yyd/product/queryProductListByName', data).then(resp => {
      return resp
    }).catch((err) => { return err })
  },
  // 产品详情查询
  getProductDetail (id) {
    return $default.get(`yyd/product/queryProductById/${id}`).then(resp => {
      return resp
    }).catch((err) => { return err })
  }
}

export default api
