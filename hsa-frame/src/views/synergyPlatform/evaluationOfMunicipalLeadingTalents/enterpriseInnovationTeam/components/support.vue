<template>
  <!-- 支撑保障 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title ">支撑保障</span>
    </div>
    <div class="box-body">
      <el-input v-model="Development" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Development: '',
      placeholder: '包括依托单位提供的支持保障条件等'
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
