<template>
  <!-- 学术兼职及在国内外重要学术会议做大会报告或特邀报告情况 -->
  <div class="box">
    <div class="box-header handle">
      <span class="box-title ">学术兼职及在国内外重要学术会议做大会报告或特邀报告情况</span>
      <div slot="title-btns" class="box-tools">
        <my-button type="primary" title="增加学术报告信息" @click="addReportInfo" />
      </div>
    </div>
    <div class="box-body">
      <my-table-view ref="table2" v-loading="loading" :columns="columns" :data="thirdData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
  </div>
</template>
<script>
import { thirdColumns } from '../tableConfig'
export default {
  data() {
    return {
      loading: false,
      columns: thirdColumns,
      thirdData: [
        { x: 'xxx' }
      ]
    }
  },
  methods: {
    // 增加学术报告信息
    addReportInfo() {}
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
