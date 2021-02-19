<template>
  <!-- 企业信息 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title">企业信息</span>
    </div>
    <div class="box-body" style="height:auto">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :is-grid="false" :rules="rules" />
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
          <FormItems ref="ruleForm" :model="queryForm0" :items-datas="itemsDatas0" :form-datas="queryForm0" :is-grid="false" :rules="rules" />
        </el-col>
      </el-row>
      <my-table-view ref="table" v-loading="loading" :columns="columns" :data="firstData" :height="300" />
    </div>
  </div>
</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
import { firstColumns } from '../tableConfig'
export default {
  components: { FormItems },
  data() {
    return {
      imageUrl: '',
      loading: false,
      queryForm: {
        qymc: '',
        zzjg: '',
        qyxz: '',
        sshy: '',
        fddbr: '',
        cjsj: '',
        zczl: '',
        yb: '',
        txdz: ''
      },
      queryForm0: {
        tdmc: ''
      },
      itemsDatas: [
        { label: '企业名称', prop: 'qymc', type: 'input', span: 16 },
        { label: '组织机构', prop: 'zzjg', type: 'input' },
        { label: '企业性质', prop: 'qyxz', type: 'codeTable', codeKey: '', options: [] },
        { label: '所属行业', prop: 'sshy', type: 'codeTable', codeKey: '', options: [] },
        { label: '法定代表人', prop: 'fddbr', type: 'input' },
        { label: '成交时间', prop: 'cjsj', type: 'date' },
        { label: '注册资金(万元)', prop: 'zczl', type: 'input' },
        { label: '邮编', prop: 'yb', type: 'input' },
        { label: '通讯地址', prop: 'txdz', type: 'input', span: 24 },
        { label: '职工总数', prop: 'zgzs', type: 'input' },
        { label: '其中本科以上人员', prop: 'bkysry', type: 'input' },
        { label: '其中研究开发人员', prop: 'yjkfry', type: 'input' }
      ],
      itemsDatas0: [
        { label: '姓名', prop: 'name', type: 'input', span: 12 },
        { label: '电话/传真', prop: 'tel', type: 'input', span: 12 },
        { label: '手机', prop: 'phone', type: 'input', span: 12 },
        { label: '电子邮箱', prop: 'email', type: 'input', span: 12 }
      ],
      columns: firstColumns,
      firstData: [
        { x: 'xxx' }
      ],
      rules: {
        qymc: [{ required: true, message: '请输入', trigger: 'blur' }],
        zzjg: [{ required: true, message: '请输入', trigger: 'blur' }],
        qyxz: [{ required: true, message: '请选择', trigger: 'change' }],
        sshy: [{ required: true, message: '请选择', trigger: 'change' }],
        fddbr: [{ required: true, message: '请输入', trigger: 'blur' }],
        cjsj: [{ required: true, message: '请选择', trigger: 'change' }],
        zczl: [{ required: true, message: '请输入', trigger: 'blur' }],
        txdz: [{ required: true, message: '请输入', trigger: 'blur' }],
        zgzs: [{ required: true, message: '请输入', trigger: 'blur' }],
        bkysry: [{ required: true, message: '请输入', trigger: 'blur' }],
        yjkfry: [{ required: true, message: '请输入', trigger: 'blur' }],
        name: [{ required: true, message: '请输入', trigger: 'blur' }],
        tel: [{ required: true, message: '请输入', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入', trigger: 'blur' }],
        email: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
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
    width: 124px;
    height: 124px;
    line-height: 124px;
    text-align: center;
  }
  .avatar {
    width: 124px;
    height: 124px;
    display: block;
  }
</style>
