<template>
  <div class="page-main-login">
    <img src="../../assets/logo.png" class="logo"/>
    <div style="width:368px;">
      <span class="title">账户密码登录</span>
    </div>
    <a-form id="components-form-demo-normal-login" :form="form" class="login-form">
      <a-form-item has-feedback>
        <a-input v-decorator="formRule.user" style="width:368px;margin-top:32px" placeholder="账户/手机号">
          <a-icon slot="prefix" type="user" style="color:rgba(24, 144, 255, 1)" />
        </a-input>
      </a-form-item>
      <a-form-item has-feedback>
        <a-input-password @keypress.native.enter="handleSubmit" style="width:368px" v-decorator="formRule.password" placeholder="请输入登录密码">
          <a-icon slot="prefix" type="lock" style="color:rgba(24, 144, 255, 1)" />
        </a-input-password>
      </a-form-item>
      <div class="before-login">
        <a-checkbox @change="loginAuto">
          30天内免登陆
        </a-checkbox>
        <div>
          <span style="color:rgba(24, 144, 255, 1);cursor:pointer">忘记密码</span>
        </div>
      </div>
      <a-form-item>
        <a-button style="width:368px;margin-top:24px" html-type="button" type="primary" @click="handleSubmit">登录</a-button>
      </a-form-item>
      <a-button style="width:368px;" html-type="submit" @click="goRegister">注册</a-button>
    </a-form>
  </div>
</template>

<script>
import api from '@/api/login'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  data () {
    return {
      autoLogin: false,
      password: '',
      formRule:
      {
        user: [
          'user', { rules: [{ required: true, message: '请输入账户名' }] }
        ],
        password: [
          'password', { rules: [{ required: true, message: '请输入密码' }] }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    login () {

    },
    goRegister () {
      this.$router.push('register')
    },
    // 保持自动登录
    loginAuto () {
      this.autoLogin = true
    },
    // 登录表单验证
    handleSubmit (e) {
      // debugger
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.autoLogin) {
            this.$store.commit('SET_TOKEN', true)
          } else { this.$store.commit('SET_SESSIONTOKEN', true) }
          let obj = {
            phone: values.user,
            password: values.password
          }
          api.findLogin(obj).then(res => {
            this.isLoading = true
            if (res.data.success) {
              this.$message.success('登陆成功,正在跳转...', 1).then(() => {
                this.$store.commit('GET_USER', values.user)
                this.$store.commit('SET_STARTIME', new Date().valueOf())
                this.$router.push({path: '/home'})
                this.$router.go(0)
              })
            } else {
              this.$message.error(res.data.data.message)
            }
          }).finally(() => {
            this.isLoading = false
          })
        } else {
          this.$message.error('登陆失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.page-main-login {
  color: #000;
  height: 750px;
  widows: 100%;
  background: rgba(240, 243, 247, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: rgba(24, 144, 255, 1) !important;
    border-bottom: 2px solid rgba(24, 144, 255, 1);
    font-size: 16px;
    padding-bottom: 8px;
  }
  .logo {
    width:102px;
    height:26px;
    margin-top: 160px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    .before-login {
      display: flex;
      justify-content: space-between;
      width: 368px;
    }
  }
}
</style>
