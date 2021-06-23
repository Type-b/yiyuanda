<template>
  <div class="page-main-product">
    <div class="page-swiper">
      <div class="swiper-top">
        <span>志愿填的好，</span>
        <span>上个大学不难<span style="color: #000">。</span></span>
      </div>
      <div class="swiper-bottom">
        <span class="swiper-bottom-left"
          >根据易愿达高考研究中心研究过去3年高考志愿填报结果，将近<span
            style="color: #000; font-weight: bold"
            >24%</span
          >考生因为高考志愿填报没有合适进行填报，因此错失上<span
            style="color: #000; font-weight: bold"
            >一流大学</span
          >好机会。更有超过<span style="color: #000; font-weight: bold"
            >30名同学高分低录</span
          ></span
        >
        <div class="swiper-bottom-right">
          <span style="font-size: 15px">使用我们志愿填报产品后</span>
          <span
            style="font-size: 72px; line-height: 82px; font-family: pingFangHei"
            >+25%</span
          >
          <span style="font-size: 20px">前三志愿通过率</span>
        </div>
      </div>
    </div>
    <div class="page-bottom-product">
      <p class="product-title">
        深耕高考志愿填报3年<br />
        奠定顶尖资源咨询的卓越产品设计
      </p>
      <div class="product-content">
        基于上千名学子的成果录取结果，我们期待将这份喜悦带给更多的家庭，帮助他们找到更好的人生新阶梯。从院校定位的层层数据积累到专业选择的细细了解，结合近年来各大招聘需求变化，我们提供更为前沿的就业指导，帮助孩子提前布局未来的锚点。面对日新月异的变化，我们更能深知地域、院校、专业、学术能力、排位等的重要性。
      </div>
      <div
        :class="index === 1 ? 'product-plus' : 'product-A'"
        v-for="(item, index) in productList"
        :key="index"
      >
        <div style="display: flex; flex-direction: column">
          <span style="color: #fa6400; font-size: 21px">全新上线</span>
          <span style="font-size: 40px; font-weight: bold; color: #4c4c4c"
            >高考志愿填报<span style="color: #000">{{ item.name }}</span></span
          >
          <span
            v-if="index === 0"
            style="font-size: 36px; font-weight: bold; line-height: 72px"
            >特有本事，特超值</span
          >
          <span
            v-if="index === 1"
            style="font-size: 36px; font-weight: bold; line-height: 72px"
            >让你的志愿选择，光彩夺目</span
          >
          <span style="width: 630px; font-size: 25px">{{ item.circuit }}</span>
          <a-button @click="goDetail(item.id)" class="new-btn"
            >立即了解</a-button
          >
        </div>
        <img :src="item.classId" />
      </div>
      <img
        style="margin-top: 119px; width: 100%"
        src="https://www.yiyuanda.net/image/product-success.png"
      />
      <div class="product-bottom">
        <span style="color: #fa6400; font-size: 21px">全新上线</span>
        <span style="font-size: 44px; font-weight: bold; color: #4c4c4c"
          >高考志愿填报<span style="color: #000">{{
            productListOne.name
          }}</span></span
        >
        <span style="font-size: 36px; font-weight: bold; line-height: 72px"
          >不仅加足料，而且超有料。</span
        >
        <span style="width: 904px; font-size: 25px">{{
          productListOne.circuit
        }}</span>
        <a-button @click="goDetail(productListOne.id)" class="new-btn"
          >立即了解</a-button
        >
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin: 66px 0 164px 0;
            font-size: 20px;
            width: 100%;
          "
        >
          <div>
            <a-icon
              type="check-circle"
              theme="twoTone"
              two-tone-color="#68D279"
            />
            <span>独门专业定位</span>
          </div>
          <div>
            <a-icon
              type="check-circle"
              theme="twoTone"
              two-tone-color="#68D279"
            />
            <span>3小时超长沟通时间</span>
          </div>
          <div>
            <a-icon
              type="check-circle"
              theme="twoTone"
              two-tone-color="#68D279"
            />
            <span>S级咨询师专属服务</span>
          </div>
        </div>
      </div>
      <!-- <div class="bottom-card">
          <a-card
            @click="godetail(item.id)"
            v-for="(item, index) in productList"
            :key="index"
            hoverable
            style="width: 300px; margin: 30px 0px 0 30px"
          >
            <img slot="cover" alt="example" :src="item.imgUrl" />
            <a-card-meta
              style="font-size: 15px"
              :title="item.name"
              :description="item.content"
            >
            </a-card-meta>
          </a-card>
        </div> -->
    </div>
  </div>
</template>

<script>
import atdapi from '@/api/product'
export default {
  data () {
    return {
      productList: [],
      productListOne: [],
      // 搜索名称或id
      searchContent: '',
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1']
    }
  },
  created () {
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
    goDetail (id) {
      this.$router.push({ path: '/product/detail', query: { id: id } })
    },
    getProductList (value) {
      atdapi.getProductList().then(res => {
        this.productList = res.data.data.rows.slice(0, 2)
        let list = res.data.data.rows.slice(2, 3)
        this.productListOne = list[0]
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
    height: 960px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('https://www.yiyuanda.net/image/product-new.png');
    background-size: 100% 100%;
    .swiper-top {
      line-height: 77px;
      flex-direction: column;
      display: flex;
      color: white;
      font-family: 'pingFangHei';
      font-size: 70px;
    }
    .swiper-bottom {
      display: flex;
      flex-direction: column;
      padding-top: 21px;
      .swiper-bottom-left {
        color: white;
        width: 507px;
        font-size: 21px;
      }
      .swiper-bottom-right {
        color: #fff;
        text-align: center;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .page-bottom-product {
    margin-top: 67px;
    background-color: white !important;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .new-btn {
      font-size: 12px;
      font-weight: bold;
      width: 107px;
      height: 31px;
      border: 1px solid #000;
      background: #fff;
      border-radius: 45px;
      margin-top: 31px;
    }
    .product-plus {
      text-align: right;
      margin-top: 107px;
      display: flex;
      flex-direction: row-reverse;
      .new-btn {
        font-size: 12px;
        font-weight: bold;
        width: 107px;
        height: 31px;
        border: 1px solid #000;
        background: #fff;
        border-radius: 45px;
        margin-top: 31px;
        margin-left: auto;
      }
    }
    .product-A {
      text-align: left;
      margin-top: 107px;
      display: flex;
    }
    .product-title {
      font-size: 48px;
      font-weight: 600;
    }
    .product-content {
      width: 1100px;
      font-size: 25px;
    }
    .product-list {
      display: flex;
    }
    .product-bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 55px;
    }
  }
}
</style>
