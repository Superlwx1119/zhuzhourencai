<template>
  <!-- 团队基本信息 -->
  <div class="box">
    <div class="box-header">
      <span class="box-title">团队基本信息</span>
    </div>
    <div class="box-body" style="height:auto">
      <FormItems ref="ruleForm" :model="queryForm1" :items-datas="itemsDatas1" :form-datas="queryForm1" :is-grid="false" :rules="rules" />
      <div class="button-list">
        <my-button type="primary" title="完善团队负责人基本信息" @click="basicInfo" />
        <my-button type="primary" title="增加团队核心成员信息" @click="teamInfo" />
      </div>
      <my-table-view ref="table1" v-loading="loading" :columns="columns" :data="secData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
    <BasicInfo v-model="firstDialogVisible" :dialog-title="firstDialogTitle" />
    <TeamInfo v-model="secDialogVisible" :dialog-title="secDialogTitle" />
  </div>
</template>
<script>
import FormItems from '@/views/components/PageLayers/form-items'
import BasicInfo from './basicInfo'
import TeamInfo from './teamInfo'
import { secColumns } from '../tableConfig'
export default {
  components: { FormItems, BasicInfo, TeamInfo },
  data() {
    return {
      loading: false,
      firstDialogVisible: false,
      secDialogVisible: false,
      firstDialogTitle: '',
      secDialogTitle: '',
      queryForm1: {
        tdmc: ''
      },
      itemsDatas1: [
        { label: '团队名称', prop: 'tdmc', type: 'input', span: 24 }
      ],
      columns: secColumns,
      secData: [
        { x: 'xxx' }
      ],
      rules: {
        tdmc: [{ required: true, message: '请输入', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 完善团队负责人基本信息
    basicInfo() {
      this.firstDialogVisible = true
      this.firstDialogTitle = '完善团队负责人基本信息'
    },
    // 增加团队核心成员信息
    teamInfo() {
      this.secDialogVisible = true
      this.secDialogTitle = '增加团队核心成员信息'
    }
  }
}
</script>
<style lang="scss" scoped>
.button-list{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin:10px 0;
}

</style>
