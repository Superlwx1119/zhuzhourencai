<!-- 表格详情 适用于详情查看 -->
<!--
colspan: 1-5, 自己看着调试吧
itemDatas:
[
  [
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '2', prop: '', colspan: 1, rowspan: 1 },
    { label: '3', prop: '', colspan: 1, rowspan: 1 }
  ],
  [
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '1', prop: '', colspan: 1, rowspan: 1 },
    { label: '1', prop: '', colspan: 1, rowspan: 1 }
  ]
]
-->
<template>
  <table ref="tableDataBox" class="table-data" style="table-layout: fixed">
    <tbody>
      <tr v-for="(row, index) in itemDatas" :key="index">
        <template v-for="item in row">
          <td
            v-if="item.type === 'title'"
            :key="item.label + index"
            class="tr-title"
            :colspan="item.colspan || 1"
            :rowspan="item.rowspan || 1"
          >
            {{ item.label }}
          </td>

          <template v-else>
            <td
              v-show="!item.labelHidden"
              :key="item.label + item.prop"
              :colspan="item.labelColspan || 1"
              :rowspan="item.rowspan || 1"
              :style="{ width: item.labelWidth || labelWidth+'px' }"
            >
              <template v-if="item.labelSlot">
                <slot :name="item.labelSlot" :item="item" />
              </template>
              <span v-else v-html="item.label" />
            </td>

            <td
              v-if="item.prop || item.slot"
              :key="(item.label + item.prop + index) || index"
              :colspan="item.colspan || 1"
              :rowspan="item.rowspan || 1"
              :style="{ width: item.propWidth || 'auto' }"
              :class="comparisionEvent(formDatas[item.prop], item.prop)"
            >
              <!-- customProp 特殊处理 -->
              <template v-if="item.customProp || item.type === 'amount'">
                <content-handle :item="item" :content="formDatas[item.prop]" />
              </template>

              <template v-else-if="item.slot">
                <slot :name="item.slot" :item="item" :form-datas="formDatas" />
              </template>

              <template v-else-if="item.defaultVal">
                {{ item.defaultVal }}
              </template>

              <!-- normal -->
              <template v-else>
                <template v-if="!item.prop"> -- </template>
                <template v-else>
                  {{ formDatas[item.prop] ? formDatas[item.prop] : formDatas[item.prop] === 0 ? '0' : '--' }}
                </template>
              </template>

            </td>
          </template>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ContentHandle from '@/components/ContentHandle'
export default {
  components: {
    ContentHandle
  },
  props: {
    itemDatas: {
      type: Array,
      default: () => []
    },
    formDatas: {
      type: Object,
      default: () => {}
    },
    labelWidth: {
      type: Number,
      default: 105
    },
    comparFormData: { // 这个对象默认null，如果传入则会和formDatas对比，如果对应的值不同则变红色
      type: Object,
      default: () => {
        return null
      }
    },
    comparFormKey: { // 这个对象默认null，如果传入则会和key对比，如果在这个里面有就会变红
      type: Object,
      default: () => {
        return null
      }
    }
  },
  watch: {
    comparFormData(newObj) {
      if (newObj) {
        this.$forceUpdate()
      }
    },
    comparFormKey(newObj) {
      if (newObj) {
        this.$forceUpdate()
      }
    }
  },
  methods: {
    comparisionEvent(val, key) {
      if (this.comparFormData) {
        if (this.comparFormData[key] === val) {
          return ''
        } else {
          return 'red-text'
        }
      } else if (this.comparFormKey) {
        const otherKey = key.split('Name')[0] // 有些可能取的Name值
        if (this.comparFormKey[key] || this.comparFormKey[otherKey]) {
          return 'red-text'
        } else {
          return ''
        }
      } else {
        return ''
      }
    },
    resetFields() {
      for (const key in this.formDatas) {
        if (typeof (this.formDatas[key]) === 'string') {
          this.$set(this.formDatas, key, '')
        } else if (this.formDatas[key].constructor === Array) {
          this.$set(this.formDatas, key, [])
        } else if (this.formDatas[key].constructor === Object) {
          this.$set(this.formDatas, key, {})
        } else {
          this.$set(this.formDatas, key, null)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-data {
  // table-layout: fixed;
  tr {
    width: 100%;
    .tr-title{
      padding-left: 10px;
      box-sizing: border-box;
      text-align: left;
      font-weight: 700
    }
  }
}

.table-data tr>td{
  line-height: 16px !important;
  word-break: break-all;
}

.red-text{
  color: red
}

</style>
