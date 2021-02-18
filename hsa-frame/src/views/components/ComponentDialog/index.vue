<!-- 弹框二次封装 一般用于编辑，详情等弹框 -->
<template>
  <form-dialog
    :is-show="dialogValideta"
    v-bind="$attrs"
    :custom-class="isEdit ? 'form-dialog-no-footer' : ''"
    hidden-footer
    @update:isShow="isShowEvent"
    @resetForm="resetForm"
  >
    <template v-if="getcomopnent">
      <component
        :is="getcomopnent"
        ref="componentView"
        v-bind="$attrs"
        :is-show="dialogValideta"
        v-on="$listeners"
        @close="closeDialog"
      />
    </template>
    <span v-if="!isEdit" slot="footer">
      <my-button type="close" title="关闭" @click="closeDialog" />
    </span>
  </form-dialog>
</template>
<script>

export default {
  model: {
    prop: 'dialogValideta',
    event: 'closeAll'
  },
  props: {
    dialogValideta: {
      type: Boolean,
      default: false
    },
    componentName: { // 组件名
      type: String,
      default: ''
    },
    modulesPath: { // 模块路径
      type: String,
      default: ''
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    getcomopnent() {
      return require('@/views/' + this.modulesPath + '/' + this.componentName).default
    }
  },
  methods: {
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShowEvent(v) {
      this.$emit('closeAll', false)
    },
    resetForm() {
      if (this.$refs.componentView.resetForm) this.$refs.componentView.resetForm()
    },
    // 获取弹框内部页面对象
    getcomopnentView() {
      return this.$refs.componentView
    },
    // 保存
    saveClick() {
      this.$refs.componentView.saveClick()
    }
  }
}
</script>
<style lang="scss">

</style>
