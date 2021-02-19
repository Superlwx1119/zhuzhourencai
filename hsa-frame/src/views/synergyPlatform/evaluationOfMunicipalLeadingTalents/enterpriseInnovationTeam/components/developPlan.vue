<template>
  <!-- 现有基础及团队发展规划 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title ">现有基础及团队发展规划</span>
    </div>
    <div class="box-body">
      <div class="small-title">
        <p style="color:#666">1. 推动未来研究工作的现实基础（科研基础、科研条件等）；</p>
        <p style="color:#666">2. 拟开展的研究在国际国内同领域所处的地位，研究主要内容及创新点，团队的组织管理、运行机制，团队负责人能力提升、人才培养、团队建设等。</p>
      </div>
      <el-input v-model="Development" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Development: '',
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
