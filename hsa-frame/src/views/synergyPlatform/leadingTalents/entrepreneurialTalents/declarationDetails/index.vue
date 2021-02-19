<template>
  <!-- 创业类人才 -->
  <div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">基本信息</span>
      </div>
      <div class="box-body tss" style="display:flex;">
        <div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-progress="handleAvatarProgress"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div
              v-else
              style="color: #ccc;
    font-size: 20px;
    width: 200px;"
            >点击上传头像</div>
            <!-- <i v-else class="el-icon-plus avatar-uploader-icon" /> -->
          </el-upload>
        </div>
        <form-items
          ref="ruleFrom"
          :rules="rules"
          :model="searchForm"
          :is-grid="false"
          :items-datas="itemDatas"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <!-- <div class="box-header">
        <span class="box-title">详细信息</span>
      </div> -->
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :is-grid="false"
          :rules="rules1"
          :model="searchForm"
          :items-datas="itemDatas1"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <!-- <div class="box-header">
        <span class="box-title">工作单位信息</span>
      </div> -->
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :is-grid="false"
          :model="searchForm"
          :rules="rules2"
          :items-datas="itemDatas22"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">个人简历信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :is-grid="false"
          :model="searchForm"
          :items-datas="itemDatas3"
          :form-datas="searchForm"
          label-width="0px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title"> 创办企业基本信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :rules="rules"
          :model="searchForm"
          :is-grid="false"
          :items-datas="itemDatas4"
          :form-datas="searchForm"
          label-width="130px"
        />
        <my-table-view
          :columns="tableColumns2"
          :data="tableData"
          :multiple-selection.sync="multipleSelection"
          height="357px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">主要创业情况</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :is-grid="false"
          :model="searchForm"
          :items-datas="itemDatas3"
          :form-datas="searchForm"
          label-width="0px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">创业项目及市场前景</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :is-grid="false"
          :model="searchForm"
          :items-datas="itemDatas3"
          :form-datas="searchForm"
          label-width="0px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">业务附件</span>
      </div>
      <div class="box-body ts">
        <my-table-view
          :columns="tableColumns"
          :data="tableData"
          :multiple-selection.sync="multipleSelection1"
          height="357px"
        />
      </div>
    </div>
    <BottomFixed>
      <template #tools>
        <my-button title="提交" style="margin-left: 10px;" type="add" @click="submitAll" />
        <my-button title="保存" style="margin-left: 10px;" type="save" @click="saveAll" />
        <my-button title="关闭" style="margin-left: 10px;" type="cancel" @click="closeAll" />
      </template>
    </BottomFixed>
  </div>
</template>

<script>
import BottomFixed from '@/views/components/BottomFixed/index'
import itemDatas from '../../mixin/itemDatas'
export default {
  components: {
    BottomFixed
  },
  mixins: [itemDatas],
  data() {
    return {
      tableData: [],
      tableData1: [],
      multipleSelection: [],
      multipleSelection1: [],
      searchForm: {},
      imageUrl: ''
    }
  },
  methods: {
    iniSearch() {},
    reset() {},
    submitAll() {},
    saveAll() {},
    closeAll() {},
    handleAvatarProgress(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },

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
.flexContent{
   display: flex;
   justify-content: space-around;
   align-items: flex-end;
}
/deep/ .box+.box{
    margin-top:0px !important;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
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
  .footer{
      text-align: right;
  }
  .tss{
    align-items: center;
  }
  // .ts{
  //   display: flex;
  //   width: auto;
  //   justify-content: center;
  // }
  // /deep/ .el-textarea{
  //   width: 100%;
  // textarea{
  //      width: 800px
  // }
  // }
  .textLine{
    border: 1px solid #ccc;
      width: 80%;
      background-color: #fff;
      padding: 10px;
        li{
     list-style: none;
      padding: 10px;
  }
  }
</style>

