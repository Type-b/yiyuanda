import http from '../../http.js'
const { $default } = http

const api = {
  // 产品列表
  getProductList () {
    return $default.get('/ys/workEmployee/queryAllProductList')
  }
}

export default api
