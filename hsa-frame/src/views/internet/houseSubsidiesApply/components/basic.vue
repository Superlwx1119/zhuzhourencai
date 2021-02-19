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
        { label: '人才类型', prop: 'xx', type: 'select', span: 16 },
        { label: '姓名', prop: 'supdept', type: 'input' },
        { label: '身份证号', prop: 'supdept', type: 'input' },
        { label: '本人电话', prop: 'supdept', type: 'input' },
        { label: '学历', prop: 'supdept', type: 'select' },
        { label: '学位', prop: 'supdept', type: 'select' },
        { label: '毕业证书编号', prop: 'supdept', type: 'input' },
        { label: '上一个工作单位', prop: 'supdept', type: 'input' },
        { label: '现工作单位', prop: 'supdept', type: 'input' },
        { label: '签订劳动合同时间', prop: 'supdept', type: 'date' },
        { label: '签订劳动合同年限', prop: 'supdept', type: 'input' }

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
