<!-- 门诊定点人数查询 -->
<template>
  <normal-layer
    :search-number="itemsDatas.length"
    title-name="门诊定点人数查询"
    title-need-handle
  >
    <template slot="search-header">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm">
        <div>
          <MyButton type="reset" @click="reset" />
          <MyButton type="search" @click="iniSearch" />
        </div>
      </FormItems>
    </template>

    <template slot="title-btns">
      <my-button type="import" :loading="export_loading" title="导出" @click="exportFile" />
    </template>

    <my-table-view
      v-loading="loading"
      :data="tableData"
      :columns="columns"
      :have-pagination="false"
    >
      <template slot="stpon" slot-scope="scope">
        {{ scope.row.stpon === '1' ? '集体' : '非集体' }}
      </template>
    </my-table-view>
    <!-- <Pagination :data="paginationQuery" @refresh="pageChange" /> -->

  </normal-layer>
</template>

<script>
import NormalLayer from '@/views/components/PageLayers/normalLayer'

import PageHandle from '@/mixins/pageHandle'
import { exportExcel } from '@/api/Common/Request'
import { listPsnFixDetlInfo } from '@/api/queryListManage/request'
import moment from 'moment'
export default {
  components: {
    NormalLayer
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      export_loading: false,
      itemsDatas: [
        // { label: '统计年月', prop: 'monthRange', type: 'monthRange', valueFormat: 'yyyyMM', clearable: false }
        { label: '统计日期', prop: 'dateRange', type: 'dateRange', clearable: false }
      ],
      queryForm: {
        // monthRange: [
        //   moment().startOf('year').format('YYYYMM'),
        //   moment().endOf('year').format('YYYYMM')
        // ]
        dateRange: [
          moment().startOf('year').format('YYYY-MM-DD'),
          moment().endOf('year').format('YYYY-MM-DD')
        ]
      },
      columns: [
        { type: 'index', label: '序号', width: '55px' },
        { prop: 'fixmedinsName', label: '医院名称', minWidth: '155px' },
        { prop: 'psnName', label: '姓名', align: 'center', minWidth: '125px' },
        { prop: 'psnTypeName', label: '人员类别', align: 'center' },
        { prop: 'begndate', label: '定点开始时间', align: 'center' },
        { prop: 'enddate', label: '定点截止时间', align: 'center' },
        { prop: 'insutypeName', label: '所属险种', align: 'center', minWidth: '155px' },
        { prop: 'fixmedinsCode', label: '医院编码', align: 'center' },
        // { prop: 'updtTime', label: '单位名称', align: 'center', customProp: 'date' },
        { prop: 'crteTime', label: '申请时间', align: 'center', minWidth: '125px' },
        { prop: 'stpon', slotName: 'stpon', type: 'custom', label: '是否集体选点', align: 'center' },
        { prop: 'memo', label: '备注', align: 'center', minWidth: '200px' }
        // { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
      ],
      tableData: []
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      const params = {
        begndate: this.queryForm.dateRange[0],
        enddate: this.queryForm.dateRange[1]
        // pageSize: this.paginationQuery.pageSize,
        // pageNum: this.paginationQuery.pageNum
      }
      listPsnFixDetlInfo(params).then(res => {
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
    },
    // 导出
    exportFile() {
      if (this.queryForm.dataRange && this.queryForm.dataRange.length > 0) {
        this.queryForm.begntime = this.queryForm.dataRange[0]
        this.queryForm.endtime = this.queryForm.dataRange[1]
      } else {
        this.queryForm.begntime = ''
        this.queryForm.endtime = ''
      }
      const params = {
        params: {
          excelHeader: '',
          tmplNo: 'Psn_Fix_Detl_Info_Export',
          serviceName: 'PsnFixServiceImpl',
          methodName: 'listPsnFixDetlInfoExport',
          bizParams: this.queryForm,
          title: '门诊定点人数查询',
          fileName: '门诊定点人数查询',
          datePattern: 'yyyy-MM-dd HH:mm:ss'
        }
      }

      this.export_loading = true
      exportExcel(params).then(res => {
        const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.download = '门诊定点人数查询.xlsx'
        link.href = url
        link.click()
        this.export_loading = false
      }).catch(() => {
        this.export_loading = false
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

