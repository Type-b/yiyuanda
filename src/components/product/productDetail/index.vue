<template>
  <div class="page-main-productdetail">
    <div class="page-swiper">
      <div class="swiper-left">
       <img style="width:840px;height:483px" :src="form.imgUrl">
      </div>
      <div class="swiper-right">
          <span class="type">{{form.name}}</span>
          <span class="content">{{form.content}}</span>
          <span class="price">¥{{form.price}}</span>
          <a-steps style="margin-top:23px;width:450px" :current="0">
            <a-step>
            <!-- <span slot="title">Finished</span> -->
            <template slot="title">
                预付定金
            </template>
            <span slot="description">先付定金总价*20%
              签订协议
              享受咨询服务</span>
            </a-step>
             <a-step title="付尾款" description="完成服务，再付尾款" />
            <!-- <a-step title="finish" description="交易完成" /> -->
        </a-steps>
        <a-button class="swiper-btn">确认订单</a-button>
      </div>
    </div>
    <div class="page-bottom-detail">
      <div class="page-bottom-left">
        <a-tabs type="card" default-active-key="2">
           <a-tab-pane key="1" tab="产品流程">
            <img style="width:100%;" src="https://www.yiyuanda.net/image/product-progress.png">
          </a-tab-pane>
          <a-tab-pane style="white-space: pre-line;
    font-size: 24px;padding:22px;line-height:44px" key="2" tab="产品介绍">
          <span>1.初步交流孩子的院校定位、专业意向、职业规划。
2.填写易愿达考生基本信息表、易愿达专业选择意向表。
3.第一次交流，进行霍兰德职业测评。
4.第二次交流，初步选择意向专业和学校。
5.第三次交流，考生提供估测分数，交流后共同完成志愿填报方案初稿。
6.第四次交流，考生提供最终分数，交流后共同完成志愿填报方案终稿。
服务完成。</span>
          </a-tab-pane>
         </a-tabs>
      </div>
      <div class="page-bottom-right">
        <p style="font-size:30px">高考志愿咨询服务流程</p>
        <span style="line-height:40px;white-space:pre-wrap;font-size:21px">{{form.present}}</span>
    </div>
  </div>
  </div>
</template>

<script>
import atdapi from '@/api/product'
export default {
  data () {
    return {
      productList: [],
      // 回显数据
      form: {},
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
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1']
    }
  },
  created () {
    if (this.$route.query.id) {
      this.form.id = this.$route.query.id
    }
    this.getProductDetail()
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
    getProductDetail () {
      atdapi.getProductDetail(this.form.id).then(res => {
        this.form = res.data.data.rows
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
.ant-tabs.ant-tabs-card .ant-tabs-card-content > .ant-tabs-tabpane, .ant-tabs.ant-tabs-editable-card .ant-tabs-card-content > .ant-tabs-tabpane{
    width: 860px;
    height: 998px;
    border:1px solid #979797
}
.no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive, .ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-tabpane-inactive{
    border:0 !important;
    display: none;
}
.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active{
    color:#36BEB4 !important;
}

.ant-tabs-bar{
    margin:0;
}
.ant-tabs-bar :hover{
    color:#000 !important
}
.page-main-productdetail {
  color: #000;
  height: calc(100% - 185px);
  widows: 100%;
  background: #fff;
  padding: 59px 75px 52px 105px;
  .page-swiper {
    width: 100%;
    display: flex;
    .swiper-left {
      display: inline-block;
      width:840px;
      height:483px
    }
    .swiper-right {
      padding: 26px 15px 24px 11px;
      display: flex;
      flex-direction: column;
      height: 483px;
      width: 100%;
      border:1px solid #979797;
      margin-left: 30px;
      .type{
          font-size: 20px;
          font-family: PingFangCu;
          margin-top: 11px;
      }
      .content{
          font-size: 36px;
          font-family: PingFangCu;
          margin-top: 11px;
      }
      .price{
          color: #36BEB4;
          font-size: 36px;
          font-family: PingFangCu;
          margin-top: 1px;
      }
      .swiper-btn{
          background-color: #111111;
          color: #FFFFFF;
          border-radius: 41px;
          width:300px;
          height: 60px;
          margin-top: 40px;
      }
    }
  }
  .page-bottom-detail {
    margin-top: 92px;
    background-color: white !important;
    display: flex;
    .page-bottom-left {
      width:870px;
      height:1200px;
      .title {
        padding: 8px 0px 16px 24px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .page-bottom-right {
     width: 35%;
     height: 654px;
     border: 1px solid #36BEB4;
     border-top: 9px solid #36BEB4;
     padding: 23px 11px 0 25px;
     margin-top: 40px;
     margin-left: 30px;
     .line{
         width: 100%;
         height: 9px;
         background-color: #36BEB4;
     }
    }
  }
}
</style>
