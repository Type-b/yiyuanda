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
        <div style="margin-top:18px;color:#6D7278;font-size:12px"><img style="width:32px;height:32px;margin-right:10px" src="../../../assets/profile-code.png" />咨询师统一认证编号:{{form.teacherCode}}</div>
      </div>
      <img style="width:625px;heihgt:549px;padding-top: 38px;object-fit:scale-down" :src="form.photoTransparent">
    </div>
    <div class="page-bottom-product-teacher">
      <div class="page-bottom-left">
        <div>
          <span v-for="(item,index) in form.presentation" :key="index" class="title">{{item}}</span>
        </div>
        <div class="story">{{form.teacherStoryLeft}}</div>
      </div>
      <new-text level="2">{{form.teacherStoryRight}}</new-text>
    </div>
    <!-- <div class="teacher-comment">
      <span>对咨询师对评价都是这样说</span>
    </div> -->
    <div class="teacher-product">
      <span>可以为你提供的服务</span>
      <div class="bottom-card">
          <a-card @click="godetail(item.id)" v-for="(item,index) in productList" :key="index" hoverable style="width: 300px;margin:30px 0px 0 0px">
            <img slot="cover" alt="example" :src="item.imgUrl" />
            <a-card-meta style="font-size:15px" :title="item.name" :description="form.major">
            </a-card-meta>
            <span style="color:#36BEB4;font-size:28px;padding-top:10px">¥{{item.price}}</span>
          </a-card>
        </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/product'
import atdapi from '@/api/teacher'
import HanziToPinyin from '../component/pinyinChange'
import newText from '../component/text.vue'
export default {
  components: {
    newText
  },
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
        this.form = res.data.data.rows || ''
        this.form.teacherStoryLeft = this.form.teacherStory.slice(0, 70)
        this.form.teacherStoryRight = this.form.teacherStory.slice(70)
        this.form.pinyin = HanziToPinyin.instance.codefans_net_CC2PY(this.form.name).toUpperCase()
      }).finally(() => {
        this.loadTable = false
        this.getProduct()
      })
    },
    // 获取产品
    getProduct () {
      api.getProductDetail(this.form.productIds).then(res => {
        this.productList.push(res.data.data.rows)
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
    padding:0px 0 0 165px;
    height: 587px;
    display: flex;
    background: #F1F2F2;
    .swiper-top {
      padding-top: 154px;
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
        height: 189px;
        font-size: 24px;
        color: #6D7278;
        white-space: pre-wrap;
        margin-top: 48px;
      }
  }
  .teacher-product{
    margin: 131px 0 0px 165px;
    font-size: 36px;
    font-family: "PingFangCu";
    padding-bottom: 200px;
  .bottom-card {
        display: flex;
        flex-wrap: wrap;
        .ant-card-meta-avatar {
          float: right;
        }
      }
  }
}
</style>
