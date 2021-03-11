import http from '../../http.js'
const { $default } = http

const api = {
  // 产品列表
  getTeacherList () {
    return $default.get('/ys/teacherPassed/show')
  }
}

export default api
