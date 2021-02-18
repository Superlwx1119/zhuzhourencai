<!-- 审核 确认框 -->
<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="small"
    width="450px"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <form-items
      ref="ruleFrom"
      :model="dataForm"
      :rules="rules"
      :is-grid="false"
      :items-datas="formItemsDatas"
      :form-datas="dataForm"
    >
      <template slot="statue">
        <el-radio-group v-model="dataForm.statue" @change="changeEvent">
          <el-radio
            v-for="obj in options"
            :key="obj.label"
            :label="obj.label"
          >
            {{ obj.name }}
          </el-radio>
        </el-radio-group>
      </template>
    </form-items>

    <span slot="footer" class="dialog-footer">
      <my-button type="close" title="取消" @click="closeDialog" />
      <my-button type="submit" title="确认" :loading="sureLoading" :disabled="sureLoading" @click="submit" />
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  components: {
    FormItems
  },
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    isDialogVisible: {
      type: Boolean,
      default: false
    },
    dialogTitle: {
      type: String,
      default: '标题'
    },
    handleName: {
      type: String,
      default: '审核'
    },
    auditOptions: {
      type: Array,
      default: () => {
        return [
          { label: '1', name: '审核通过' },
          { label: '0', name: '审核不通过' }
        ]
      }
    }
  },
  data() {
    return {
      sureLoading: false,
      options: this.auditOptions,
      formItemsDatas: [],
      dataForm: {
        statue: '1',
        content: ''
      },
      rules: {
        statue: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }]
      }
    }
  },
  computed: {

  },
  watch: {
    isDialogVisible: {
      handler(val) {
        if (this.isDialogVisible === true) {
          if (this.handleName === '审签') {
            this.options = [
              { label: '1', name: '审签通过' },
              { label: '0', name: '审签不通过' }
            ]
            this.formItemsDatas = [
              { label: '审签状态', prop: 'statue', type: 'custom', span: 24 },
              { label: '审签意见', prop: 'content', type: 'textarea', autosize: { minRows: 3 }, span: 24 }]
          } else if (this.handleName === '复核') {
            this.formItemsDatas = [
              { label: '复核状态', prop: 'statue', type: 'custom', span: 24 },
              { label: '复核意见', prop: 'content', type: 'textarea', autosize: { minRows: 3 }, span: 24 }]
          } else if (this.handleName === '审核') {
            this.formItemsDatas = [
              { label: '审核状态', prop: 'statue', type: 'custom', span: 24 },
              { label: '审核意见', prop: 'content', type: 'textarea', autosize: { minRows: 3 }, span: 24 }]
          } else {
            this.options = [
              { label: '1', name: '审核通过' },
              { label: '0', name: '审核不通过' }
            ]
            this.formItemsDatas = [
              { label: '审核状态', prop: 'statue', type: 'custom', span: 24 },
              { label: '审核意见', prop: 'content', type: 'textarea', autosize: { minRows: 3 }, span: 24 }]
          }
        }
        console.log(this.labelName, 55)
        console.log(this.handleName, 666)
      }
    }
  },
  created() {
    this.setDefaultVal()
  },
  methods: {
    setDefaultVal() {
      const val = this.options.length > 0 ? this.options[0].label : '1'
      if (val) this.dataForm.statue = val
    },
    resetForm() {
      this.sureLoading = false
      this.rules = {
        statue: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }]
      }
      this.$refs.ruleFrom.elForm.resetFields()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.sureLoading = false
      this.$emit('closeAll', false)
    },
    changeEvent(val) {
      if (val === '1' || val === 1) {
        this.rules = {
          statue: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }]
        }
      } else if (val === 2 || val === '2') {
        this.rules = {
          statue: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }]
        }
      } else {
        this.rules = {
          statue: [{ required: true, message: '请选择', trigger: ['change', 'blur'] }],
          content: [{ required: true, message: '请输入', trigger: ['change', 'blur'] }]
        }
      }
      this.$refs.ruleFrom.elForm.clearValidate()
    },
    submit() {
      this.$refs.ruleFrom.elForm.validate((valid) => {
        if (valid) {
          this.sureLoading = true
          this.$emit('submit', {
            data: { ...this.dataForm },
            fn: (msg, statue = 'success') => {
              this.sureLoading = false
              if (statue === 'success') {
                this.$msgSuccess(msg || '提交成功')
                this.closeDialog()
              } else {
                this.sureLoading = false
              }
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/.el-radio+.el-radio {
  margin-left: 30px !important;
}
</style>
