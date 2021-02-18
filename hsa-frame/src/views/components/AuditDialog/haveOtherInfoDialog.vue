<!-- 审核 确认框 (携带其他信息，详情等。。。) -->
<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    :size="size"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <slot />
    <div v-if="!auditDisable" class="box" style="height: auto">
      <box-title title-name="审核" />
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
              v-for="obj in auditOptions"
              :key="obj.label"
              :label="obj.label"
            >
              {{ obj.name }}
            </el-radio>
          </el-radio-group>
        </template>
      </form-items>
    </div>

    <span slot="footer" class="dialog-footer">
      <my-button type="close" title="取消" @click="closeDialog" />
      <my-button type="submit" title="确认" :loading="sureLoading" @click="submit" />
    </span>
  </form-dialog>

</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
import BoxTitle from '@/views/components/PageLayers/box-title'
export default {
  components: {
    FormItems,
    BoxTitle
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
    size: {
      type: String,
      default: 'big' // big, middle, small
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
    },
    auditDisable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sureLoading: false,
      formItemsDatas: [
        { label: this.handleName + '状态', prop: 'statue', type: 'custom', span: 24 },
        { label: this.handleName + '意见', prop: 'content', type: 'textarea', autosize: { minRows: 3 }, span: 24 }
      ],
      dataForm: {
        statue: '1',
        content: ''
      },
      rules: {
        statue: [{ required: true, message: '请选择', trigger: 'change' }]
      }
    }
  },
  created() {
    this.setDefaultVal()
  },
  methods: {
    setDefaultVal() {
      const val = this.auditOptions.length > 0 ? this.auditOptions[0].label : '1'
      if (val) this.dataForm.statue = val
    },
    resetForm() {
      this.sureLoading = false
      this.rules = {
        statue: [{ required: true, message: '请选择', trigger: 'change' }]
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
          statue: [{ required: true, message: '请选择', trigger: 'blur' }]
        }
      } else if (val === 2 || val === '2') {
        this.rules = {
          statue: [{ required: true, message: '请选择', trigger: 'blur' }]
        }
      } else {
        this.rules = {
          statue: [{ required: true, message: '请选择', trigger: 'blur' }],
          content: [{ required: true, message: '请输入', trigger: 'blur' }]
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
