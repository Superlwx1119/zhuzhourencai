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
        { label: '所购房屋地址及幢号、房号', prop: 'xx', type: 'input', span: 24 },
        { label: '购房日期', prop: 'supdept', type: 'date' },
        { label: '购房总金额', prop: 'supdept', type: 'number' },
        { label: '本人银行账号', prop: 'supdept', type: 'input' },
        { label: '户名', prop: 'supdept', type: 'input' },
        { label: '银行卡开户行', prop: 'supdept', type: 'input' }
      ],
      rules: {
        xx: [{ required: true, message: '请输入', trigger: 'change' }]
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
