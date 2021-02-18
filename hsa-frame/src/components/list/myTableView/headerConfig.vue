<!-- 表格头部配置器 -->
<template>
  <div class="config-header">
    <el-popover
      placement="bottom"
      width="180"
      trigger="click"
    >
      <div class="check-header">
        <el-checkbox-group v-if="showCheckbox" v-model="checkList" :min="min" @change="headerCheckboxChange">
          <el-checkbox
            v-for="item in sel_options"
            :key="item.label + item.type + item.prop"
            :label="item.label"
            @click.native="optionsClick(item.label)"
          />
        </el-checkbox-group>
      </div>
      <div slot="reference">
        <i class="el-icon-s-fold" />
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'tableOption',
    event: 'change'
  },
  props: {
    tableOption: {
      type: Array,
      default: () => []
    },
    min: {
      type: Number,
      default: 5
    },
    allColums: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      checkList: [],
      sel_options: [],
      showCheckbox: true,
      newAllColumns: [] // 添加全部选择
    }
  },
  watch: {
    allColums(newVal) {
      this.getNewAllColunmns()
    }
  },
  created() {
    this.getNewAllColunmns()
  },
  methods: {
    getNewAllColunmns() {
      const allColums = JSON.parse(JSON.stringify(this.allColums))
      this.newAllColumns = allColums
      this.newAllColumns.unshift({ label: '全部', type: 'custom' })
      this.getCheckList()
      this.getSelOptions()
    },
    getSelOptions() {
      this.sel_options = this.newAllColumns.filter(item => { // 默认全部的表头内容
        if (item.type === 'custom' || !item.type) {
          return item
        }
      })
    },
    getCheckList() {
      this.checkList = this.newAllColumns.map(data => data.label)
    },
    headerCheckboxChange(val) {
      const filterArr = this.newAllColumns.filter(a => {
        return val.indexOf(a.label) >= 0 && a.label !== '全部'
      })

      this.$emit('change', filterArr)
    },
    optionsClick(val) {
      if (val === '全部') {
        this.showCheckbox = false
        this.$nextTick(() => {
          this.getNewAllColunmns()
          const filterArr = this.newAllColumns.filter(a => {
            return a.label !== '全部'
          })
          this.$emit('change', filterArr)
          this.showCheckbox = true
        })
        //
      } else {
        this.$nextTick(() => {
          this.checkList = this.checkList.map((v) => {
            if (v !== '全部') {
              return v
            }
          })
          this.showCheckbox = true
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.check-header{
  max-height: 500px;
  overflow-y: auto;
}
</style>
