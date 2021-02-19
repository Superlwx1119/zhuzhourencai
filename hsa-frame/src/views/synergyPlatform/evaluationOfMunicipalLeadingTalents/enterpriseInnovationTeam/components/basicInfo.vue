<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box">
      <div class="box-header">
        <span class="box-title">团队负责人基本信息</span>
      </div>
      <div class="box-body">
        <el-row :gutter="12">
          <el-col :span="4" />
        </el-row>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <my-button type="close" @click="closeDialog" />
      <my-button type="save" @click="saveChange" />
    </span>
  </form-dialog>
</template>
<script>
export default {
  model: {
    prop: 'isDialogVisible',
    event: 'closeAll'
  },
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    isDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    isShow(v) {
      this.$emit('closeAll', v)
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveChange() {}
  }
}
</script>
<style lang="scss" scoped>

</style>
