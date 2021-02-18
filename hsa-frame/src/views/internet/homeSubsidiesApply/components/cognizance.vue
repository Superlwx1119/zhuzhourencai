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
        supdept: ''
      },
      itemsDatas: [
        { label: '申报类别', prop: 'supdept', type: 'select' },
        { label: '申报类别依据', prop: 'supdept', type: 'textarea', rows: 4, span: 24, autosize: false, maxLength: 500 },
        { label: '工作学习简历', prop: 'supdept', type: 'textarea', rows: 4, span: 24, autosize: false, maxLength: 500 }
      ],
      rules: {}

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
