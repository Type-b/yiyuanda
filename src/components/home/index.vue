<template>
  <div class="page-main-home">
    <div class="title-top">
      <span class="title-text">让你的愿望,</span>
      <span class="title-text">更容易到达<span class="title-text" style="color:#36BEB4">。</span></span>
      <div style="margin-top:21px;font-size:21px;width:507px;color:#000">
        <span>易愿达是中国首家<span style="color:#36BEB4">在线一对一人工高考志愿填报平台</span>，致力于为考生提供专业化、流程化、系统化的填报工作，招募了来自全国各地高校老师、大学生、职场精英并经过我们培训为您提供精准化的服务。</span>
      </div>
    </div>
    <div class="page-middle">
      <div class="middle-top">特点</div>
      <div class="middle-middle">每个学生都有专属数据库，越用越上手。</div>
      <div class="middle-bot">易愿达为每位学生进行志愿填报时，都会更具有考生的实际需求或要求自动生成专属于这个学生的专业数据库。我们的咨询师会在生成的数据库中为考生搭配一种或多种的志愿填报方案，可覆盖不同方向。</div>
      <div class="middle-content">
        <div class="content" v-for="(item,index) in list" :key="index">
          <img class="content-img" :src="item.url">
          <span class="content-title">{{item.title}}</span>
          <span class="content-content">{{item.content}}</span>
        </div>
      </div>
      <div class="middle-teacher">
        <span style="font-size:60px;width:558px;font-family: pingFangHei">优中选优的咨询师，
          提供更优质的服务。 </span>
        <div class="teacher-right">
          <span class="right-top">&lt;5%</span>
          <span class="right-bottom">筛选通过率</span>
        </div>
      </div>
      <scrollBar style="margin-top:69px" :sendVal="scrollList"></scrollBar>
      <scrollBar style="margin-top:42px" :sendVal="scrollList"></scrollBar>
      <scrollBar style="margin-top:42px" :sendVal="scrollList"></scrollBar>
      <div class="middle-bottom">
        <div class="bottom-introduce" v-for="(item,index) in specialList" :key="index">
          <img class="introduce-img" :src="item.url">
          <span class="introduce-text">{{item.title}}<span style="color:#6D7278">{{item.content}}</span></span>
        </div>
      </div>
    </div>
    <div class="page-bottom-home">
      <div class="bottom-left">
        <span class="text-little">来自用户的心声</span>
        <span class="text-big">每一个评价，</span>
        <span class="text-big">都是佳上佳。</span>
        <span class="text-little" style="width:420px;margin-top:20px">专注于每一个学生体验，是我们一直坚守的行动准则，我们理解学生面对上万所院校选择时的困难与无助。正因如此，我们专注于志愿填报的每一个细节都尽展身手，让你可以得心应手。</span>
        <span class="text-big" style="margin-top:40px;font-size:72px;font-family: pingFangHei">98%</span>
        <span class="text-little">好评率</span>
      </div>
    </div>
    <div class="bottom-start">
      <span style="color:#36BEB4;opacity:0.8;font-size:18px;margin-top:138px;font-weight:bold">立即开始</span>
      <span style="font-family: pingFangHei;font-size:60px;width:734px;color:#000">立即开始你的志愿选择吧，不成功不收费。 </span>
      <span style="opacity:0.8;color:#000;padding-top:22px;width:610px;font-size:21px">来自易愿达的专业的专家团队为你志愿填报保驾护航，先出志愿填报方案，等待到学生志愿录取结果出炉后我们才会从签署协议中约定的支付方式从中扣款。</span>
      <a-input-search style="margin:50px 0 209px 0;width:450px;height:53px" addonBefore="手机号" placeholder="我们将从专业团队联系您" enter-button="提交" @search="onSearch" />
    </div>
    <router-view />
  </div>
