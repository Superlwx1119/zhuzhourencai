<template>
  <el-tag
    class="files-tag-box"
    closable
    color="transparent"
    type="danger"
    :disabled="disabled"
    @close="handleClose"
  >
    <slot>
      <!-- <el-link :underline="false" type="primary" title="点击下载" @click="downloadClick">{{ content }}</el-link> -->
      <file-download :file-id="fileId" :content="content" />
    </slot>
  </el-tag>
</template>

<script>
import FileDownload from '@/views/components/DownloadFiles'
export default {
  components: {
    FileDownload
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fileId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-icon-close {
  vertical-align: sub;
}
.files-tag-box{
  border-color: transparent;
}
// .files-tag-box + .files-tag-box {
//   margin-left: 10px;
// }
</style>
