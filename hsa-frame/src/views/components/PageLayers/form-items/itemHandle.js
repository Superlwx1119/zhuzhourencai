// 组件混入
import moment from 'moment'
moment.locale('zh-cn')
export default {
  methods: {
    getPickerOptions(item) {
      if (item.pickerOptions && item.pickerOptions.shortcuts) {
        if (item.pickerOptions.shortcuts.length <= 0) {
          return {
            ...item.pickerOptions,
            shortcuts: null
          }
        } else {
          return item.pickerOptions
        }
      } else {
        return this.handlePickerOptions(item)
      }
    },
    handlePickerOptions(item) {
      let dateFormat = 'YYYY-MM-DD'
      if (item.type === 'date') {
        dateFormat = 'YYYY-MM-DD'
      } else if (item.type === 'dateMoon') {
        dateFormat = 'YYYY-MM'
      } else if (item.type === 'dateYear') {
        dateFormat = 'YYYY'
      } else if (item.type === 'dateRange') {
        dateFormat = 'YYYY-MM-DD'
      } else if (item.type === 'dateTime') {
        dateFormat = 'yyyy-MM-dd HH:mm:ss'
      } else if (item.type === 'dateTimeRange') {
        dateFormat = 'YYYY-MM-DD hh:mm:ss'
      } else if (item.type === 'monthRange') {
        dateFormat = 'YYYY-MM'
      }
      let pickObjArr = []
      if (item.type === 'date' ||
        item.type === 'dateMoon' ||
        item.type === 'dateYear' ||
        item.type === 'dateTime'
      ) {
        pickObjArr = [{
          text: '今天',
          onClick(picker) {
            const date = moment().format(dateFormat)
            picker.$emit('pick', date)
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = moment().subtract('day', 1).format(dateFormat)
            picker.$emit('pick', date)
          }
        }, {
          text: '月初',
          onClick(picker) {
            const date = moment().startOf('month').format(dateFormat)
            picker.$emit('pick', date)
          }
        }, {
          text: '月末',
          onClick(picker) {
            const date = moment().endOf('month').format(dateFormat)
            picker.$emit('pick', date)
          }
        }]
      } else {
        pickObjArr = [{
          text: '近一周',
          onClick(picker) {
            const end = moment().endOf('week').format(dateFormat)
            const start = moment().startOf('week').format(dateFormat)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '近一月',
          onClick(picker) {
            const end = moment().endOf('month').format(dateFormat)
            const start = moment().startOf('month').format(dateFormat)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '近一年',
          onClick(picker) {
            const end = moment().endOf('year').format(dateFormat)
            const start = moment().startOf('year').format(dateFormat)
            picker.$emit('pick', [start, end])
          }
        }]
      }

      return {
        ...item.pickerOptions,
        shortcuts: pickObjArr
      }
    }
  }
}
