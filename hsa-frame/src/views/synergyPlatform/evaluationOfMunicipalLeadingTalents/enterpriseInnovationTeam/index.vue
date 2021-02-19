<template>
  <div class="box" style="height:auto">
    <!-- 企业信息 -->
    <div class="box-header">
      <span class="box-title">企业信息</span>
    </div>
    <div class="box-body" style="height:auto">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :is-grid="false" />
      <my-table-view ref="table" v-loading="loading" :columns="firstColumns" :data="firstData" :height="300" />
    </div>
    <!-- 团队基本信息 -->
    <div class="box-header">
      <span class="box-title">团队基本信息</span>
    </div>
    <div class="box-body" style="height:auto">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas1" :form-datas="queryForm1" :is-grid="false" />
      <div class="button-list">
        <my-button type="primary" title="完善团队负责人基本信息" @click="basicInfo" />
        <my-button type="primary" title="增加团队核心成员信息" @click="teamInfo" />
      </div>
      <my-table-view ref="table1" v-loading="loading1" :columns="secColumns" :data="secData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
    <!-- 团队构成及合作基础 -->
    <div class="box-header">
      <span class="box-title">团队构成及合作基础</span>
    </div>
    <div class="box-body" style="height:auto">
      <div class="small-title">
        <p style="color:#666">重点描述团队围绕整体研究方向的学科或研究领域布局、任务分工及协同机制，研究能力、学术或技术水平、对所属科学技术领域和相关产业影响等方面的情况。</p>
      </div>
      <el-input v-model="Cooperation" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
    <!-- 学术兼职及在国内外重要学术会议做大会报告或特邀报告情况 -->
    <div class="box-header handle">
      <span class="box-title ">学术兼职及在国内外重要学术会议做大会报告或特邀报告情况</span>
      <div slot="title-btns" class="box-tools">
        <my-button type="primary" title="增加学术报告信息" @click="addReportInfo" />
      </div>
    </div>
    <div class="box-body">
      <my-table-view ref="table2" v-loading="loading2" :columns="thirdColumns" :data="thirdData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
    <!-- 入选国家级、湖南省、株洲市人才项目情况 -->
    <div class="box-header handle">
      <span class="box-title ">入选国家级、湖南省、株洲市人才项目情况</span>
      <div slot="title-btns" class="box-tools">
        <my-button type="primary" title="增加项目情况信息" @click="addProjectInfo" />
      </div>
    </div>
    <div class="box-body">
      <my-table-view ref="table2" v-loading="loading3" :columns="fourColumns" :data="fourData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
    <!-- 团队及负责人自我评价 -->
    <div class="box-header">
      <span class="box-title ">团队及负责人自我评价</span>
    </div>
    <div class="box-body">
      <div class="small-title">
        <p style="color:#666">1. 团队评价（主要包括团队形成背景、围绕整体研究方向核心成员的学科布局、任务分工及协同机制，研究能力、学术或技术水平、对所属科学技术领域和相关产业影响等方面的情况）；</p>
        <p style="color:#666">2. 团队负责人评价（主要包括研究能力、学术或技术水平、组织协调和团队管理能力、对所属科学技术领域和相关产业影响等方面的情况）</p>
      </div>
      <el-input v-model="SelfEvaluation" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
    <!-- 现有基础及团队发展规划 -->
    <div class="box-header">
      <span class="box-title ">现有基础及团队发展规划</span>
    </div>
    <div class="box-body">
      <div class="small-title">
        <p style="color:#666">1. 推动未来研究工作的现实基础（科研基础、科研条件等）；</p>
        <p style="color:#666">2. 拟开展的研究在国际国内同领域所处的地位，研究主要内容及创新点，团队的组织管理、运行机制，团队负责人能力提升、人才培养、团队建设等。</p>
      </div>
      <el-input v-model="Development" type="textarea" :placeholder="placeholder" rows="8" />
    </div>
    <!-- 支撑保障 -->
    <div class="box-header">
      <span class="box-title ">支撑保障</span>
    </div>
    <div class="box-body">
      <el-input v-model="Development" type="textarea" :placeholder="placeholder1" rows="8" />
    </div>
    <basicInfo v-model="isDialogVisible" :dialog-title="dialogTitle" />
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
import basicInfo from './components/basicInfo'
import { firstColumns, secColumns, thirdColumns, fourColumns } from './tableConfig'
export default {
  name: '',
  components: { FormItems, basicInfo },
  data() {
    return {
      isDialogVisible: false,
      dialogTitle: '',
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      Cooperation: '',
      SelfEvaluation: '',
      Development: '',
      placeholder: '',
      placeholder1: '包括依托单位提供的支持保障条件等',
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
      queryForm1: {
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
      itemsDatas1: [
        { label: '团队名称', prop: 'tdmc', type: 'input', span: 24 }
      ],
      firstColumns,
      secColumns,
      thirdColumns,
      fourColumns,
      firstData: [
        { x: 'xxx' }
      ],
      secData: [
        { x: 'xxxx' }
      ],
      thirdData: [
        { x: 'xxxx' }
      ],
      fourData: [
        { x: 'xxxx' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 完善团队负责人基本信息
    basicInfo() {
      this.isDialogVisible = true
      this.dialogTitle = '完善团队负责人基本信息'
    },
    // 增加团队核心成员信息
    teamInfo() {},
    // 增加学术报告信息
    addReportInfo() {},
    // 增加项目情况信息
    addProjectInfo() {}
  }
}
</script>

<style lang = "scss" scoped>
.button-list{
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  margin:10px 0;
}
.small-title{
  height:auto;
  background-color: #F9F9F9;
  p{
    line-height: 32px;
    margin: 0 0 10px 0;
    text-indent: 2em;
  }
}
</style>
