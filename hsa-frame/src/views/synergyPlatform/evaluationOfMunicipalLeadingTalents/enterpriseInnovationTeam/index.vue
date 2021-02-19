<template>
  <div class="box">
    <div class="box-header">
      <span class="box-title">企业信息</span>
    </div>
    <div class="box-body">
      <FormItems ref="ruleForm" :model="queryForm" :items-datas="itemsDatas" :form-datas="queryForm" :is-grid="false" />
    </div>
  </div>
</template>

<script>
import FormItems from '@/views/components/PageLayers/form-items'
export default {
  name: '',
  components: { FormItems },
  data() {
    return {
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
      itemsDatas: [
        { label: '企业名称', prop: 'qymc', type: 'input', span: 16 },
        { label: '组织机构', prop: 'zzjg', type: 'input' },
        { label: '企业性质', prop: 'qyxz', type: 'codeTable', codeKey: '', options: [] },
        { label: '所属行业', prop: 'sshy', type: 'codeTable', codeKey: '', options: [] },
        { label: '法定代表人', prop: 'fddbr', type: 'input' },
        { label: '成交时间', prop: 'cjsj', type: 'date' },
        { label: '注册资金(万元)', prop: 'zczl', type: 'input' },
        { label: '邮编', prop: 'yb', type: 'input' },
        { label: '通讯地址', prop: 'txdz', type: 'input', span: 24 }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang = "sass" scoped>

</style>
