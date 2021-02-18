<!-- 单纯的上传文件 -->
<template>
  <div class="upload-file-wrapper">
    <el-popover
      v-model="showVisible"
      trigger="manual"
      placement="top"
      width="160"
    >
      <div class="error-box">
        {{ errorMsg }}
      </div>
      <el-button
        slot="reference"
        type="primary"
        :disabled="disabled || fileList.length >= limit"
        :loading="uploadLoading"
        style="margin-right: 10px"
        @click="uploadBtnClick"
      >上传</el-button>
    </el-popover>

    <input
      ref="uploadFileInput"
      :accept="accept"
      :multiple="false"
      type="file"
      style="height: 0; width: 0;"
      @change="filesChange"
    >

    <template v-if="needShowFiles">
      <div v-show="placeholder || fileList.length > 0" v-loading="baxLoading" class="files-box">
        <span v-show="fileList.length <= 0" class="place">{{ placeholder }}</span>
        <template v-show="fileList.length > 0">
          <files-tag
            v-for="(item, index) in fileList"
            :key="item[fileKeyObj.idKey]"
            :file-id="item[fileKeyObj.idKey]"
            :content="item[fileKeyObj.nameKey]"
            :disabled="disabled"
            @close="deleteFile(item, index)"
          />
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import FilesTag from './filesTag'
import { efileUpload, efileDelete } from '@/api/Common/FileRequest'
export default {
  components: {
    FilesTag
  },
  model: {
    prop: 'filesLists',
    event: 'change'
  },
  props: {
    filesLists: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    uploadedFiles: { // 已上传文件路径
      type: Array,
      default: () => []
    },
    accept: { // 上传文件类型
      type: String,
      default: 'xls, xlsx'
    },
    limit: { // 最大上传文件个数
      type: Number,
      default: 5
    },
    maxFileSize: { // 文件上传大小设置(单位M)
      type: Number,
      default: 5
    },
    fileKeyObj: {
      type: Object,
      default: () => {
        return {
          idKey: 'fileId',
          nameKey: 'attName'
        }
      }
    },
    needShowFiles: { // 是否需要显示文件信息，上传完成后文件信息展示
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      showVisible: false,
      showTimer: null,
      errorMsg: '',
      fileList: [...this.filesLists],
      baxLoading: false,
      uploadLoading: false
    }
  },
  watch: {
    filesLists(newVal) {
      this.fileList = JSON.parse(JSON.stringify(newVal))
    }
  },
  methods: {
    getFileSize(obj) {
      // eslint-disable-next-line no-unused-vars
      let fileSize = 0
      const isIE = /msie/i.test(navigator.userAgent) && !window.opera
      if (isIE && !obj.files) {
        var filePath = obj.value
        // eslint-disable-next-line no-undef
        var fileSystem = new ActiveXObject('Scripting.FileSystemObject')
        var file = fileSystem.GetFile(filePath)
        fileSize = file.Size
      } else {
        fileSize = obj.files[0].size
      }
      return fileSize
    },
    filesChange(e) {
      this.showVisible = false
      if (e.target.files && e.target.files.length <= 0) {
        return
      }
      if (this.fileList.length >= this.limit) {
        this.errorShow('文件个数不能超过' + this.limit + '个')
        e.target.value = ''
        return false
      }
      const fileSize = this.getFileSize(e.target)
      console.log(fileSize)
      if (fileSize > this.maxFileSize * 1024 * 1024) {
        this.errorShow('文件大小不能超过' + this.maxFileSize + 'M')
        e.target.value = ''
        return false
      }
      const file = e.target.files[0]
      // eslint-disable-next-line prefer-const
      let formData = new FormData()
      formData.append('file', file)
      this.uploadLoading = true
      efileUpload(formData).then(res => {
        this.uploadLoading = false
        this.fileList.push({
          [this.fileKeyObj.idKey]: res.data.fileId,
          [this.fileKeyObj.nameKey]: res.data.filename,
          fileType: res.data.fileType
        })
        this.$emit('change', JSON.parse(JSON.stringify(this.fileList)))
        e.target.value = ''
      }).catch(() => {
        this.uploadLoading = false
        e.target.value = ''
      })
    },
    deleteFile(file, index) {
      this.$msgConfirm('确认删除吗?').then(() => {
        this.deleteEvent(file, index)
      }).catch(() => {})
    },
    deleteEvent(file, index) {
      const params = {
        fileId: file[this.fileKeyObj.idKey]
      }
      this.baxLoading = true
      efileDelete(params).then(res => {
        this.baxLoading = false
        this.fileList.splice(index, 1)
        this.$emit('change', JSON.parse(JSON.stringify(this.fileList)))
      }).catch(() => { this.baxLoading = false })
    },
    errorShow(content) {
      this.errorMsg = content
      this.showVisible = true
      if (this.showTimer) clearInterval(this.showTimer)
      // eslint-disable-next-line prefer-const
      let index = 1
      this.showTimer = setTimeout(() => {
        if (index >= 10) {
          this.showVisible = false
        }
        index++
      }, 1000)
    },
    uploadBtnClick() {
      this.$refs.uploadFileInput.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.upload-file-wrapper{
  width: 100%;
  height: 32px;
  display: flex;
  .files-box{
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    .place{
      color: #c3c3c3;
    }
  }
  .files-box::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 1px;
    background: $--color-primary
  }
}
.error-box{
  color: red
}
</style>
