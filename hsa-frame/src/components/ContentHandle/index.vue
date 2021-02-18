<!-- 内容处理 比如说表格里的时间，金额等 -->
<template>
  <!-- 时间 -->
  <span v-if="item.customProp == 'date'">
    {{ content | momentDate('YYYY-MM-DD') }}
  </span>
  <span v-else-if="item.customProp == 'mom-date'">
    {{ content | momentDate(item.format) }}
  </span>
  <!-- 颜色字体内容（仅仅用于金额） -->
  <span v-else-if="item.customProp == 'color-text'" :style="{color: item.textColor || '#000'}">
    {{ (content === null || content === '') ? '0.00' : parseFloat(content).toFixed(item.precision || 2).replace(/(\d)(?=(\d{3})+\.)/g,"$1,") }}
  </span>
  <!-- 其他颜色字体 -->
  <span v-else-if="item.customProp == 'color'" :style="{color: item.textColor || '#000'}">
    {{ content }}
  </span>
  <!-- 小数精度 -->
  <span v-else-if="item.customProp == 'precision'">
    {{ parseFloat((content === null || content === '') ? 0 : content).toFixed(item.precision) }}
  </span>
  <!-- table-item 金额展示 -->
  <AmountView v-else-if="item.type === 'amount' || item.customProp === 'amount'" :value="content" />
  <!-- 其他 -->
  <span v-else>{{ content === 0 ? '0' : content || '--' }}</span>
</template>

<script>
import moment from 'moment'
moment.locale('zh-cn')
export default {
  components: {
    AmountView: () => import('@/components/DataComponents/AmountView')
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
