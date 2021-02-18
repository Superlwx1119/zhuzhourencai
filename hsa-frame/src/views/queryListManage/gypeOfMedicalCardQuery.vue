<!-- 就医刷卡类别查询统计 -->
<template>
  <auto-size-layer>
    <div slot="header" class="search-wrapper">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :rules="rules">
        <MyButton type="reset" @click="reset" />
        <MyButton type="search" @click="iniSearch" />
      </FormItems>
    </div>

    <div class="box">
      <box-title title-name="就医刷卡类别查询统计" />
      <div v-loading="loading" class="box-body">
        <iframe :src="srcUrl" frameborder="0" width="100%" height="100%" />
      </div>
    </div>
  </auto-size-layer>
</template>

<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import AutoSizeLayer from '@/views/components/PageLayers/autoSizeLayer'
import PageHandle from '@/mixins/pageHandle'
export default {
  components: {
    BoxTitle,
    AutoSizeLayer
  },
  mixins: [PageHandle],
  data() {
    return {
      loading: false,
      srcUrl: '',
      itemsDatas: [
        { label: '就医起始时间', prop: 'dateRange', type: 'dateRange' },
        { label: '医院等级', prop: 'instisLv', type: 'codeTable', codeKey: 'MEDINSLV' },
        { label: '就医类型', prop: 'medType', type: 'dateRange', codeKey: 'MED_TYPE' },
        { label: '定点医疗机构', prop: 'fixmedinsCode', type: 'component', componentName: 'MedicalInstitutionsSelect/index', folder: 'Common' },
        { label: '参保险种', prop: 'insutype', type: 'select', options: [
          { label: '职工基本医疗保险', value: '310' },
          { label: '城乡居民基本医疗保险', value: '390' }
        ] }
      ],
      queryForm: {
        dateRange: [],
        instisLv: '',
        medType: '',
        fixmedinsCode: '',
        insutype: ''
      },
      rules: {}
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    search() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)

      let begnDate = ''
      let endDate = ''
      if (this.queryForm.dateRange && this.queryForm.dateRange.length > 0) {
        begnDate = this.queryForm.dateRange[0]
        endDate = this.queryForm.dateRange[1]
      }
      const baseUrl = window.location.protocol + '\/\/' + window.location.host + '/fine-rpt/decision/view/report?viewlet=hsa-ais/paycard/ais_med_paycard_stt.cpt&'
      // const baseUrl = 'http://10.196.161.16:20001/hsa-hgs-ihs/api/psntrtdclamgt/psnfix/listPsnFixCollect?viewlet=hsa-hgs/选点、改点及转诊情况汇总表.cpt&'
      const paramsStr = `
      begndate=${begnDate}&
      endDate=${endDate}&
      instisLv=${this.queryForm.instisLv}&
      medType=${this.queryForm.medType}&
      fixmedinsCode=${this.queryForm.fixmedinsCode}&
      insutype=${this.queryForm.insutype}
      `
      this.srcUrl = baseUrl + paramsStr
    }
  }
}
</script>

<style lang='scss' scoped>
  .search-wrapper{
    padding-top: 16px;
    background: #fff;
    border-radius: 4px;
  }
</style>

