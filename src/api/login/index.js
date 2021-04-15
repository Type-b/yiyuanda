import http from '../../http.js'
const { $default } = http

const api = {
  // 发送验证码
  getVerificationCode (phone) {
    return $default.get(`yyd/user/send/${phone}`).then(resp => {
      return resp
    }).catch((err) => { return err })
  },
  // 验证短信
  findVerificationCode (params) {
    return $default.get('/yyd/user/verifyMsm', params).then(resp => {
      return resp
    }).catch((err) => { return err })
  },
  // 机构码验证
  findInstitudeCode (id) {
    return $default.get('yyd/user/verifyMechanism', id).then(resp => {
      return resp
    }).catch((err) => { return err })
  }
}

export default api
