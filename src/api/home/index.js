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
  }
}

export default api
