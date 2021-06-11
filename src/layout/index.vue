<template>
  <div>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'fixed', zIndex: 10, width: '100%', display:'flex', alignItems:'center',borderBottom:'1px solid #000',fontFamily: 'pingFangZhun' }">
        <img @click="changeMenu('home')" src="../assets/logo.png" style="width:102px;height:26px;cursor:point" />
        <a-menu theme="dark" mode="horizontal" :default-selected-keys="keys" :style="{ lineHeight: '64px' }">
          <a-menu-item key="home" @click="changeMenu('home')">
            首页
          </a-menu-item>
          <a-menu-item key="product" @click="changeMenu('product')">
            产品列表
          </a-menu-item>
          <a-menu-item key="Consultant" @click="changeMenu('Consultant')">
            咨询师库
          </a-menu-item>
          <a-menu-item key="About" @click="changeMenu('About')">
            关于我们
          </a-menu-item>
          <a-menu-item style="margin-left:189px" key="About2" @click="changeMenu('About')">
            在线咨询
          </a-menu-item>
          <a-menu-item v-if="!isLogin" key="login">
            <a-button @click="login" style="width:102px;background-color:#36BEB4;color:#ffffff">登录账号</a-button>
          </a-menu-item>
          <a-menu-item class="menu-item" v-if="isLogin">
            <span style="padding:0px 10px">
              您好！
            </span>
            <a-dropdown>
                <a-avatar size="small" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <a-menu slot="overlay">
                <a-menu-item>
                  <a href="javascript:;">个人中心</a>
                </a-menu-item>
                <a-menu-item>
                  <a href="javascript:;">结算中心</a>
                </a-menu-item>
                <a-menu-item>
                  <a @click="logout">退出登陆</a>
                </a-menu-item>
              </a-menu>
            </a-dropdown>

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
          <div class="footer-top">
            <router-link target="_blank" :to="{path:'/product'}" class="footer-title">产品中心</router-link>
            <div style="padding-top:16px;display:flex;flex-direction:column">
              <router-link target="_blank" :to="{path:'/product'}" class="footer-child">API文档</router-link>
              <router-link target="_blank" :to="{path:'/product'}" class="footer-child">快速入门</router-link>
              <router-link target="_blank" :to="{path:'/product'}" class="footer-child">参考指南</router-link>
            </div>
            <span>API文档</span>
          </div>
          <div class="footer-top">
            <router-link target="_blank" :to="{path:'/Consultant'}" class="footer-title">咨询师库</router-link>
            <div style="padding-top:16px;display:flex;flex-direction:column">
              <router-link target="_blank" :to="{path:'/Consultant'}" class="footer-child">介绍</router-link>
              <router-link target="_blank" :to="{path:'/Consultant'}" class="footer-child">咨询师列表</router-link>
            </div>
          </div>
          <div class="footer-top">
            <router-link target="_blank" :to="{path:'/About'}">
             <span class="footer-title">关于我们</span>
            </router-link>
            <div style="padding-top:16px;display:flex;flex-direction:column">
                <router-link target="_blank" :to="{path:'/About'}" class="footer-child">公司介绍</router-link>
                <router-link target="_blank" :to="{path:'/cooperation'}" class="footer-child">加盟商合作</router-link>
                <router-link target="_blank" :to="{path:'/About'}" class="footer-child">合作结构</router-link>
                <router-link target="_blank" :to="{path:'/About'}" class="footer-child">商业推广</router-link>
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
function debounce (func, wait = 200) { // 可以放入项目中的公共方法中进行调用（鹅只是省事）
  let timeout
  return function (event) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.call(this, event)
    }, wait)
  }
}
export default {
  data () {
    return {
      keys: '',
      isLogin: false
    }
  },
  created () {
    console.log(this.$store.state);
    console.log(window.sessionStorage.getItem('token'));
    this.keys = [this.$route.name]
    this.isLogin = this.$store.state.token
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
      this.$router.push('/login')
    },
    // 退出登陆
    logout () {
      this.$store.commit('LOGOUT')
      this.$message.success('退出成功')
      this.$router.go(0)
      this.$router.push('/home')
    },
    changeMenu: debounce(function (route) {
      if (this.$route.name === route) {
        this.$router.go(0)
      } else {
        this.$router.push({path: '/' + route})
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.menu-item{
  color:#000 !important;
  display: flex;
  align-items: center;
  padding: 0 !important;
  margin:0 12px;
  border-left:1px solid #000000;
}
.ant-menu-item{
  line-height: 0px !important;
}
.ant-menu-dark.ant-menu-horizontal{
  line-height: 0px;
  display: flex;
  align-items: center;
  height: 100%;
}
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
    cursor: pointer;
  }
  .footer-child {
    color: #cccccc;
    font-size: 12px;
    padding-top: 5px;
    cursor: pointer;
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
