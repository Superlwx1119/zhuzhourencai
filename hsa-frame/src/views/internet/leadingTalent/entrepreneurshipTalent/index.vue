<template>
  <div class="box">
    <div class="box-body">
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">基本信息</span>
      </div>
      <FormItems ref="ruleForm" :is-grid="false" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :rules="rules" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'EntrepreneurshipTalent',
  data() {
    return {
      queryForm: {},
      itemsDatas: [
        { label: '姓名', prop: '姓名', type: 'input' },
        { label: '身份证号', prop: '身份证号', type: 'input' },
        { label: '手机号', prop: '手机号', type: 'input' },
        { label: '职业资格', prop: '职业资格', type: 'select' },
        { label: '证书编号', prop: '证书编号', type: 'input' },
        { label: '证书获得日期', prop: '证书获得日期', type: 'date' },
        { label: '工作单位', prop: '工作单位', type: 'input', span: 16 },
        { label: '签订劳动合同时间', prop: '签订劳动合同时间', type: 'date' },
        { label: '本人银行账号', prop: '本人银行账号', type: 'input' },
        { label: '银行卡开户行', prop: '银行卡开户行', type: 'input' }
      ],
      rules: {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

