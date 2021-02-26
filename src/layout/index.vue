<template>
  <div>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 9999, width: '100%', display:'flex', alignItems:'center',borderBottom:'1px solid #000',fontFamily: 'pingFangZhun' }">
        <!-- <img src="../assets/logo.png" style="width:100px;height:25px;display:flex"> -->
        <span @click="changeMenu('home')" style="font-family:'Digital';color:#000;font-size:40px;cursor:point">易愿达</span>
        <a-menu theme="dark" mode="horizontal" :default-selected-keys="['1']" :style="{ lineHeight: '64px' }">
          <a-menu-item key="1" @click="changeMenu('home')">
            首页
          </a-menu-item>
          <a-menu-item key="2" @click="changeMenu('product')">
            产品列表
          </a-menu-item>
          <a-menu-item key="3" @click="changeMenu('Consultant')">
            咨询师库
          </a-menu-item>
          <a-menu-item key="4" @click="changeMenu('About')">
            关于我们
          </a-menu-item>
          <a-menu-item key="5" @click="changeMenu('About')">
            在线咨询
          </a-menu-item>
          <a-menu-item key="6" @click="changeMenu('login')">
            <a-button @click="login" style="width:102px;background-color:#36BEB4;color:#ffffff">登录账号</a-button>
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="margin-top:63px;font-family:PingFangZhun">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ height:'400px',width:'100%',color:'#001529', backgroundColor:'#001529', textAlign: 'center',display:'flex',flexDirection:'column' }">
        <div style="display:flex">
          <div style="padding:64px 53px 0 48px" class="footer-top">
            <span class="footer-logo">易愿达</span>
            <span style="color:white">一对一高考志愿填报专家</span>
          </div>
          <div style="" class="footer-top">
            <span class="footer-title">产品中心</span>
            <div style="padding-top:16px;display:flex;flex-direction:column">
              <span class="footer-child">API文档</span>
              <span class="footer-child">快速入门</span>
              <span class="footer-child">参考指南</span>
            </div>
            <span>API文档</span>
          </div>
          <div class="footer-top">
            <span class="footer-title">咨询师库</span>
            <div style="padding-top:16px;display:flex;flex-direction:column">
              <span class="footer-child">介绍</span>
              <span class="footer-child">咨询师列表</span>
            </div>
          </div>
          <div class="footer-top">
            <span class="footer-title">关于我们</span>
            <div style="padding-top:16px;display:flex;flex-direction:column">
              <span class="footer-child">公司介绍</span>
              <span class="footer-child">加盟商合作</span>
              <span class="footer-child">合作结构</span>
              <span class="footer-child">商业推广</span>
            </div>
          </div>
          <div class="footer-top">
            <span class="footer-title">数据后台</span>
            <div style="display:flex">
              <img class="footer-img" src="../assets/weixi.png">
              <img class="footer-img" style="margin-left:16px" src="../assets/github.png">
            </div>
            <span class="footer-title" style="padding-top:59px">关注我们</span>
            <img class="footer-img" src="../assets/weixi.png">
          </div>
        </div>
        <div class="footer-bottom">
          <span>Copyright © 2021 Easego Inc. 保留所有权利。</span>
          <span>辽ICP备2021001758号-1 营业执照</span>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    onCollapse (collapsed, type) {
      console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      console.log(broken)
    },
    // 登录
    login () {
      this.$router.push('login')
    },
    changeMenu (route) {
      console.log(route)
      // 获取路由对象并切换
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.ant-layout-header {
  background: #ffffff;
  padding: 0 0 0 169px;
}
.ant-layout-footer {
  padding: 0;
}
.ant-menu-dark,
.ant-menu-dark .ant-menu-sub {
  background: #ffffff;
  padding-left: 265px;
}
.ant-menu-item,
.ant-menu-submenu-title {
  padding: 0 0 0 60px;
}
.ant-menu-dark .ant-menu-item:hover {
  background-color: #fff;
  color: #000;
}
.ant-menu-dark .ant-menu-item,
.ant-menu-dark .ant-menu-item-group-title,
.ant-menu-dark .ant-menu-item > a {
  color: #000;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  color: #36beb4;
  background: #ffffff;
}
.footer-top {
  padding: 64px 0 0 120px;
  display: flex;
  flex-direction: column;
  text-align: left;
  .footer-logo {
    font-family: Digital;
    font-size: 45px;
    color: white;
    color: #ffffff;
  }
  .footer-title {
    color: #cccccc;
    font-size: 18px;
  }
  .footer-child {
    color: #cccccc;
    font-size: 12px;
    padding-top: 5px;
  }
  .footer-img {
    margin-top: 15px;
    width: 20px;
    height: 20px;
  }
}
.footer-bottom {
  color: #cccccc;
  font-size: 12px;
  text-align: center;
  border-top: 1px solid #cccccc;
  width: 100%;
  padding: 31px 24px 31px 24px;
  margin-top: 59px;
  display: flex;
  flex-direction: column;
}
.manage-container {
  height: 100%;
  display: flex;
  background: #f0f2f5;
  .manage-main {
    width: 100%;
    height: 100%;
    .manage-content {
      height: calc(100% - 64px);
      .common-part {
        padding: 16px 24px;
        background: #fff;
        .module-title {
          color: rgba(0, 0, 0, 0.85);
          font-size: 16px;
          font-weight: 700;
          margin: 12px 0 0;
        }
        .module-desc {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          margin: 12px 0 16px;
        }
      }
    }
  }
}
</style>
