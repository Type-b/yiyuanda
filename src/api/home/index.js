import http from '../../http.js'
const { $http, $default } = http

const api = {
  getaccesslist () {
    return $default.get('/ys/workEmployee/queryAllCollege')
  },

  getaccesstype () {
    return $http.get('/access/getaccesstype')
  }
}

export default api
