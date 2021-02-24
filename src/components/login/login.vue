<template>
  <div class="page-main-login">
    <span class="logo">易愿达</span>
    <div style="width:368px;">
      <span class="title">账户密码登录</span>
    </div>
    <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">
      <a-form-item has-feedback>
        <a-input v-decorator="formRule.user" style="width:368px;margin-top:32px" placeholder="账户/手机号">
          <a-icon slot="prefix" type="user" style="color:rgba(24, 144, 255, 1)" />
        </a-input>
      </a-form-item>
      <a-form-item has-feedback>
        <a-input v-decorator="formRule.password" style="width:368px;" placeholder="请输入登录密码">
          <a-icon slot="prefix" type="lock" style="color:rgba(24, 144, 255, 1)" />
        </a-input>
      </a-form-item>
      <div class="before-login">
        <a-checkbox @change="loginAuto">
          自动登录
        </a-checkbox>
        <div>
          <span style="color:rgba(24, 144, 255, 1);cursor:pointer">忘记密码</span>
        </div>
      </div>
      <a-form-item>
        <a-button style="width:368px;margin-top:24px" html-type="submit" type="primary" @click="login">登录</a-button>
      </a-form-item>
      <a-button style="width:368px;" html-type="submit" @click="goRegister">注册</a-button>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  data () {
    return {
      // 账号
      userName: '',
      // 密码
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
  methods: {
    login () {

    },
    goRegister () {
      this.$router.push('register')
    },
    // 保持自动登录
    loginAuto () {

    },
    // 登录表单验证
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
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
    font-family: "Digital";
    color: #000;
    font-size: 40px;
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
