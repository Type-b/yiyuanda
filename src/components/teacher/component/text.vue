<script>
export default {
  name: 'mycomponent',
  render: function (createElement) {
    return createElement(
      'div', // tag name 标签名称
      {
        style: {
          fontSize: '24px',
          color: '#6D7278',
          whiteSpace: 'pre-wrap',
          marginTop: '48px'
        }
      },
      this.$slots.default // 子组件中的阵列
    )
  },
  props: {
    level: {
      type: String
    }
  }
}
</script>
