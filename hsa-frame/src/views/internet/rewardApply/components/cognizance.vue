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
        supdept: '',
        xx: ''
      },
      itemsDatas: [
        { label: '企业名称', prop: 'supdept', type: 'input' },
        { label: '纳税人代码', prop: 'supdept', type: 'input' },
        { label: '企业地址', prop: 'supdept', type: 'input' },
        { label: '邮编', prop: 'supdept', type: 'input' },
        { label: '年纳税额（万元）', prop: 'xx', type: 'number' }
      ],
      rules: {
        xx: [{ required: true, message: '请输入', trigger: 'blur' }]

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
