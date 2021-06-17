<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { LocaleProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  components: {
    'a-locale-provider': LocaleProvider
  },
  data () {
    return {
      name: 'App',
      locale: zhCN
    }
  }
}
</script>

<style>
/* html {FILTER: gray}
body {filter: gray;} */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* @font-face {
  font-family: "PingFangCu";
  src: url("./assets/pingFangCu.ttf");
} */
/* @font-face {
  font-family: "PingFangHei";
  src: url("./assets/pingFangHei.ttf");
}
@font-face {
  font-family: "PingFangZhun";
  src: url("./assets/pingFangZhun.ttf");
} */
</style>
