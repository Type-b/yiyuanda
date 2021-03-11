<template>
  <div class="my-outbox">
    <div class="my-inbox" ref='box'>
      <div class="my-list" v-for="(item,index) in sendVal" :key='index'>
        {{item.college_name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-marquee-left',
  props: {
    sendVal: Array
  },
  data () {
    return {}
  },
  mounted () {
    var target = this.$refs.box
    var initLeft = 0
    setInterval(function () {
      initLeft++
      if (initLeft >= target.offsetWidth / 2) {
        initLeft = 0
      }
      target.style = 'transform: translateX(-' + initLeft + 'px)'
    }, 16)
  }
}
</script>

<style lang="scss" scoped>
.my-outbox {
  color: #000;
  height: 60px;
  background: #f4f3f3;
  position: relative;
  overflow: hidden;
  width: 100%;
  .my-inbox {
    white-space: nowrap;
    position: absolute;
    font-size: 0;
    .my-list {
      margin-right: 25px;
      display: inline-block;
      font-size: 13px;
      height: 60px;
      line-height: 60px;
      font-size: 20px;
      .my-uname {
        color: #000;
      }
    }
  }
}
</style>
