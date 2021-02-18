<!-- 文件上传 -->
<template>
  <div class="upload-dialog-wrapper">
    <div class="download-box">
      <div class="title">下载模板</div>
      <div class="content">
        <span class="text-content">为提高数据导入的成功率，请下载并使用系统提供的模板。</span>
        <my-button type="export" :loading="exportLoading" title="下载模板" @click="downloadFile" />
      </div>
    </div>

    <div class="upload-box">
      <div class="title">上传文件</div>
      <div class="content">
        <span>仅支持xlsx，xls文件类型，文件小于10M</span>
        <my-button type="import" @click="selectFiles">选择文件</my-button>
      </div>
      <div class="upload-content">
        <el-upload
          ref="upload"
          :http-request="uploadFiles"
          action=""
          class="upload-demo"
          :multiple="multiple"
          :limit="limit"
          :accept="accept"
          :file-list="fileList"
          :on-change="fileChange"
          :auto-upload="false"
          :before-upload="beforeUpload"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :on-exceed="handleExceed"
        >
          <el-button v-show="false" ref="selectfileBtn" slot="trigger" size="small" type="primary">选取文件</el-button>
          <div v-show="showExceed" slot="tip" class="el-upload__tip">{{ '文件最多上传'+limit+'个' }}</div>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
import { UPLOAD_API, UPLOAD_EXCEL_TYPE } from '@/utils/fileTrans'
import { importExcel, importExcel_ctc } from '@/api/Common/FileRequest'
export default {
  components: {

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
    accept: { // 上传文件类型
      type: String,
      default: UPLOAD_EXCEL_TYPE
    },
    action: {
      type: String,
      default: UPLOAD_API
    },
    multiple: { // 是否可以多选
      type: Boolean,
      default: false
    },
    limit: { // 最大上传文件个数
      type: Number,
      default: 1
    },
    uploadParams: {
      type: Object,
      default: () => {}
    },
    exportLoading: {
      type: Boolean,
      default: false
    },
    maxFileSize: { // 文件上传大小设置(单位M)
      type: Number,
      default: 10
    },
    severType: {
      type: String,
      default: 'mdt'
    }
  },
  data() {
    return {
      fileList: [],
      currentAllFileList: [], // 这个是目前所有的文件，里面包括已上传的和未上传的
      showExceed: false
    }
  },
  computed: {
    importReq() {
      if (this.severType === 'ctc') {
        return importExcel_ctc
      } else {
        return importExcel
      }
    }
  },
  watch: {
    isDialogVisible(newVal) {
      if (!newVal) {
        this.currentAllFileList = []
        this.fileList = []
        this.showExceed = false
      }
    }
  },
  created() {
    this.currentAllFileList = JSON.parse(JSON.stringify(this.fileList))
  },
  methods: {
    selectFiles() {
      // console.log(this.$refs.selectfileBtn)
      this.$refs.selectfileBtn.$el.click()
    },
    fileChange(file, fileList) {
      this.currentAllFileList = fileList
    },
    // 自定义上传
    uploadFiles(data) {
      // console.log(data)
      if (data.file.size > this.maxFileSize * 1024 * 1024) {
        this.$message.error('单个文件大小不能超过' + this.maxFileSize + 'MB，请重新选择文件。')
        data.onError()
        return
      }
      const formData = new FormData()
      formData.append('file', data.file)
      formData.append('params', this.uploadParams.params)
      data.onProgress({ percent: 0 })
      this.importReq(formData).then(res => {
        data.onSuccess(res)
      }).catch((err) => {
        this.$alert(err.message, '提示', {
          confirmButtonText: '确定'
        })
        data.onError()
      })
    },
    handleExceed(files, fileList) {
      this.showExceed = true
      this.$message.error('文件数不能超过' + this.limit + '个!')
    },
    beforeUpload() {
      this.$emit('beforeUpload')
    },
    uploadSuccess(v) {
      this.$emit('uploadSuccess', v)
    },
    uploadError() {
      this.$emit('uploadError')
    },
    // 点击导出模板按钮
    downloadFile() {
      this.$emit('downloadFile')
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-dialog-wrapper{
  padding: 0 50px;
  line-height: 40px;
  box-sizing: border-box;
  .title{
    color: $title;
    font-size: $const;
    font-weight: bold;
  }
  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
/deep/.el-upload-list {
  flex-wrap: wrap;
}
/deep/.upload-demo{
  line-height: 0;
  margin-bottom: 10px;
}
</style>
