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
        { label: '当年在株缴纳薪酬个人所得税', prop: 'xx', type: 'input' },
        { label: '银行卡开户行', prop: 'supdept', type: 'input' },
        { label: '银行卡号', prop: 'supdept', type: 'input' },
        { label: '工作贡献简介', prop: 'supdept', type: 'textarea', rows: 4, span: 24, autosize: false, maxLength: 500 }
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
