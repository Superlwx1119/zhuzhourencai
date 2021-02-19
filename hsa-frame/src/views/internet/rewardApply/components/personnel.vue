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
        { label: '联系人姓名', prop: 'xx', type: 'input' },
        { label: '办公电话', prop: 'supdept', type: 'input' },
        { label: '手机', prop: 'supdept', type: 'input' },
        { label: '邮箱', prop: 'supdept', type: 'input' }
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
