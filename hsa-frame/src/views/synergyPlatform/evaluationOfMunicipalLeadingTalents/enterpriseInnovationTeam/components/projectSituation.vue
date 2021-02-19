<template>
  <!-- 入选国家级、湖南省、株洲市人才项目情况 -->
  <div class="box">
    <div class="box-header handle">
      <span class="box-title ">入选国家级、湖南省、株洲市人才项目情况</span>
      <div slot="title-btns" class="box-tools">
        <my-button type="primary" title="增加项目情况信息" @click="addProjectInfo" />
      </div>
    </div>
    <div class="box-body">
      <my-table-view ref="table2" v-loading="loading" :columns="columns" :data="fourData" :height="300">
        <template slot="operation" slot-scope="scope">
          <my-button icon="edit" @click="editRow(scope.row)" />
          <my-button icon="delete" @click="deleteRow(scope.row)" />
        </template>
      </my-table-view>
    </div>
  </div>
</template>
<script>
import { fourColumns } from '../tableConfig'
export default {
  data() {
    return {
      loading: false,
      columns: fourColumns,
      fourData: [
        { x: 'xxx' }
      ]
    }
  },
  methods: {
    // 增加项目情况信息
    addProjectInfo() {}
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
