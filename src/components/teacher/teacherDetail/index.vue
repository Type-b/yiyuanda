<template>
  <div class="page-main-teacherdetail">
    <div class="page-swiper">
      <div style="width:600px">
        <div class="swiper-top">
        <span>{{form.name}}</span>
        <span style="font-size:32px;color:#000">{{form.pinyin}}</span>
      </div>
        <div class="swiper-bottom">
          <span class="swiper-bottom-left">{{form.major}}</span>
        </div>
      </div>
      <!-- <div class="swiper-bottom-left">咨询师统一认证编号:{{form.}}</div> -->
      <img style="width:625px;heihgt:549px;padding-top: 38px;object-fit:scale-down" :src="form.photoTransparent">
    </div>
    <div class="page-bottom-product-teacher">
      <div class="page-bottom-left">
        <span v-for="(item,index) in form.presentation" :key="index" class="title">{{item}}</span>
      </div>
      <div class="story">{{form.teacherStory}}</div>
    </div>
    <div>123</div>
  </div>
</template>

<script>
import atdapi from '@/api/teacher'
import HanziToPinyin from '../component/pinyinChange'
export default {
  data () {
    return {
      productList: [],
      // 作者列表
      authorList: [
        {
          value: 'Lucy',
          name: 'Lucy'
        },
        {
          value: 'Disabled',
          name: 'Disabled'
        },
        {
          value: 'yiminghe',
          name: 'yiminghe'
        }
      ],
      // 咨询师详情
      form: {
        name: '',
        pinyin: '',
        photoTransparent: ''
      },
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1']
    }
  },
  created () {
    this.form.id = this.$route.query.id || ''
    this.getTeacherDetail()
  },
  methods: {
    // 点击菜单
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    // 产品详情
    godetail (id) {
      this.$router.push({path: '/product/detail', query: {id: id}})
    },
    getTeacherDetail () {
      atdapi.getTeacherDetail(this.form.id).then(res => {
        res.data.data.rows.presentation = res.data.data.rows.presentation.split(',')
        this.form = res.data.data.rows
        this.form.pinyin = HanziToPinyin.instance.codefans_net_CC2PY(this.form.name).toUpperCase()
      }).finally(() => {
        this.loadTable = false
      })
    },
    // 搜索
    onSearch () {

    },
    // 条件搜索完成
    handleChange () { }
  }
}
</script>

<style lang="scss">
.page-main-teacherdetail {
  color: #000;
  height: calc(100% - 185px);
  widows: 100%;
  background: #fff;
  .page-swiper {
    width: 100%;
    padding:0px 0 0 110px;
    height: 587px;
    display: flex;
    background: #F1F2F2;
    .swiper-top {
      padding-top: 82px;
      line-height: 77px;
      width: 100%;
      flex-direction: column;
      display: flex;
      color: #000;
      font-family: "pingFangHei";
      font-size: 60px;
    }
    .swiper-bottom {
      display: flex;
      padding-top: 89px;
      .swiper-bottom-left {
        color: #6D7278;
        width: 507px;
        font-size: 32px;
      }
    }
  }
  .page-bottom-product-teacher {
    margin: 62px 165px 0 165px;
    background-color: white !important;
    display: flex;
    .page-bottom-left {
      width: 480px;
      margin-right: 306px;
      .title {
        color: #000;
        font-family: "pingFangHei";
        font-size: 36px;
        display: flex;
        flex-direction: column;
      }
    }
    .story{
        width: 480px;
        font-size: 24px;
        color: #6D7278;
        white-space: pre-wrap;
      }
  }
}
</style>
