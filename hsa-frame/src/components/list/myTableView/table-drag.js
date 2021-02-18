// 表格拖拽
import Sortable from 'sortablejs'
import { deepClone } from '@/utils'
export default {
  data() {
    return {
      // dragCol: deepClone(this.columns)
    }
  },
  methods: {
    isDragEvent() {
      if (this.rowDrag) this.drag_rowDrop()
      if (this.columnsDrag) this.drag_columnDrop()
    },
    // 行拖拽 使用改功能table一定要绑定row-key
    drag_rowDrop() {
      const tbody = this.$refs['pf-table'].$el.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd: ({ newIndex, oldIndex }) => {
          const currRow = _this.data.splice(oldIndex, 1)[0]
          _this.data.splice(newIndex, 0, currRow)
        }
      })
    },
    // 列拖拽
    drag_columnDrop() {
      const wrapperTr = this.$refs['pf-table'].$el.querySelector('.el-table__header-wrapper tr')
      Sortable.create(wrapperTr, {
        animation: 180,
        delay: 0,
        onEnd: (evt) => {
          const arr = deepClone(this.columnsNew)
          const oldItem = arr[evt.oldIndex]
          const newItem = arr[evt.newIndex]
          this.$set(this.columnsNew, evt.newIndex, oldItem)
          this.$set(this.columnsNew, evt.oldIndex, newItem)
          console.log(this.columnsNew)
          // const arr = deepClone(this.columnsNew)
          // arr.splice(evt.oldIndex, 1)
          // arr.splice(evt.newIndex, 0, oldItem)
          // this.columnsNew = [
          //   newItem,
          //   oldItem
          // ]
          this.$nextTick(() => {
            this.$refs['pf-table'].doLayout()
          })
        }
      })
    }
  }
}
