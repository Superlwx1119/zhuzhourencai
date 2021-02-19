<template>
  <div class="box" style="height: auto;">
    <div class="box-body">
      <form-items
        ref="ruleFrom"
        :items-datas="itemsDatas"
        :model="dataForm"
        :rules="rules"
        :form-datas="dataForm"
        :is-grid="false"
      />
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      dataForm: {
        xx: ''
      },
      itemsDatas: [
        { label: '最高学历', prop: 'xx', type: 'select' },
        { label: '最高学位', prop: 'supdept', type: 'select' },
        { label: '毕业院校', prop: 'supdept', type: 'input' },
        { label: '毕业专业', prop: 'supdept', type: 'input' },
        { label: '职业资格', prop: 'supdept', type: 'input' },
        { label: '职称', prop: 'supdept', type: 'input' },
        { label: '工作单位', prop: 'supdept', type: 'input' },
        { label: '工作职务', prop: 'supdept', type: 'input' },
        { label: '从事专业领域', prop: 'supdept', type: 'input' },
        { label: '劳动合同类型', prop: 'supdept', type: 'select' },
        { label: '签订劳动合同时间/创业本单位时间', prop: 'supdept', type: 'date' },
        { label: '签订劳动合同年限', prop: 'supdept', type: 'input' },
        { label: '引进方式', prop: 'supdept', type: 'select' },
        { label: '联系电话', prop: 'supdept', type: 'input' },
        { label: '电子邮箱', prop: 'supdept', type: 'input' },
        { label: '是否为新引进', prop: 'supdept', type: 'select' },
        { label: '银行卡开户行', prop: 'supdept', type: 'input' },
        { label: '银行卡号', prop: 'supdept', type: 'input' }

      ],
      rules: {
        xx: [{ required: true, message: '请选择', trigger: 'change' }]

      }

    }
  },
  methods: {
    resetFields() {
      this.$refs.ruleFrom.elForm.resetFields()
    },
    validate() {
      let valided = false
      this.$refs.ruleFrom.elForm.validate(valid => {
        if (valid) {
          valided = true
        }
      })
      return valided
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
