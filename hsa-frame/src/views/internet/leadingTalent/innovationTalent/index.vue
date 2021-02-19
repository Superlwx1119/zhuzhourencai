<template>
  <div class="box">
    <div class="box-body">
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">基本信息</span>
      </div>
      <el-row :gutter="12">
        <el-col :span="4" style="text-align:center">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-col>
        <el-col :span="20">
          <FormItems ref="ruleForm" :is-grid="false" :item-span="12" :model="baseForm" :items-datas="baseItems" :form-datas="baseForm" :rules="rules" />
        </el-col>
      </el-row>
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">详情信息</span>
      </div>
      <FormItems ref="ruleForm" :is-grid="false" :model="detailForm" :items-datas="detailItems" :form-datas="detailForm" :rules="rules" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">工作单位信息</span>
      </div>
      <FormItems ref="ruleForm" :is-grid="false" :model="workForm" :items-datas="workItems" :form-datas="workForm" :rules="rules" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">个人简历信息</span>
      </div>
      <el-input v-model="resume" type="textarea" rows="5" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">申报人近 5 年代表性业绩成果</span>
      </div>
      <my-table-view
        :data="tableData"
        :columns="columns"
        :have-pagination="false"
      >
        <template slot="stpon" slot-scope="scope">
          {{ scope.row.stpon === '1' ? '集体' : '非集体' }}
        </template>
      </my-table-view>
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">申报人自我评价</span>
      </div>
      <el-input v-model="comment" type="textarea" rows="5" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">支撑保障</span>
      </div>
      <el-input v-model="security" type="textarea" rows="5" />

    </div>
  </div>
</template>

<script>
import { baseItems, detailItems, workItems, columns } from './formConfig'
export default {
  name: 'InnovationTalent',
  data() {
    return {
      security: '',
      resume: '',
      comment: '',
      tableData: [],
      detailForm: {},
      workForm: {},
      baseForm: {},
      imageUrl: '',
      baseItems,
      detailItems,
      workItems,
      columns,
      rules: {}
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
    }
  }
}
</script>

<style lang="scss" scoped>
  /deep/ .box-body{
    overflow-y: auto !important;
  }
  /deep/ .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
   /deep/ .avatar-uploader .el-upload:hover {
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