</template>
<script>
import scrollBar from './components/scrollbar.vue'
export default {
  components: {
    scrollBar
  },
  data () {
    return {
      // 首页上方数据特点
      list: [
        {
          url: require('../../assets/Group 8.png'),
          title: '实时人工跟踪',
          content: '来自易愿达的专业人工团队，会实时跟踪学生的需求，解答在志愿填报上的问题，为您提供最优解。'
        },
        {
          url: require('../../assets/首页.png'),
          title: '大数据分析',
          content: '依托于GoOS的数据支持系统，通过提交学生成绩排位数据，结合地域/兴趣/发展前景等变量，筛选出匹配院校。'
        },
        {
          url: require('../../assets/首页(1).png'),
          title: '成功率分析',
          content: '来自易愿达的志愿填报专家，会与GoOS系统相结合，共同为学生调整与适配最佳的志愿填报方案，并会给出一定的成功率分析'
        }
      ],
      // 首页下方咨询师特点
      specialList: [
        {
          url: require('../../assets/teacher.png'),
          title: '56所重点高校在职教师。',
          content: '来自重点高校的专家队伍，不仅可以为学生提供前沿广泛的专业选择，还可以给予提前指引大学规划，赢在起跑线上。'
        },
        {
          url: require('../../assets/data-analysis.png'),
          title: '东北三省政策权威解读。',
          content: '易愿达高考研究中心持续关注各省政策变动与对考生的影响，我们将会以考生为中心，做出更为详细精准的解读。'
        },
        {
          url: require('../../assets/area-chart.png'),
          title: '1979种不同职业专属规划。',
          content: '来自易愿达的专家团队，持续关注着无论是传统的还是新晋的职业，只为给考生带来更加多元化的职业发展路线。'
        },
        {
          url: require('../../assets/international.png'),
          title: '2740种全国院校精准定位。',
          content: '无需多看，将多达上百页的报考白皮书，变成可视化的数据呈现给您。只需一眼，便知所有。'
        }
      ],
      scrollList: [{
        'place': '来自烟台市的',
        'name': '许先生'
      }, {
        'place': '来自东莞市的',
        'name': '曹先生'
      }, {
        'place': '来自郑州市的',
        'name': '邹女士'
      }, {
        'place': '来自海口市的',
        'name': '戚先生'
      }, {
        'place': '来自南京市的',
        'name': '陈先生'
      }, {
        'place': '来自金华市的',
        'name': '吴先生'
      }, {
        'place': '来自泉州市的',
        'name': '卫先生'
      }, {
        'place': '来自哈尔滨市的',
        'name': '钱先生'
      }, {
        'place': '来自成都市的',
        'name': '尤先生'
      }, {
        'place': '来自惠州市的',
        'name': '张先生'
      }, {
        'place': '来自宁波市的',
        'name': '喻女士'
      }, {
        'place': '来自石家庄市的',
        'name': '吕先生'
      }, {
        'place': '来自大连市的',
        'name': '蒋女士'
      }, {
        'place': '来自南昌市的',
        'name': '赵先生'
      }, {
        'place': '来自珠海市的',
        'name': '黄女士'
      }, {
        'place': '来自天津市的',
        'name': '金先生'
      }, {
        'place': '来自绍兴市的',
        'name': '韩先生'
      }, {
        'place': '来自西安市的',
        'name': '褚先生'
      }, {
        'place': '来自苏州市的',
        'name': '姜先生'
      }, {
        'place': '来自南宁市的',
        'name': '陈女士'
      }, {
        'place': '来自沈阳市的',
        'name': '华先生'
      }]
    }
  },
  methods: {
    // 手机号存储
    onSearch () { }
  }
}
</script>
<style lang="scss">
.page-main-home {
  height: calc(100% - 185px);
  widows: 100%;
  background: #d8d8d8;
  .title-top {
    padding: 229px 0 278px 138px;
    display: flex;
    flex-direction: column;
    .title-text {
      color: #000;
      font-size: 70px;
      font-family: "PingFangHei";
    }
  }
  .page-middle {
    padding-top: 71px;
    display: flex;
    flex-direction: column;
    background: #fff;
    text-align: center;
    color: #000;
    align-items: center;
    .middle-top {
      color: #36beb4;
      font-size: 18px;
    }
    .middle-middle {
      font-size: 60px;
      width: 761px;
      font-family: "pingFangHei";
    }
    .middle-bot {
      width: 791px;
      margin-top: 29px;
      font-size: 21px;
      opacity: 0.8;
    }
    .middle-content {
      display: flex;
      flex: 0;
      margin-top: 66px;
      .content {
        padding-left: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .content-img {
          width: 50px;
          height: 50px;
        }
        .content-title {
          margin-top: 21px;
          color: #000;
          font-size: 18px;
        }
        .content-content {
          font-size: 16px;
          width: 300px;
          opacity: 0.7;
        }
      }
    }
    .middle-teacher {
      display: flex;
      margin-top: 139px;
      .teacher-right {
        padding-left: 391px;
        display: flex;
        flex-direction: column;
        .right-top {
          color: #000;
          font-size: 72px;
          font-family: "pingFangHei";
        }
        .right-bottom {
          color: #6d7278;
          font-size: 24px;
        }
      }
    }
    .middle-bottom {
      padding-top: 121px;
      width: 100%;
      background: white;
      padding-bottom: 186px;
      .bottom-introduce {
        padding-top: 130px;
        display: flex;
        .introduce-img {
          margin-left: 154px;
          width: 146px;
          height: 146px;
        }
        .introduce-text {
          width: 912px;
          margin-left: 56px;
          font-size: 36px;
          font-family: "pingFangHei";
          text-align: left;
        }
      }
    }
  }
  .page-bottom-home {
    margin-top: 0;
    background: #000;
    display: flex;
    .bottom-left {
      padding: 152px 0 228px 0;
      display: flex;
      flex-direction: column;
      margin-left: 161px;
      .text-little {
        color: rgba(255, 255, 255, 0.8);
        font-size: 18px;
      }
      .text-big {
        font-size: 46px;
        color: white;
      }
    }
  }
  .bottom-start {
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .ant-input-group-addon {
      background-color: white;
      color: #36beb4;
      height: 53px;
      font-size: 16px;
    }
    .ant-input {
      height: 53px;
      font-size: 16px;
      font-weight: bold;
    }
    .ant-btn-primary {
      height: 53px;
      width: 140px;
      background-color: #36beb4;
    }
  }
}
</style>
