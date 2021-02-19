<template>
  <div class="box">
    <div class="box-body">
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">个人基本信息</span>
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
          <FormItems ref="ruleForm" :is-grid="false" :item-span="12" :model="queryForm" :items-datas="baseItems" :form-datas="queryForm" :rules="baseRules" />
        </el-col>
      </el-row>
      <FormItems ref="ruleForm" :is-grid="false" :model="queryForm" :items-datas="baseItemsBtm" :form-datas="queryForm" :rules="baseRulesBtm" />
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
        <span class="box-title">创办企业基本信息</span>
      </div>
      <FormItems ref="ruleForm" :is-grid="false" :model="queryForm" :items-datas="workItems" :form-datas="queryForm" :rules="rules" />
      <my-table-view
        :data="tableData"
        :columns="columns"
        :have-pagination="false"
        style="height:300px"
      >
        <template slot="stpon" slot-scope="scope">
          {{ scope.row.stpon === '1' ? '集体' : '非集体' }}
        </template>
      </my-table-view>
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">主要创业情况</span>
      </div>
      <el-input v-model="experience" type="textarea" placeholder="主要阐述申报人研究能力、学术或技术水平、对推动所属科学技术领域和相关产业发展等取得的创新性成果、业绩及贡献" rows="5" />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">创业项目及市场前景</span>
      </div>
      <el-input
        v-model="experience"
        type="textarea"
        :placeholder="placeholder"
        rows="5"
      />
      <div
        slot="table-title"
        class="box-header handle"
      >
        <span class="box-title">业务附件</span>
      </div>
    </div>
  </div>
</template>

<script>
import { baseItems, baseItemsBtm, workItems, columns, baseRules, baseRulesBtm } from './formConfig'
export default {
  name: 'EntrepreneurshipTalent',
  data() {
    return {
      placeholder: ` 1.创业项目名称。\n 2.创业项目关键技术来源及知识产权状况,核心技术转化和应用情况,项目亮点及产品特色,与同行业同类项目的创新性比较,项目发展前景等。\n 3.创业项目商业模式、发展阶段及运营现状,技术及产品的市场需求和竞争力、营 销策略、未来盈利预测等。`,
      experience: '',
      resume: '',
      columns,
      baseItems,
      baseRules,
      workItems,
      baseItemsBtm,
      baseRulesBtm,
      imageUrl: '',
      queryForm: {},
      rules: {},
      tableData: []
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

