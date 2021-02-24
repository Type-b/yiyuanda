<template>
  <div class="page-main-login">
    <span class="logo">易愿达</span>
    <div style="width:380px;">
      <span class="title-register">注册</span>
    </div>
    <a-form-model id="components-form-demo-normal-login" ref="form" :model="formData" okType="default" :rules="formRule" class="login-form-register">
      <a-form-model-item prop="password" style="display:flex" has-feedback>
        <a-popconfirm trigger="click" :cancelText="null" :defaultVisible="false" :icon='popTitle' placement="right">
          <a-input style="width:380px" v-model="formData.password" @change="passwordWatch(formData.password)" placeholder="6-16位密码，区分大小写">
          </a-input>
          <template slot="title">
            <a-progress v-show="this.passwordStatus ==='warnning'" :format="()=>'请至少输入 6 个字符，且在数字、小写字母 、大写字母以及特殊字符中四选三。'" :percent="33" status="exception" size="small" />
            <a-progress v-show="this.passwordStatus ==='well'" :percent="66" :format="()=>'请至少输入 6 个字符，且在数字、小写字母 、大写字母以及特殊字符中四选三。'" size="small" status="normal" strokeColor="#FFD000" />
            <a-progress v-show="this.passwordStatus ==='best'" :format="()=>'请至少输入 6 个字符，且在数字、小写字母 、大写字母以及特殊字符中四选三。'" :percent="100" status="success" size="small" />
          </template>
        </a-popconfirm>
      </a-form-model-item>
      <a-form-model-item prop="passwordAgain" has-feedback>
        <a-input style="width:380px" v-model="formData.passwordAgain" placeholder="确认密码">
        </a-input>
      </a-form-model-item>
      <a-form-model-item prop="phoneNumber" has-feedback>
        <a-input style="width:380px" v-model="formData.phoneNumber" placeholder="11位手机号">
          <a-select slot="addonBefore" default-value='86' style="width: 70px">
            <a-select-option value="86">
              +86
            </a-select-option>
            <a-select-option value="87">
              +87
            </a-select-option>
          </a-select>
        </a-input>
      </a-form-model-item>
      <div style="display:flex">
        <a-form-model-item prop="verification" has-feedback>
          <a-input style="width:270px" v-model="formData.verification" placeholder="验证码">
          </a-input>
        </a-form-model-item>
        <a-button @click="getverificationCode" style="width:102px;margin-left:8px;margin-top:3px">获取验证码</a-button>
      </div>
      <div>
        <a-button style="width:176px" html-type="submit" type="primary" @click="handleSubmit">注册</a-button>
        <span @click="goLogin" style="color:rgba(24, 144, 255, 1);cursor:pointer;margin-left:92px">使用已有账户登录</span>
      </div>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data () {
    // 密码验证
    const VALIDATEPASSCHECK = (rule, value, callback) => {
      const password = value.trim()
      if (value === '') {
        // eslint-disable-next-line standard/no-callback-literal
        callback(new Error('请输入密码'))
      } else {
        var ls = 0
        if (password.trim() !== '') {
          if (password.match(/([a-z])+/)) {
            ls++
          }
          if (password.match(/([0-9])+/)) {
            ls++
          }
          if (password.match(/([A-Z])+/)) {
            ls++
          }
          if (password.match(/([\W])+/) && !password.match(/(![\u4E00-\u9FA5])+/)) {
            ls++
          }
          if (password.length < 6 || password.length > 20) {
            callback(new Error('要求6-20位字符'))
            ls = 0
          }
          if (password.match(/([\u4E00-\u9FA5])+/)) {
            callback(new Error('不能包含中文字符'))
            ls = 0
          }
          switch (ls) {
            case 0: this.passwordPercent = 0; callback(new Error('数字、小写字母、大写字母以及特殊字符中四选三')); break
            case 1: this.passwordPercent = 33; callback(new Error('数字、小写字母、大写字母以及特殊字符中四选三')); break
            case 2: this.passwordPercent = 66; callback(new Error('数字、小写字母 、大写字母以及特殊字符中四选三')); break
            case 3: callback(); break
            case 4: this.passwordPercent = 100; callback(); break
            default: this.passwordPercent = 0; callback(); break
          }
        }
      }
    }
    // 再次输入验证
    const VALIDATEPASSAGAINCHECK = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else {
        if (value !== this.formData.password) {
          callback(new Error('两次密码需要一致'))
        } else { callback() }
      }
    }
    // 手机号验证
    const VALIDATEPHONECHECK = (rule, value, callback) => {
      console.log(value)
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (value.length !== 11) {
          callback(new Error('手机号格式不正确，需为XXX-XXXX-XXXX'))
        } else { callback() }
      }
    }
    return {
      passwordStatus: 'warnning',
      // 气泡框强度
      popTitle: '强度：差',
      formData: {
        // 账号
        userName: '',
        // 密码
        password: '',
        // 验证码
        verification: '',
        // 确认密码
        passwordAgain: '',
        // 手机号
        phoneNumber: ''
      },
      // 表单规则
      formRule:
      {
        user: [
          'user', { rules: [{ required: true, message: '请输入账户名' }] }
        ],
        password: [
          { validator: VALIDATEPASSCHECK }
        ],
        passwordAgain: [
          { required: true, message: '请输入旧密码' }, { validator: VALIDATEPASSAGAINCHECK }
        ],
        phoneNumber: [
          { validator: VALIDATEPHONECHECK }
        ],
        verification: [
          { required: true, message: '请输入验证码' }
        ]
      }
    }
  },
  created () {
  },
  methods: {
    goLogin () {
      this.$router.push('login')
    },
    // 获取验证码
    getverificationCode () {
    },
    // 密码强度监听
    passwordWatch (value) {
      const password = value.trim()
      if (value === '') {
        // eslint-disable-next-line standard/no-callback-literal
        this.passwordStatus = 'warnning'
      } else {
        var ls = 0
        if (password.trim() !== '') {
          if (password.match(/([a-z])+/)) {
            ls++
          }
          if (password.match(/([0-9])+/)) {
            ls++
          }
          if (password.match(/([A-Z])+/)) {
            ls++
          }
          if (password.match(/([\W])+/) && !password.match(/(![\u4E00-\u9FA5])+/)) {
            ls++
          }
          if (password.length < 6 || password.length > 20) {
            this.passwordStatus = 'warnning'
            ls = 0
          }
          if (password.match(/([\u4E00-\u9FA5])+/)) {
            this.passwordStatus = 'warnning'
            ls = 0
          }
          // 定义气泡提示框文字类
          const popClass = document.getElementsByClassName('ant-popover-message')
          switch (ls) {
            case 0: this.popTitle = '强度：差'; popClass[0].style.color = 'rgba(245, 34, 45, 1)'; this.passwordStatus = 'warnning'; break
            case 1: this.popTitle = '强度：差'; popClass[0].style.color = 'rgba(245, 34, 45, 1)'; this.passwordStatus = 'warnning'; break
            case 2: this.popTitle = '强度：差'; popClass[0].style.color = 'rgba(245, 34, 45, 1)'; this.passwordStatus = 'warnning'; break
            case 3: this.passwordStatus = 'well'; this.popTitle = '强度：较好'
              popClass[0].style.color = '#FFD000'
              break
            case 4: this.popTitle = '强度：强'
              popClass[0].style.color = 'rgba(82, 196, 26, 1)'
              this.passwordStatus = 'best'; break
            default: this.popTitle = '强度：差'; this.passwordStatus = 'best'; break
          }
        }
      }
    },
    // 登录验证
    handleSubmit (form) {
      this.$refs['form'].validate((valid) => {
        if (valid) {

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
  .title-register {
    color: #000;
    font-size: 16px;
    padding-bottom: 8px;
  }
  .logo {
    font-family: "Digital";
    color: #000;
    font-size: 40px;
    margin-top: 160px;
  }
  .login-form-register {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    .before-login {
      display: flex;
      justify-content: space-between;
      width: 380px;
    }
  }
}
.ant-popover-inner-content {
  width: 272px;
  height: 126px;
}
.ant-progress-show-info .ant-progress-outer {
  padding-top: 8px;
}
.ant-progress-text {
  color: rgba(0, 0, 0, 0.65) !important;
  width: 240px;
  font-size: 13px;
  white-space: pre-wrap;
  margin: 9px 0 0 0;
  line-height: normal;
}
.ant-popover-message {
  font-size: 14px;
  color: rgba(245, 34, 45, 1);
}
.ant-popover-message-title {
  padding-left: 0px;
  width: 226px;
}
.ant-popover-buttons button {
  display: none;
}
</style>
