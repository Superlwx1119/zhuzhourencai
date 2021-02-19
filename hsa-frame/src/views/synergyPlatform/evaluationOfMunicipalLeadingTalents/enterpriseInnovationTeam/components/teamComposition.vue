<template>
  <!-- 团队构成及合作基础 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title">团队构成及合作基础</span>
    </div>
    <div class="box-body" style="height:auto">
      <div class="small-title">
        <p style="color:#666">重点描述团队围绕整体研究方向的学科或研究领域布局、任务分工及协同机制，研究能力、学术或技术水平、对所属科学技术领域和相关产业影响等方面的情况。</p>
      </div>
      <el-input v-model="Cooperation" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Cooperation: '',
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
