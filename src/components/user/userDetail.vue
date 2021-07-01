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
    <a-button style="margin:45px 0 0 570px;border-radius:45px;border:1px solid #000;height:31px;width:80px">保存</a-button>
    </a-form-model>
    <div style="margin-top:70px">
      <span style="color:rgba(0,0,0,0.85);font-size:24px">最近系统消息</span>
      <div style="display:flex;align-items:center">
        <a-steps style="margin-top:24px;width:225px" progress-dot :current="1" direction="vertical">
        <a-step title="Finished" description="This is a description. This is a description." />
        <a-step title="Finished" description="This is a description. This is a description." />
        <a-step title="In Progress" description="This is a description. This is a description." />
        <a-step title="Waiting" description="This is a description." />
        <a-step title="Waiting" description="This is a description." />
        </a-steps>
        <a-alert
          v-if="visible"
          message="帮助信息"
          description="系统信息将会自动帮你收录来自后台发送各种提醒操作，请注意查看内容。"
          type="info"
          style="width:604px;height:104px;margin-left:123px"
          closable
          show-icon
          :after-close="handleClose"
        />
      </div>
    </div>
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
      },
      visible: true,
      // 请求链接
      headers: {}
    }
  },
  methods: {
    handleClose () {
      this.visible = false
    },
    // 上传
    handleChange () {

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
