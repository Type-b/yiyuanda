import http from '../../http.js'
const { $default } = http

const api = {
  // 产品列表
  getTeacherList () {
    return $default.get('/yyd/teacher/show').then(resp => {
      return resp
    }).catch((err) => { return err })
  },
  // 咨询师详情
  getTeacherDetail (id) {
    return $default.get(`/yyd/teacher/queryTeacherById/${id}`).then(resp => {
      return resp
    }).catch((err) => { return err })
  }
}

export default api
