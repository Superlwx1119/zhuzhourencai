<template>
  <!-- 团队构成及合作基础 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title ">团队及负责人自我评价</span>
    </div>
    <div class="box-body">
      <div class="small-title">
        <p style="color:#666">1. 团队评价（主要包括团队形成背景、围绕整体研究方向核心成员的学科布局、任务分工及协同机制，研究能力、学术或技术水平、对所属科学技术领域和相关产业影响等方面的情况）；</p>
        <p style="color:#666">2. 团队负责人评价（主要包括研究能力、学术或技术水平、组织协调和团队管理能力、对所属科学技术领域和相关产业影响等方面的情况）</p>
      </div>
      <el-input v-model="SelfEvaluation" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      SelfEvaluation: '',
      placeholder: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.small-title{
  height:auto;
  background-color: #F9F9F9;
  p{
    line-height: 32px;
    margin: 0 0 10px 0;
    text-indent: 2em;
  }
}
</style>
