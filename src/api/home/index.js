import http from '../../http.js'
const { $http, $default } = http
const api = {
  getaccesslist () {
    return $default.get('/yyd/college/queryAllCollege').then(resp => {
      return resp
    }).catch((err) => { return err })
  },

  getaccesstype () {
    return $http.get('/access/getaccesstype')
  },
  pay (params) {
    return $default.get('https://www.yiyuanda.net/wxpay/index', params).then(resp => {
      return resp
    }).catch((err) => { return err })
  }
}

export default api
