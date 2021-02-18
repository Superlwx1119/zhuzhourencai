<!-- 人员信息 -->
<template>
  <el-popover
    ref="people-select-popver"
    placement="bottom-start"
    width="800"
    trigger="hover"
  >

    <table-items
      :item-datas="itemsDatas"
      :form-datas="allData"
    />

    <i slot="reference" class="el-icon-info infor" />
  </el-popover>
</template>

<script>
import TableItems from '@/views/components/PageLayers/table-items'
export default {
  components: {
    TableItems
  },
  props: {
    allData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      itemsDatas: [
        [
          { label: '姓名', prop: 'psnName' },
          { label: '证件号码', prop: 'certno' },
          { label: '证件类型', prop: 'psnCertTypeName' }
        ]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.infor{
  cursor: pointer;
  font-size: 17px;
}
</style>
