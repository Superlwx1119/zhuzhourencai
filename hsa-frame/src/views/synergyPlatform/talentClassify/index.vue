<!--预付金审核 -->
<template>
  <div class="height-full" style="position: relative">
    <normal-layer :search-number="itemsDatas.length">
      <template slot="search-header">
        <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm">
          <div>
            <MyButton type="reset" @click="reset" />
            <MyButton type="search" @click="iniSearch" />
          </div>
        </FormItems>
      </template>
      <div slot="table-title" class="box-header handle">
        <span class="box-title">[协同]审核列表</span>
        <div class="box-tools">
          <MyButton type="export" title="导出" @click="exportTable()" />
          <MyButton type="print" title="打印" @click="printTable()" />
        </div>
      </div>
      <template>
        <my-table-view v-loading="loading" :columns="columns" :data="tableData" :have-expand="false" :max-cloumns="100" :is-configheader="false" :multiple-selection.sync="multipleSelection" :show-summary="true" />
        <Pagination :data="paginationQuery" @refresh="pageChange" />
      </template>
    </normal-layer>
  </div>
</template>

<script>
import pageHandle from '@/mixins/pageHandle'
import NormalLayer from '@/views/components/PageLayers/normalLayer'
import FormItems from '@/views/components/PageLayers/form-items'
import { tableColumns } from './tableConfig'
export default {
  components: {
    NormalLayer,
    FormItems
  },
  mixins: [pageHandle],
  data() {
    return {
      dialogVisible: false,
      dialogTitle: '',
      loading: false,
      multipleSelection: [],
      queryForm: {
        name: '',
        cardType: '',
        cardNum: '',
        dwmc: '',
        sblb: '',
        lxdh: ''
      },
      itemsDatas: [
        { label: '姓名', prop: 'name', type: 'input' },
        { label: '证件类型', prop: 'cardType', type: 'codeTable', codeKey: 'xxx', options: [] },
        { label: '证件号码', prop: 'cardNum', type: 'input' },
        { label: '单位名称', prop: 'dwmc', type: 'input' },
        { label: '申报类别', prop: 'sblb', type: 'codeTable', codeKey: 'xxx', options: [] },
        { label: '联系电话', prop: 'lxdh', type: 'input' }
      ],
      columns: tableColumns,
      tableData: []
    }
  },
  mounted() {
    this.iniSearch()
  },
  methods: {
    search() {
    },
    // 导出
    exportTable() {},
    // 打印
    printTable() {}
  }
}
</script>

