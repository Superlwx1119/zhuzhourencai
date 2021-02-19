<template>
  <div class="box">
    <div class="box-body">
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">业务信息</span>
      </div>
      <FormItems ref="ruleForm" :is-grid="false" :model="queryForm" :items-datas="baseItems" :form-datas="queryForm" :rules="rules" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">业务附件</span>
      </div>
    </div>
  </div>
</template>

<script>
import { baseItems, rules } from './formConfig'
export default {
  name: 'SkillsSubsidies',
  data() {
    return {
      baseItems,
      queryForm: {},
      rules
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
