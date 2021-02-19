<template>
  <form-dialog
    class="audit-dialog-wrapper"
    :title="dialogTitle"
    :is-show="firstDialogVisible"
    size="big"
    width="1200px"
    @update:isShow="isShow"
  >
    <div class="box" style="height:auto">
      <div class="box-header">
        <span class="box-title">团队核心成员基本信息</span>
      </div>
      <div class="box-body">
        <el-row :gutter="12">
          <el-col :span="8">
            <div class="upload">
              <el-upload
                class="avatar-uploader"
                action="#"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon" />
              </el-upload>
            </div>
          </el-col>
          <el-col :span="16">
            <form-items
              ref="ruleFrom"
              :items-datas="itemsDatas"
              :model="dataForm"
              :rules="rules"
              :form-datas="dataForm"
              :is-grid="false"
            />
          </el-col>
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
import validator from '@/utils/el-validator.js'
export default {
  model: {
    prop: 'firstDialogVisible',
    event: 'closeAll'
  },
  props: {
    dialogTitle: {
      type: String,
      default: ''
    },
    firstDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      itemsDatas: [
        { label: '姓名', prop: 'name', type: 'input', span: 12 },
        { label: '性别', prop: 'sex', type: 'codeTable', codeKey: 'xxx', options: [], span: 12 },
        { label: '出生日期', prop: 'date', type: 'date', span: 12 },
        { label: '国籍', prop: 'country', type: 'codeTable', codeKey: 'xxx', options: [], span: 12 },
        { label: '籍贯', prop: 'jg', type: 'input', span: 12 },
        { label: '专业技术职务', prop: 'zw', type: 'input', span: 12 },
        { label: '证件类型', prop: 'zjlx', type: 'codeTable', codeKey: 'xxx', options: [], span: 12 },
        { label: '证件号码', prop: 'zjhm', type: 'input', span: 12 },
        { label: '最高学位', prop: 'zgxw', type: 'codeTable', codeKey: 'xxx', options: [], span: 12 },
        { label: '手机号码', prop: 'phone', type: 'input', span: 12 },
        { label: '电子邮箱', prop: 'email', type: 'input', span: 12 }
      ],
      dataForm: {
        name: '',
        sex: '',
        date: '',
        country: '',
        jg: '',
        zw: '',
        zjlx: '',
        zjhm: '',
        zgxw: '',
        phone: '',
        email: ''
      },
      imageUrl: '',
      rules: {
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择', trigger: 'change' }],
        date: [{ required: true, message: '请选择', trigger: 'change' }],
        country: [{ required: true, message: '请选择', trigger: 'change' }],
        jg: [{ required: true, message: '请输入', trigger: 'blur' }],
        zw: [{ required: true, message: '请输入', trigger: 'blur' }],
        zjlx: [{ required: true, message: '请选择', trigger: 'change' }],
        zjhm: [{ validator: validator, required: true, regexp: 'identityCard', trigger: 'blur' }],
        zgxw: [{ required: true, message: '请选择', trigger: 'change' }],
        phone: [{ validator: validator, required: true, regexp: 'phone', trigger: 'blur' }],
        email: [{ validator: validator, required: true, regexp: 'email', trigger: 'blur' }]
      }
    }
  },
  methods: {
    isShow(v) {
      this.$emit('closeAll', v)
    },
    closeDialog() {
      this.$emit('closeAll', false)
    },
    saveChange() {},
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
  height: 100%;
}
.avatar-uploader  /deep/.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader  /deep/.el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 288px;
    height: 288px;
    line-height: 288px;
    text-align: center;
  }
  .avatar {
    width: 288px;
    height: 288px;
    display: block;
  }
</style>
