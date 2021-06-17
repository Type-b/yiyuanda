<template>
  <div class="page-main">
    <div class="page-swiper">
      <div class="swiper-top">
        <span>我们的小型企业团队，</span>
        <span>也是你的团队。</span>
      </div>
      <div class="swiper-bottom">
        <span class="swiper-bottom-left">召集来自全国31个省份上百所院校优质在校师生。不仅深知各地高考政策，更是了解各种高考志愿填报技巧。结合您的需求与期望，为您提供近乎完美匹配的高考志愿填报方案。无需全额付款、全程专属团队追踪，更是让你无后顾之忧。</span>
        <div class="swiper-bottom-right">
          <span style="color:#6D7278;font-size:15px">使用我们志愿填报产品后</span>
          <span style="color:#000;font-size:72px;line-height:82px;font-family:pingFangHei">99%</span>
          <span style="color:rgba(109, 114, 120, 1);font-size:20px">高考志愿填报通过率</span>
        </div>
      </div>
    </div>
    <div class="page-bottom-teacher">
      <div class="page-bottom-left">
        <span class="title">咨询师筛选</span>
        <a-menu mode="inline" :open-keys="openKeys" :defaultSelectedKeys="openKeys" style="width: 256px;height:957px" @openChange="onOpenChange">
          <a-sub-menu key="sub1">
            <span slot="title">
              <a-icon type="ant-design" /><span>咨询师</span>
            </span>
            <a-menu-item key="sub1">
              咨询师列表
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
        <span class="title">搜索列表（咨询师）</span>
        <div style="display:flex;justify-content:center;border-bottom:1px solid #E9E9E9">
          <a-input-search v-model="nameOrId" style="margin:16px 0 0 0;width:450px;height:53px;" placeholder="一对一 专业介绍" enter-button="搜索" @search="onSearch" />
        </div>
        <div style="padding:24px 0 16px 0px;border-bottom:1px dashed #E9E9E9;margin-left:40px;margin-right:24px">
          <span>所属类目：</span>
          <a-radio-group default-value="a" button-style="solid">
            <a-radio-button value="a">
              全部
            </a-radio-button>
            <a-radio-button value="b">
              易愿达认证咨询师
            </a-radio-button>
            <a-radio-button value="c">
              易愿达优秀咨询师
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
          <a-card @click="goTeacherDetail(item.id)" v-for="(item,index) in teacherList" hoverable :key="index" style="width: 277px;margin:30px 100px 0 30px">
            <img style="width:277px;height:167px;object-fit: contain;background:#E9E9E9" slot="cover" alt="example" v-lazy="item.photoTransparent" />
            <a-card-meta style="font-size:15px" :title="item.name">
              <span slot="description">{{item.major}}</span>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import atdapi from '@/api/teacher'
export default {
  data () {
    return {
      // 咨询师介绍
      detailList: [],
      // 查询id
      nameOrId: '',
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
      openKeys: ['sub1'],
      teacherList: []
    }
  },
  mounted () {
    this.getTeacherList('all')
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
    // 搜索
    onSearch () {
      atdapi.findTeacherList({params: {TeacherName: this.nameOrId}}).then(res => {
        this.teacherList = res.data.data.rows
      })
    },
    // 咨询师详情
    goTeacherDetail (id) {
      this.$router.push({path: '/Consultant/teacherDetail', query: {id: id}})
    },
    getTeacherList (value) {
      atdapi.getTeacherList({ params: this.form }).then(res => {
        let list = []
        if (value === 'all') {
          res.data.data.rows.forEach(element => {
            element.photo = element.photo === '' ? require('../../assets/teacher-avator.jpg') : element.photo
            list.push(element)
          })
          this.teacherList = list
        } else if (value === 'one') {
          res.data.data.rows.forEach(element => {
            if (element.product_class_id === 'one') {
              list.push(element)
            }
          })
          this.productList = list
        } else if (value === 'second') {
          res.data.data.rows.forEach(element => {
            if (element.product_class_id === 'second') {
              list.push(element)
            }
          })
          this.productList = list
        }
      }).finally(() => {
        this.loadTable = false
      })
    },
    // 条件搜索完成
    handleChange () { }
  }
}
</script>

<style lang="scss">
.ant-card-meta-detail{
  overflow: revert;
}
.ant-card-meta-title{
  font-size: 21px;
}
.ant-card-meta-description{
  display: flex;
  flex-wrap: wrap;
}
.page-main {
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

    background: linear-gradient(-90deg, #ffffff 2%, #0083ff 54%);
    .swiper-top {
      line-height: 77px;
      width: 100%;
      flex-direction: column;
      display: flex;
      color: white;
      font-size: 70px;
      font-family: "pingFangHei";
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
  .page-bottom-teacher {
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
