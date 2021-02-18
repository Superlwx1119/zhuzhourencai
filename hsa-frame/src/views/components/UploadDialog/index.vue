<!-- 上传文件弹框 导入功能 -->
<template>
  <form-dialog
    class="upload-files-wrapper"
    :title="dialogTitle"
    :is-show="isDialogVisible"
    size="middle"
    @update:isShow="isShow"
    @resetForm="resetForm"
  >
    <div v-if="formItems.length > 0 && !uploadFinish" class="form-wrapper">
      <form-items ref="ruleForm" :items-datas="itemsDatas" :form-datas="queryForm" :model="queryForm" :rules="rules" :is-grid="false" />
    </div>
    <Upload
      v-show="!uploadFinish"
      ref="uploadRef"
      :sever-type="severType"
      :upload-params="uploadData"
      :is-dialog-visible="isDialogVisible"
      :export-loading="exportLoading"
      v-bind="this.$attrs"
      v-on="$listeners"
      @beforeUpload="beforeUpload"
      @uploadSuccess="uploadSuccess"
      @uploadError="uploadError"
      @downloadFile="downloadFile"
    />
    <Finish v-show="uploadFinish" ref="finishRef" :success-num="successNum" :error-num="errorNum" />

    <!-- 上传进度 -->
    <div v-show="isUploading" class="uploadProcess">
      <div class="upload-details-box">
        <div class="upload-text">
          正在上传中，请稍等...
        </div>
        <el-progress :percentage="percentage" />
      </div>
    </div>

    <span slot="footer" class="dialog-footer">
      <my-button type="close" title="关闭" @click="closeDialog" />
      <my-button v-show="!uploadFinish" type="import" title="开始上传" @click="uploadEvent" />
      <my-button v-show="uploadFinish" type="import" title="继续导入" @click="uploadAgainEvent" />
    </span>
  </form-dialog>

