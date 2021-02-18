// 每个菜单页面，有头部搜索和列表以及分页的，可以用混入来代替
export default {
  data() {
    return {
      loading: false,
      queryForm: {},
      paginationQuery: {
        pageSize: window.top.innerWidth >= 1920 ? 15 : 10,
        pageNum: 1,
        total: 0,
        startRow: 0,
        endRow: 0
      }
    }
  },
  created() {

  },
  methods: {
    reset() {
      if (this.$refs.ruleForm) {
        this.$refs.ruleForm.resetFields()
      } else if (this.$refs.ruleFrom) {
        this.$refs.ruleFrom.resetFields()
      }
    },
    iniSearch() {
      this.$set(this.paginationQuery, 'pageNum', 1)
      this.$set(this.paginationQuery, 'total', 0)
      this.$set(this.paginationQuery, 'startRow', 0)
      this.$set(this.paginationQuery, 'endRow', 0)
      this.search()
      // this.queryChange = false
    },
    search() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    setPaginationQuery(data) {
      this.$set(this.paginationQuery, 'total', data.recordCounts)
      this.$set(this.paginationQuery, 'startRow', data.startRow)
      this.$set(this.paginationQuery, 'endRow', data.endRow)
    },
    pageChange(data) {
      this.paginationQuery = data.pagination
      this.search()
    },
    deleteClick(row) {
      this.$msgConfirm('确认删除吗?').then(() => {
        this.deleteEvent(row)
      }).catch(() => {})
    },
    batchDeleteClick() {
      if (this.multipleSelection && this.multipleSelection.length > 0) {
        this.$msgConfirm('确认删除吗?').then(() => {
          this.deleteEvent()
        }).catch(() => {})
      } else {
        this.$message.closeAll()
        this.$message.warning('请选择数据')
      }
    },
    editSuccess() {
      console.log('刷新')
      this.search()
    },
    // 时间范围的数据转出为对象数据数据
    dateRangeFomatToObj(dateRange, begnTimeKey, endTimeKey) {
      if (!(dateRange && Array.isArray(dateRange) && begnTimeKey && endTimeKey)) return {}
      if (dateRange && dateRange.length > 0) {
        return {
          [begnTimeKey]: dateRange[0],
          [endTimeKey]: dateRange[1]
        }
      } else {
        return {
          [begnTimeKey]: '',
          [endTimeKey]: ''
        }
      }
    },
    /** cloumns正常一维数组转成生成table-item的二维数组
     * items 正常table cloumns数组
     * rowTdNumb 每行多少个td，包括title和prop
     */
    handleCloumnsToExpandTable(items, rowTdNumb) {
      var arr = []
      // 调整传入table-item格式，默认保持每行显示3个， 除非item有设置colspan
      let totalSpan = 0
      const max = rowTdNumb
      let trArr = []
      items.forEach((item, index) => {
        const colspan = item.colspan || 2
        if (totalSpan + colspan > max) {
          totalSpan = 0
          arr.push(JSON.parse(JSON.stringify(trArr)))
          trArr = []
        }
        totalSpan += colspan
        trArr.push(item)
        if (items.length - 1 === index) {
          arr.push(JSON.parse(JSON.stringify(trArr)))
        }
      })
      console.log(arr)
      return arr
    }
  }
}
