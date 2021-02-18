<!-- 门诊定点人数汇总查询-->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="门诊定点人数汇总查询"
  >
    <template slot="search-header">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm">
        <div>
          <MyButton type="reset" @click="reset" />
          <MyButton type="search" @click="iniSearch" />
        </div>
      </FormItems>
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :have-pagination="false"
    >
      <template slot="stponName" slot-scope="scope">
        {{ scope.row.stpon === '1' ? '集体选点' : '自由选点' }}
      </template>
    </my-table-view>
    <!-- <Pagination :data="paginationQuery" @refresh="pageChange" /> -->

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'

import PageHandle from '@/mixins/pageHandle'
import { listPsnFixPeopleInfo } from '@/api/queryListManage/request'
export default {
  components: {
    NormalLayer
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      itemsDatas: [
        { label: '定点医疗机构', prop: 'fixmedinsCode', type: 'component', componentName: 'MedicalInstitutionsSelect/index', folder: 'Common' },
        { label: '定点起止时间', prop: 'dateRange', type: 'dateRange' },
        { label: '险种', prop: 'insutype', type: 'codeTable', codeKey: 'INSUTYPE', options: [] },
        { label: '选点方式', prop: 'stpon', type: 'codeTable', codeKey: 'PSN_STPON', options: [] },
        { label: '申请时间段', prop: 'appyDateRange', type: 'dateRange' },
        { label: '汇总方式', prop: 'queryType', type: 'select', options: [
          { label: '人员类别', value: '1' },
          { label: '选点方式', value: '2' }
        ] }
      ],
      queryForm: {
        fixmedinsCode: '',
        dateRange: '',
        insutype: '',
        stpon: '',
        appyDateRange: [],
        queryType: '1'
      },
      queryType: '1',
      tableData: []
    }
  },
  computed: {
    columns() {
      const obj = [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'fixmedinsCode', label: '医院编码' },
        { prop: 'fixmedinsName', label: '医院名称' }
      ]
      if (this.queryType === '1') {
        return [
          ...obj,
          // { prop: 'peopleSum', label: '人数' },
          { prop: 'psnTypeName', label: '人员类别' },
          { prop: 'peopleSum', label: '定点人数' }
        ]
      } else {
        return [
          ...obj,
          { prop: 'stponName', label: '选点方式', type: 'custom', slotName: 'stponName' },
          { prop: 'peopleSum', label: '定点人数' }
        ]
      }
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      const params = {
        ...this.queryForm,
        pageNum: this.paginationQuery.pageNum,
        pageSize: this.paginationQuery.pageSize
      }
      if (this.queryForm.dateRange && this.queryForm.dateRange.length > 0) {
        params.begndate = this.queryForm.dateRange[0]
        params.enddate = this.queryForm.dateRange[1]
      }
      if (this.queryForm.appyDateRange && this.queryForm.appyDateRange.length > 0) {
        params.crteBegnDate = this.queryForm.appyDateRange[0]
        params.crteEndDate = this.queryForm.appyDateRange[1]
      }
      this.queryType = this.queryForm.queryType
      listPsnFixPeopleInfo(params).then(res => {
        if (res.code === 0) {
          this.loading = false
          this.tableData = res.data
          // this.setPaginationQuery(res.data)
        } else {
          this.loading = false
          this.tableData = []
          this.$msgError(res.message)
        }
      }).catch(error => {
        console.log(error)
        this.tableData = []
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.credit-file-maintenance {
  position: relative;
}
.el-form-item__content{
  width: 300px;
}
</style>

