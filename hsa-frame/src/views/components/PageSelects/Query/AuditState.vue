<!-- 审核状态 单选-->
<template>
  <el-select
    v-model="selId"
    :disabled="disabled"
    placeholder="请选择"
    style="width: 100%;"
    @change="valueChange"
  >
    <el-option
      v-for="item in sel_options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rcId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selId: '0',
      sel_options: [
        { label: '未提交', value: '0' },
        { label: '审核通过', value: '1' },
        { label: '审核终止', value: '2' },
        { label: '待初审', value: '11' },
        { label: '待复审', value: '21' },
        { label: '待三审', value: '31' },
        { label: '待四审', value: '41' },
        { label: '待终审', value: '99' }
      ]
    }
  },
  watch: {
    value(newVal) {
      if (newVal) {
        this.selId = newVal
      } else {
        this.selId = ''
      }
    }
  },
  created() {
    console.log('hello')
    this.$emit('change', this.selId)
  },
  methods: {
    valueChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>
