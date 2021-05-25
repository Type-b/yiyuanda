<template>
  <div class="page-main-user">
      <div class="user-top">
        <div style="display:flex;flex-direction:column">
          <a-avatar :src="form.src" style="width:100px;height:100px"></a-avatar>
          <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
        <a-button style="margin-top:13px"> <a-icon type="upload" />上传文件</a-button>
  </a-upload>
        </div>
        <div class="user-top-right">
          <span style="font-size:48px;font-family:PingFangCu">您好，{{form.name}}！</span>
          <span>用户唯一识别码{{form.code}}</span>
          <span></span>
        </div>
      </div>
  <div class="user-middle">
    <span style="font-size:24px;font-family:PingFangCu">个人基本信息</span>
    <a-form-model style="width:1100px;" layout="inline">
      <a-form-model-item style="margin:36px 0px 0 22px" class="user-input" label="姓名">
      <a-input v-model="form.fieldA" style="width:200px;margin-right:70px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item class="user-input" label="手机">
      <a-input v-model="form.fieldA" style="width:270px;margin-left:28px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item class="user-input" label="性别">
      <a-input v-model="form.fieldA" style="width:160px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item style="margin:36px 0px 0 22px" class="user-input" label="邮箱">
      <a-input v-model="form.fieldA" style="width:270px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item class="user-input" label="就读学校">
      <a-input v-model="form.fieldA" style="width:270px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item class="user-input" label="省份">
      <a-input v-model="form.fieldA" style="width:160px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item style="margin:36px 0px 0 22px" class="user-input" label="微信">
      <a-input v-model="form.fieldA" style="width:270px" placeholder="input placeholder" />
    </a-form-model-item>
    <a-button>保存</a-button>
    </a-form-model>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        src: '',
        name: '陈泽铭',
        userCode: ''

      }
    }
  }

}
</script>

<style lang="scss">
.page-main-user{
  color: #000;
    padding: 70px 0 0 105px;
    background-color: white;
    .user-top{
      display: flex;
      .user-top-right{
          display: flex;
          flex-direction: column;
          margin-left: 30px;
      }
    }
    .user-middle{
      margin-top: 65px;
      .user-input{
        margin-top: 36px;
        margin-left: 44px;
      }
    }
}
</style>