</template>
<script>
// import AreaSelect from '@/views/components/PageSelects/Common/AreaSelect'
// import LocalSelect from '@/views/components/PageSelects/Common/LocalSelect'
import Upload from './upload'
import Finish from './finish'
import PageHandle from '@/mixins/pageHandle'
import FormItems from '@/views/components/PageLayers/form-items'
import { deepClone } from '@/utils'
import { XLS_TYPE, XLSX_TYPE } from '@/utils/fileTrans'
import { exportExcel, download } from '@/api/Common/Request'
export default {
  components: {
    Upload,
    Finish,
    FormItems
    // AreaSelect,
    // LocalSelect
  },
  mixins: [PageHandle],
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
      default: '上传文件'
    },
    formItems: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    },
    uploadForm: {
      type: Object,
      default: () => {}
    },
    uploadParams: {
      type: Object,
      default: () => {}
    },
    downloadType: { //  1 : download   2: exportExcel
      type: Number,
      default: 1
    },
    downloadParams: {
      type: Object,
      default: () => {}
    },
    isExportValid: {
      type: Boolean,
      default: true
    },
    severType: { // 后台微服务类型 mdt, ctc
      type: String,
      default: 'mdt'
    }
  },
  data() {
    return {
      exportLoading: false,
      percentage: 0,
      isUploading: false,
      timerObj: null,
      uploadFinish: false,
      queryForm: {},
      uploadData: { params: '' },
      finishFlag: false,
      successNum: 0,
      errorNum: 0
    }
  },
  watch: {
    isDialogVisible(newVal) {
      if (newVal && this.formItems.length > 0 && this.uploadForm !== {}) {
        this.itemsDatas = deepClone(this.formItems)
        this.queryForm = deepClone(this.uploadForm)
        this.itemsDatas.forEach(item => {
          if (this.queryForm.hasOwnProperty('empNo') && item.prop === 'empNo' && item.type === 'component') {
            this.$set(item, 'fn', (v) => {
              this.queryForm.empNo = v.empNo
              this.queryForm.empName = v.empName
            })
          }
          if (this.queryForm.hasOwnProperty('psnNo') && item.prop === 'psnNo' && item.type === 'component') {
            this.$set(item, 'fn', (v) => {
              this.queryForm.psnNo = v.psnNo
            })
          }
        })

        this.reset()
      }
    }
  },
  methods: {
    // 上传事件
    uploadEvent() {
      if (this.$refs.uploadRef.currentAllFileList.length <= 0) {
        this.$message.error('请选择文件')
        return
      }
      const isHaveNotUploadFile = this.$refs.uploadRef.currentAllFileList.some(item => {
        if (item.status === 'ready') {
          return true
        }
      })
      if (!isHaveNotUploadFile) {
        // this.$msgError('请选择文件')
        this.$message.error('当前文件已全部上传完毕，请继续选择文件')
        return
      }
      const paramsObj = deepClone(this.uploadParams)
      let flag = false
      if (this.rules && this.rules !== {}) { // 有必传项表单
        this.$refs.ruleForm.elForm.validate(v => {
          if (v) {
            flag = true
            paramsObj.params = this.queryForm
          }
        })
      } else {
        if (Object.keys(this.queryForm).length > 0) { // 有选填的表单
          paramsObj.params = this.queryForm
        }
        flag = true
      }
      if (flag) {
        this.uploadData.params = JSON.stringify(paramsObj)
        this.$refs.uploadRef.$refs.upload.submit()
      }
    },
    handleProgress() {
      this.isUploading = true
      if (this.timerObj) this.timerObj = null
      this.timerObj = setInterval(() => {
        if (this.percentage >= 100) {
          clearInterval(this.timerObj)
          this.isUploading = false
          this.percentage = 0
          this.uploadFinish = true
          return
        }
        if (this.percentage === 95 && !this.finishFlag) {
          clearInterval(this.timerObj)
          return
        }
        this.percentage += 5
      }, 100)
    },
    // 上传之前
    beforeUpload() {
      this.uploadFinish = false
      this.handleProgress()
    },
    // 上传成功
    uploadSuccess(res) {
      if (res.code === 0) {
        this.finishFlag = true
        this.finishUpload()
        this.successNum = res.data.successNum || '--'
        this.errorNum = res.data.errorNum || '--'
        this.$emit('success')
      } else {
        this.uploadError()
        this.$msgError(res.message)
        // this.open(res.message)
      }
    },
    // 上传失败
    uploadError() {
      this.finishFlag = true
      this.finishUpload()
      this.successNum = 0
      this.errorNum = 1
    },
    open(message) {
      this.$alert(message, '错误信息', {
        confirmButtonText: '确定'
        // callback: action => {
        //   this.$message({
        //     type: 'info',
        //     message: `action: ${action}`
        //   })
        // }
      })
    },
    // 上传完成处理未走完的进度条
    finishUpload() {
      if (this.percentage === 95) {
        clearInterval(this.timerObj)
        this.isUploading = false
        this.percentage = 0
        this.uploadFinish = true
      }
    },
    // 继续上传
    uploadAgainEvent() {
      this.uploadFinish = false
      this.finishFlag = false
      this.successNum = 0
      this.errorNum = 0
      this.percentage = 0
    },
    resetForm() {
      this.uploadAgainEvent()
      this.reset()
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    isShow(v) {
      this.$emit('closeAll', false)
    },
    // 点击导出模板按钮
    downloadFile() {
      if (this.downloadType === 1) {
        this.download()
      } else {
        if (this.isExportValid) {
          this.$refs.ruleForm.elForm.validate(v => {
            if (v) {
              const params = deepClone(this.downloadParams)
              if (Object.keys(this.queryForm).length > 0) {
                params.bizParams = this.queryForm
              }
              this.exportExcel({ params })
            }
          })
        } else {
          const params = deepClone(this.downloadParams)
          if (Object.keys(this.queryForm).length > 0) {
            params.bizParams = this.queryForm
          }
          this.exportExcel({ params })
        }
      }
    },
    // 带参数导出
    exportExcel(params) {
      this.exportLoading = true
      exportExcel(params).then(res => {
        this.exportLoading = false
        const { fileName, fileType } = this.handleFile(res.headers['content-disposition'])
        const blob = new Blob([res.data], { type: fileType === 'xls' ? XLS_TYPE : XLSX_TYPE })
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileName + '.' + fileType)
        } else {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          URL.revokeObjectURL(url)
          document.body.removeChild(link)
        }
      }).catch(() => {
        this.exportLoading = false
      })
    },
    // 直接根据id导出
    download() {
      this.exportLoading = true
      download(this.downloadParams).then(res => {
        this.exportLoading = false
        const { fileName, fileType } = this.handleFile(res.headers['content-disposition'])
        const blob = new Blob([res.data], { type: fileType === 'xls' ? XLS_TYPE : XLSX_TYPE })
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob, fileName + '.' + fileType)
        } else {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.style.display = 'none'
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          URL.revokeObjectURL(url)
          document.body.removeChild(link)
        }
      }).catch(() => {
        this.exportLoading = false
      })
    },
    // 根据响应头处理文件
    handleFile(disposition) {
      let fileName = ''
      let fileType = ''
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
      const matches = filenameRegex.exec(disposition)
      if (matches != null && matches[1]) {
        fileName = decodeURIComponent(matches[1].replace(/['"]/g, '')).split('.')[0]
        fileType = decodeURIComponent(matches[1].replace(/['"]/g, '')).split('.')[1]
      }
      return { fileName, fileType }
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/.upload-files-wrapper{
  position: relative;
}
.form-wrapper {
  margin: 0 -16px 16px;
  padding: 0 16px;
  border-bottom: 1px solid $border;
}
.uploadProcess{
  padding: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  .upload-details-box{
    width: 100%;
    padding: 20px;
    height: auto;
    box-sizing: border-box;
    color: $title;
    background: #fff;
    border-radius: 3px;
    .upload-text{
      text-align: left;
    }
  }
}
</style>
