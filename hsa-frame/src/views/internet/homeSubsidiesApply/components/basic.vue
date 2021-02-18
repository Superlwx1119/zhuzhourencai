<template>
  <div class="box" style="height: auto;">
    <div class="box-body">
      <el-row>
        <el-col :span="4">
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
        <el-col :span="20">
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
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      dataForm: {
        supdept: '',
        sex: ''
      },
      itemsDatas: [
        { label: '姓名', prop: 'supdept', type: 'input', span: 12 },
        { label: '性别', prop: 'sex', type: 'select', span: 12 },
        { label: '证件类型', prop: 'supdept', type: 'input', span: 12 },
        { label: '证件号码', prop: 'supdept', type: 'input', span: 12 },
        { label: '出生日期', prop: 'supdept', type: 'date', span: 12 },
        { label: '籍贯', prop: 'supdept', type: 'input', span: 12 },
        { label: '民族', prop: 'supdept', type: 'select', span: 12 },
        { label: '政治面貌', prop: 'supdept', type: 'select', span: 12 }

      ],
      rules: {
        sex: [{ required: true, message: '请选择', trigger: 'change' }]
      },
      imageUrl: ''

    }
  },
  methods: {
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
    },
    resetFields() {
      this.$refs.ruleFrom.elForm.resetFields()
    },
    validate() {
      let valided = false
      this.$refs.ruleFrom.elForm.validate(valid => {
        if (valid) {
          valided = true
        }
      })
      return valided
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
