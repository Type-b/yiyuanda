<template>
  <div class="page-main-about">
    <div id="about-us" class="page-banner">
      <img class="banner-img" src="../../assets/test.png" />
      <div class="banner-text">
        <span style="font-size:70px;">易愿达。</span>
        <span style="font-size:70px;">愿望更容易到达。</span>
        <span style="padding-top:21px;font-size:21px;width:625px">每一位考生的分数都来之不易，我们更希望通过更好的高考志愿填报方案，让每一位考生能够成功上到好学校。大学，不仅仅影响孩子今后的学习环境，更是在求职中众多企业对学生的第一印象。在面对越发激烈竞争的今天，好大学更是重要的敲门砖。</span>
      </div>
    </div>
    <div class="page-anchor">
      <div>
        <span class="anchor-title">页面导航</span>
        <a-anchor style="margin-top:13px;width:152px">
          <a-anchor-link href="#about-us" title="关于我们" />
          <a-anchor-link href="#components-anchor-demo-static" title="部门架构" />
          <a-anchor-link href="#components-anchor-demo-basic" title="推广合作" />
          <a-anchor-link href="#connect-us" title="联系我们">
          </a-anchor-link>
        </a-anchor>
      </div>
      <div style="display:flex;flex-direction:column">
        <span style="width:870px;font-size:48px;line-height:63px;font-family:pingFangHei">优秀数据的背后，是来自我们优中选优的顶尖师资。 </span>
        <div style="display:flex">
          <span style="width:540px;margin-top:48px;font-size:23px">筛选来自全国各地高校咨询师，不仅严格严选，更是定期开展高考政策研究与院校研究，实时更新我们的数据库。保证为学生提供最新最全的信息资源。 </span>
          <div style="display:flex;flex-direction:column;padding-left:119px;text-align:right;margin-top:-20px">
            <span style="font-size:72px">99%</span>
            <span style="font-size:36px;color:rgba(109, 114, 120, 1);line-height:18px">高考志愿填报满意率</span>
            <span style="font-size:72px">42%</span>
            <span style="font-size:36px;color:rgba(109, 114, 120, 1);line-height:18px">成功率提升</span>
            <span style="font-size:72px">80%</span>
            <span style="font-size:36px;color:rgba(109, 114, 120, 1);line-height:18px">一本录取率</span>
          </div>
        </div>
        <div style="font-size:48px;margin-top:44px;display:flex;flex-direction:column;font-family: 'pingFangHei'">
          <span>易愿达高考志愿系统，</span>
          <span>让您的孩子更上一层楼。</span>
        </div>
        <div class="anchor-example">
          <img class="example-img" src="../../assets/about-us.png" />
          <span style="width:570px;color:#000;font-size:23px;margin-top:51px;display:flex">利用大数据与AI技术，智能分析孩子的成绩，还可以通过测评了解到孩子学科思维模式以及能力曲线。全方位评估孩子的真实成绩排位并提供更加个性化的解决方案。更是做到了目前全部高考志愿填报方案全被录取佳绩，</span>
          <div style="display:flex;flex-direction:column;text-align:right">
            <span style="font-size:72px">2321<span style="font-size:21px">份</span></span>
            <span style="font-size:36px;color:rgba(109, 114, 120, 1)">已经提供个性化解决方案</span>
            <span style="font-size:72px">100%</span>
            <span style="font-size:36px;color:rgba(109, 114, 120, 1)">志愿录取率</span>
          </div>
          <div id="connect-us" class="middle-bottom">
            <div class="bottom-introduce" v-for="(item,index) in specialList" :key="index">
              <img class="introduce-img" :src="item.url">
              <span class="introduce-text">{{item.title}}<span style="color:#6D7278">{{item.content}}</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
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
      ]
    }
  }
}
</script>

<style lang="scss">
.page-main-about {
  color: #000;
  height: calc(100% - 185px);
  widows: 100%;
  background: #fff;
  .page-banner {
    height: 610px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
    .banner-img {
      width: 100%;
      position: absolute;
      filter: blur(10px);
      height: 610px
    }
    .banner-text {
      display: flex;
      flex-direction: column;
      padding: 82px 0 0 110px;
      position: absolute;
      font-family: "pingFangHei";
    }
  }
  .page-anchor {
    margin: 17px 0 0 77px;
    display: flex;
    .ant-affix {
      top: 150px !important;
      width: 120px !important;
    }
    .anchor-title {
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }
    .anchor-example {
      width: 1020px;
      margin-top: 37px;
      .example-img {
        box-shadow: 1px 1px 2px 2px rgba(109, 114, 120, 1);
        border: 1px dashed #000;
        width: 100%;
        height: 560px;
      }
      .middle-bottom {
        width: 100%;
        background: white;
        padding-bottom: 186px;
        text-align: left;
        .bottom-introduce {
          padding-top: 101px;
          display: flex;
          .introduce-img {
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
  }
}
.ant-layout-content[data-v-13877386] {
  background-color: #fff;
}
</style>
