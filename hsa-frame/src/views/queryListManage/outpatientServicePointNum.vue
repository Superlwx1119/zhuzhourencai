<!-- 普通门诊选点、改点及转诊业务汇总查询 -->
<template>
  <auto-size-layer>
    <div slot="header" class="search-wrapper">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :rules="rules">
        <MyButton type="reset" @click="reset" />
        <MyButton type="search" @click="iniSearch" />
      </FormItems>
    </div>

    <div class="box">
      <box-title title-name="普通门诊选点、改点及转诊业务汇总查询" />
      <div v-loading="loading" class="box-body">
        <iframe ref="cnm_bb" :src="srcUrl" frameborder="0" width="100%" height="100%" />
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
        { label: '业务区间', prop: 'dateRange', type: 'dateRange' }
      ],
      queryForm: {
        dateRange: []
      },
      rules: {
        chkStas: { required: true, message: '请输入审核状态', trigger: 'blur' }
      }
    }
  },
  mounted() {
    this.search()
    // this.$refs.cnm_bb.onload = this.onload
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
      const baseUrl = window.location.protocol + '\/\/' + window.location.host + '/fine-rpt/decision/view/report?viewlet=hsa-hgs/选点、改点及转诊情况汇总表.cpt&'
      // const baseUrl = 'http://10.196.161.16:20001/fine-rpt/decision/view/report?viewlet=hsa-hgs/选点、改点及转诊情况汇总表.cpt&'
      const paramsStr = `begndate=${begnDate}&endDate=${endDate}`

      this.srcUrl = baseUrl + paramsStr
    },
    onload() {
      // console.log('hello')
      // this.$refs.cnm_bb.onload = null
      // this.$refs.cnm_bb.onload = this.onload
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

