<!--
     时间框类型支持日期，日期时间，周，月，年选择----datetime日期时间选择
    注意修改datetype的值以及valueFromat的值
    该组件在formitem 组件中有引入
-->
<template>
  <el-row>
    <el-col :span="12" class="special-dateRange-left">
      <el-date-picker
        ref="specialDateLeft"
        v-model="dateStart"
        :type="datetype"
        style="width:100%; height: 100%;border-right:none; margin-right: 10px;"
        :picker-options="pickerOptionsstart"
        :value-format="valueFormat"
        placeholder="选择日期"
        :clearable="!dateEnd"
        :disabled="disabled || startDisabled"
        :validate-event="false"
        @change="changeSpecilDateStart"
        @keydown.enter.native="keyEnter('start')"
      />
    </el-col>
    <el-col :span="12" class="special-dateRange-right" data-content="至" style="font-size:12px;">
      <el-date-picker
        ref="specialDateRight"
        v-model="dateEnd"
        :type="datetype"
        prefix-icon="el-ta"
        :picker-options="pickerOptionsend"
        style="width:100%; height: 100%;border-left:none;"
        :value-format="valueFormat"
        placeholder="选择日期"
        :disabled="disabled || endDisabled"
        :validate-event="false"
        @change="changeSpecilDateEnd"
      />
    </el-col>
  </el-row>
</template>

<script>
import moment from 'moment'
import emitter from 'element-ui/lib/mixins/emitter'
export default {
  components: {

  },
  mixins: [emitter],
  model: {
    prop: 'dateDatas',
    event: 'change'
  },
  props: {
    // 表单配置文件
    datetype: {
      type: String,
      default: () => {
        return 'date'
      }
    },
    clearable: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    valueFormat: {
      type: String,
      default: () => {
        return 'yyyyMMdd'
      }
    },
    dateDatas: {
      type: [Array, String],
      default: () => {
        return []
      }
    },
    startDisabled: {
      type: Boolean,
      default: false
    },
    endDisabled: {
      type: Boolean,
      default: false
    },
    startDisabledDate: { // 一定要传入function，Boolean 只能是给false（相当于是不要用startDisabledDate）
      type: [Function, Boolean],
      default: () => false
    },
    endDisabledDate: { // 一定要传入function，Boolean 只能是给false（相当于是不要用startDisabledDate）
      type: [Function, Boolean],
      default: () => false
    },
    validateEventType: { //  all, start, end， none (校验模式，是校验开始时间还是结束时间还是要全部都选择才通过校验 none: 不做校验)
      type: String,
      default: 'all'
    },
    needShortcutKey: { // 是否需要快捷键, 默认只有今天
      type: Boolean,
      default: false
    },
    shortcutKeys: { // 快捷键
      type: Array,
      default: () => {
        return [{
          text: '今天',
          onClick(picker) {
            const date = moment().format('YYYY-MM-DD')
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  data() {
    return {
      dateStart: '',
      dateEnd: '',
      isFocus: false
    }
  },
  computed: {
    pickerOptionsstart() {
      return {
        disabledDate: (time) => {
          if (this.startDisabledDate) {
            return this.startDisabledDate(time)
          }
          return false
        },
        shortcuts: this.needShortcutKey ? this.shortcutKeys : undefined
      }
    },
    pickerOptionsend() {
      return {
        disabledDate: (time) => {
          let isDisabled = false
          if (this.endDisabledDate) {
            isDisabled = this.endDisabledDate(time)
          }
          if (isDisabled) return true
          if (this.dateStart !== '' && this.dateStart !== null) {
            return moment(time).isBefore(this.dateStart)
          }
          return false
        },
        shortcuts: this.needShortcutKey ? this.shortcutKeys : undefined
      }
    }
  },
  watch: {
    dateDatas: {
      handler(newData, oldData) {
        this.getDateTime(newData)
        this.validateEvent()
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {

  },
  methods: {
    // 获取数据
    getDateTime(date) {
      if (Array.isArray(date) && date.length > 1) {
        this.dateStart = date[0]
        this.dateEnd = date[1]
      } else {
        this.dateStart = ''
        this.dateEnd = ''
      }
    },
    // 开始时间change事件
    changeSpecilDateStart() {
      let valueFormatType = 'YYYY-MM-DD'
      if (this.datetype === 'date') {
        valueFormatType = 'YYYY-MM-DD'
      } else {
        valueFormatType = 'YYYY-MM-DD HH:mm:ss'
      }
      if (this.dateEnd && moment(this.dateStart).isAfter(this.dateEnd)) {
        this.dateEnd = moment(moment(this.dateStart).add(1, 'day')._d).format(valueFormatType)
        this.$refs['specialDateRight'].$refs['reference'].$refs['input'].focus()
      }
      if (!this.dateEnd) {
        this.$refs['specialDateRight'].$refs['reference'].$refs['input'].focus()
        this.dateEnd = moment(moment(this.dateStart).add(1, 'day')._d).format(valueFormatType)
      }
      this.$emit('change', [this.dateStart, this.dateEnd])
    },
    // 时间change事件
    changeSpecilDateEnd(value) {
      let valueFormatType = 'YYYY-MM-DD'
      if (this.datetype === 'date') {
        valueFormatType = 'YYYY-MM-DD'
      } else {
        valueFormatType = 'YYYY-MM-DD HH:mm:ss'
      }
      if (value) {
        if (!this.dateStart) {
          this.dateStart = moment(moment(this.dateEnd).subtract(1, 'day')._d).format(valueFormatType)
          this.$refs['specialDateLeft'].$refs['reference'].$refs['input'].focus()
        }
        this.$emit('change', [this.dateStart, this.dateEnd])
      } else {
        this.$emit('change', [])
      }
    },
    validateEvent() {
      this.dispatch('ElFormItem', 'el.form.change', this.dateDatas)
    },
    keyEnter(type) {
      if (type === 'start' && !this.dateStart) {
        this.dateStart = moment().format('YYYY-MM-DD')
        this.$refs.specialDateLeft.pickerVisible = false
        this.changeSpecilDateStart()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.el-row .special-dateRange-left{
  height: 32px;
    /deep/.el-input__inner{
      border-right: 0;
      border-radius: 4px 0px 0px 4px;
      padding-right:20px!important;
       &:focus{
        border-color: #c7c7c7!important;
        border-right-color: transparent!important;
      }
    }
    /deep/.el-input__suffix{
      right: 20px;
    }
}
.el-row .special-dateRange-right{
  height: 32px;
   position: relative;
    &:after{
        display: inline-block;
        content: "\81F3";
        left: -20px;
        top: 0;
        color: #000;
        height: 20px;
        width: 20px;
        font-size: 12px;
        // background-color: red;
        position: absolute;
      }
     /deep/.el-input .el-input__inner{
      border-left-color: transparent;
      border-radius: 0px 4px 4px 0;
       padding-left:20px!important;

      &:focus{
        border-color: #c7c7c7!important;
        border-left-color: transparent!important;
      }
    }
}
</style>
