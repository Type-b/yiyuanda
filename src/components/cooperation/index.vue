<template>
  <div class="page-main-cooperation">
    <div class="page-top-image">
    </div>
    <div class="page-middle">
      <div style="text-align:center">
        <div style="font-size:48px;margin:82px 0 47px 0">
          打造标准流程化服务
        </div>
        <div style="display:flex;justify-content:center">
          <span style="font-size:25px;width:1100px">
            在这里，人，是我们每份工作、每件产品的核心。这就是说，我们不仅关注使用者，还将生产者放在心上。因此，针对自身和合作商，我们都设立了极高的标准，以保障我们提供的服务水平在同一水平线上。从咨询到服务，我们全程进行追踪，确保学生的使用体验。
          </span>
        </div>
      </div>
      <div class="step-top">
        <div>
          <img src="../../assets/cooperation-user.png">
        <span style="font-size:20px">用户档案建立与保存</span>
        </div>
        <div>
          <img src="../../assets/cooperation-service.png">
        <span style="font-size:20px">服务标准与规范</span>
        </div>
        <div>
          <img src="../../assets/cooperation-genzong.png">
        <span style="font-size:20px">结果追踪与量化</span>
        </div>
      </div>
      <div style="display:flex;justify-content:center">
        <a-steps style="width:100%;padding:0 180px 0 100px" progress-dot>
          <a-step>
          </a-step>
          <a-step>
          </a-step>
          <a-step>
          </a-step>
          <a-step>
          </a-step>
          <a-step>
          </a-step>
          <a-step>
          </a-step>
       </a-steps>
      </div>
      <div class="step-bottom">
        <div>
          <img src="../../assets/cooperation-contact.png">
          <span>需求沟通与对接</span>
        </div>
        <div>
          <img src="../../assets/cooperation-study.png">
          <span>成果转化与方案</span>
        </div>
        <div>
          <img src="../../assets/cooperation-kefu.png">
          <span>客户服务与关怀</span>
        </div>
      </div>
  </div>
  <img style="width:100%" src="https://www.yiyuanda.net/image/cooperation-2.png">
  <div class="page-bottom">
    <p style="font-size:48px;width:624px">
      与我们一起成为彼此合作商， 共享利益，共享流量。
    </p>
    <p style="color:rgba(0,0,0,0.85);font-size:25px">
      在这个瞬息万变的互联网时代，流量是生存下来的前提。我们希望与来自全国各地的教育机构携手合作，在不影响用户体验与品质的前提下开展更高层次、更深维度的战略合作项目。<br><br>
我们将向合作商开放以下合作项目：
    </p>
    <p style="font-size:32px">
      高考志愿填报咨询产品引流项目<br>
职业生涯规划产品引流项目<br>
网站A级广告位<br>
网站B级广告位
    </p>
    <a-button class="new-btn">了解更多项目细节</a-button>
    <p style="font-size:48px">
      优质资源，激发优秀表现。<br>
EaseKit生态带来的优势，才刚刚显现。
    </p>
  </div>
  <div style="display:flex;align-items:center;flex-direction:column">
     <img style="width:100%" src="https://www.yiyuanda.net/image/cooperation-1.png">
    <img style="margin-top:49px" src="../../assets/user-up.png">
    <p style="font-size:48px;text-align:center">人人都是咨询师<span style="color:#797979">计划</span><br>
    <span>
让高等教育，再上新高度
  </span>
    </p>
    <button class="new-btn">即将推出</button>
  </div>
  <p style="margin-left:195px;margin-bottom:0;font-size:48px">相关文件下载<br>
      <span style="color:#8E8E8E">
      意向合作，也可发送邮件到<br>
business@yiyuanda.com
    </span>
    </p>
  </div>
</template>

<script>
import Text from '../teacher/component/text.vue'
export default {

}
</script>
<style lang="scss">
.page-main-cooperation{
  color: #000;
  background: #fff;
  .page-top-image{
    background-image: url('https://www.yiyuanda.net/image/cooperation.png');
    height: 1160px;
  }
  .ant-steps-item-tail::after{
    background: #000 !important;
  }
  .ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot, .ant-steps-dot.ant-steps-small .ant-steps-item-icon .ant-steps-icon-dot{
    background: #fff;
    border: 3px solid #000;
    width: 10px;
    height: 10px;
  }
  .ant-steps-label-vertical .ant-steps-item{
    width:0px
  }
  .page-middle{
    .step-top{
      display:flex;
      margin: 81px 0 22px -153px;
      >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 264px;
        >img{
          width:67px;
          height:67px
        }
      }
    }
    .step-bottom{
      display:flex;
      margin: 22px 0 126px 59px;
      >div{
        margin-left: 284px;
        display: flex;
        flex-direction: column;
        align-items: center;
        >img{
          width:67px;
          height:67px
        }
        >span{
        font-size:20px
      }
      }
    }
  }
  .page-bottom{
    padding: 70px 0 0 171px;
    .new-btn{
      width: 210px;
      height: 59px;
      background: #fff;
      font-size: 19px;
      border: 1px solid #000;
      border-radius: 34px;
      color: #000;
      margin:49px 0 97px 0
    }
  }
  .new-btn{
      width: 210px;
      height: 59px;
      background: #fff;
      font-size: 19px;
      border: 1px solid #000;
      border-radius: 34px;
      color: #000;
      margin:49px 0 121px 0
    }
}
</style>
