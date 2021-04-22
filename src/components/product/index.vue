<template>
  <div class="page-main-product">
    <div class="page-swiper">
      <div class="swiper-top">
        <span>志愿填的好，</span>
        <span>上个大学不难<span style="color:#000">。</span></span>
      </div>
      <div class="swiper-bottom">
        <span class="swiper-bottom-left">根据易愿达高考研究中心研究过去3年高考志愿填报结果，将近<span style="color:#000">24%</span>考生因为高考志愿填报没有合适进行填报，因此错失上<span style="color:#000">一流大学</span>好机会。更有超过<span style="color:#000">30名同学高分低录</span></span>
        <div class="swiper-bottom-right">
          <span style="color:#6D7278;font-size:15px">使用我们志愿填报产品后</span>
          <span style="color:#000;font-size:72px;line-height:82px;font-family:pingFangHei">+25%</span>
          <span style="color:#6D7278;font-size:20px">前三志愿通过率</span>
        </div>
      </div>
    </div>
    <div class="page-bottom-product">
      <div class="page-bottom-left">
        <span class="title">产品筛选</span>
        <a-menu mode="inline" :open-keys="openKeys" :defaultSelectedKeys="openKeys" style="width: 256px;height:957px" @openChange="onOpenChange">
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="ant-design" /><span>产品</span>
            </span>
            <a-menu-item key="sub1">
              产品列表
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu disabled key="sub2">
            <span slot="title">
              <a-icon type="ant-design" /><span>待开放内容</span>
            </span>
            <a-menu-item key="5">
              Option 5
            </a-menu-item>
            <a-menu-item key="6">
              Option 6
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="page-bottom-right">
        <a-breadcrumb style="padding-left:32px">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
          <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        <span class="title">搜索列表（产品）</span>
        <div style="display:flex;justify-content:center;border-bottom:1px solid #E9E9E9">
          <a-input-search v-model="searchContent" style="margin:16px 0 0 0;width:450px;height:53px;" placeholder="一对一 专业介绍" enter-button="搜索" @search="onSearch" />
        </div>
        <div style="padding:24px 0 16px 0px;border-bottom:1px dashed #E9E9E9;margin-left:40px;margin-right:24px">
          <span>所属类目：</span>
          <a-radio-group default-value="a" button-style="solid">
            <a-radio-button @click="getProductList('all')" value="a">
              全部
            </a-radio-button>
            <a-radio-button @click="getProductList('A')" value="b">
              A级
            </a-radio-button>
            <a-radio-button @click="getProductList('A-plus')" value="c">
              A+级
            </a-radio-button>
            <a-radio-button @click="getProductList('S')" value="d">
              S级
            </a-radio-button>
          </a-radio-group>
        </div>
        <!-- <div style="display:flex;color:rgba(0, 0, 0, 0.85);font-size:14px;padding:21px 0 0 40px;align-items:center">
          <span>其它选项：</span>
          <span style="padding-left:24px">作者：</span>
          <a-select placeholder="不限" style="width: 226px" @change="handleChange">
            <a-select-option v-for="(item,index) in authorList" :key="index" :value="item.value">
              {{item.name}}
            </a-select-option>
          </a-select>
          <div style="padding-left:24px">
            <span>好评度：</span>
            <a-select placeholder="不限" style="width: 226px" @change="handleChange">
              <a-select-option v-for="(item,index) in authorList" :key="index" :value="item.value">
                {{item.name}}
              </a-select-option>
            </a-select>
          </div>
        </div> -->
        <div class="bottom-card">
          <a-card @click="godetail(item.id)" v-for="(item,index) in productList" :key="index" hoverable style="width: 300px;margin:30px 0px 0 30px">
            <img slot="cover" alt="example" :src="item.imgUrl" />
            <a-card-meta style="font-size:15px" :title="item.name" :description="item.content">
            </a-card-meta>
          </a-card>
        </div>
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
      // 搜索名称或id
      searchContent: '',
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1']
    }
  },
  mounted () {
    this.getProductList('all')
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
    getProductList (value) {
      atdapi.getProductList().then(res => {
        let list = []
        if (value === 'all') {
          this.productList = res.data.data.rows
        } else if (value === 'A') {
          res.data.data.rows.forEach(element => {
            if (element.classId === 'A') {
              list.push(element)
            }
          })
          this.productList = list
        } else if (value === 'A-plus') {
          res.data.data.rows.forEach(element => {
            if (element.classId === 'A-plus') {
              list.push(element)
            }
          })
          this.productList = list
        } else if (value === 'S') {
          res.data.data.rows.forEach(element => {
            if (element.classId === 'S') {
              list.push(element)
            }
          })
          this.productList = list
        }
      }).finally(() => {
        this.loadTable = false
      })
    },
    // 搜索
    onSearch () {
      atdapi.getProductSearch({ params: { name: this.searchContent, limit: 10, current: 1 } }).then(res => {
        this.productList = res.data.data.rows
      }).finally(() => {
        this.$message.success('查询成功')
        this.loadTable = false
      })
    },
    // 条件搜索完成
    handleChange () { }
  }
}
</script>

<style lang="scss">
.page-main-product {
  color: #000;
  height: calc(100% - 185px);
  widows: 100%;
  background: #fff;
  .page-swiper {
    width: 100%;
    padding: 82px 0 0 110px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(-90deg, #ffffff 2%, #ee4b4b 53%);
    .swiper-top {
      line-height: 77px;
      width: 100%;
      flex-direction: column;
      display: flex;
      color: white;
      font-family: "pingFangHei";
      font-size: 70px;
    }
    .swiper-bottom {
      display: flex;
      padding-top: 21px;
      .swiper-bottom-left {
        color: white;
        width: 507px;
        font-size: 21px;
      }
      .swiper-bottom-right {
        padding-left: 507px;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .page-bottom-product {
    margin-top: 67px;
    background-color: white !important;
    display: flex;
    .page-bottom-left {
      border-right: 1px solid #e8e8e8;
      display: flex;
      flex-direction: column;
      .title {
        padding: 8px 0px 16px 24px;
        font-size: 16px;
        font-weight: bold;
      }
    }
    .page-bottom-right {
      display: flex;
      flex-direction: column;
      width: 100%;
      .title {
        color: #000;
        font-size: 20px;
        padding-left: 32px;
      }
      .bottom-card {
        display: flex;
        flex-wrap: wrap;
        .ant-card-meta-avatar {
          float: right;
        }
      }
      .ant-radio-button-wrapper {
        border: 0;
      }
      .ant-radio-button-wrapper:not(:first-child)::before {
        width: 0px;
      }
    }
  }
}
</style>
