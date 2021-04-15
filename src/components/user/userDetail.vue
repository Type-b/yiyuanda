<template>
  <div class="page-main-user">
      <div class="user-top">
          <a-avatar :src="form.src"></a-avatar>
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
    padding: 70px 0 0 105px
}
</style>
