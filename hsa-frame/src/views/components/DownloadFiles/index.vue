<!-- 下载文件，单纯的详情里面的点击链接下载文件 -->
<template>
  <el-link :underline="false" type="primary" title="点击下载" @click="downloadClick">
    <slot> {{ content }} </slot>
  </el-link>
</template>

<script>
import CommonApi from '@/api/Common/Api'
export default {
  props: {
    fileId: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      fileHref: ''
    }
  },
  methods: {
    downloadClick() {
      if (this.isImg(this.content)) {
        this.fileHref = CommonApi.efileImageQuery + '/' + this.fileId
      } else {
        this.fileHref = CommonApi.efileDownload + '?fileId=' + this.fileId
      }
      window.top.open(this.fileHref)
      // const params = {
      //   fileId: this.fileId
      // }
      // efileDownload(params).then(res => {
      //   window.open(res)
      // }).catch(() => {})
    },
    isImg(name) {
      var idx = name.indexOf('.')
      if (idx === -1) {
        console.warn('name格式不正确，请检查')
        return
      }
      var type = name.substr(idx + 1).toLowerCase()
      const imgArr = [
        'bmp', 'jpg', 'png', 'tif', 'gif',
        'pcx', 'tga', 'exif', 'fpx', 'svg',
        'psd', 'cdr', 'pcd', 'dxf', 'ufo',
        'eps', 'ai', 'raw', 'WMF', 'webp'
      ]
      return imgArr.indexOf(type) !== -1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
