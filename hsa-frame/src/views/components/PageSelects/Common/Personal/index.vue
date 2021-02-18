<!-- 人员选择 -->
<template>
  <el-popover
    ref="people-select-popver"
    v-model="visible"
    v-clickoutside="clickOutSide"
    placement="bottom-start"
    width="200"
    trigger="manual"
    :disabled="disabled"
  >
    <div class="error-msg">
      <i class="el-icon-info" />
      查询暂无该人员信息
    </div>

    <div slot="reference" class="address-multiple-select-box">
      <el-input
        v-model="inputStr"
        placeholder="请输入证件号码，回车搜索"
        clearable
        :disabled="disabled || loading"
        style="width: 100%"
        @keyup.enter.native.stop="submitDataEvent"
        @input="visible = false"
        @blur="inputBlur"
        @clear="clearEvent"
      >
        <i v-show="loading" slot="suffix" class="el-icon-loading" />
        <template slot="prepend">
          <people-infor :all-data="allData" />
        </template>
        <template slot="append">
          <read-card
            :all-data="allData"
            @readCardStart="loading = true"
            @readCardEnd="loading = false"
            @finish="readCardSuccess"
          />
        </template>
      </el-input>
    </div>
  </el-popover>
</template>

<script>
import PeopleInfor from './peopleInfor'
import readCard from './readCard'
import emitter from 'element-ui/lib/mixins/emitter'
import { queryPsnBasicInfo } from '@/api/Common/Request'
import Clickoutside from 'element-ui/lib/utils/clickoutside'
export default {
  components: {
    PeopleInfor,
    readCard
  },
  directives: { Clickoutside },
  mixins: [emitter],
  model: {
    prop: 'value',
    event: 'changeCode'
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      visible: false,
      inputStr: '',
      oldStr: '',
      currentCodeStr: '',
      allData: {},
      tableDatas: []
    }
  },
  watch: {
    value: {
      handler(newVal) {
        if (!newVal) {
          this.reset()
          return
        }
        if (this.currentCodeStr !== newVal) {
          this.search()
        }
      },
      immediate: true
    }
  },
  methods: {
    validateEvent() {
      if (this.isValidate) {
        this.dispatch('ElFormItem', 'el.form.change', [this.value])
      }
    },
    search(isBlur) {
      const params = {
        queryContent: this.inputStr || this.value,
        pageSize: 10,
        pageNum: 1
      }
      this.loading = true
      queryPsnBasicInfo(params).then(res => {
        this.loading = false
        this.$emit('loadFinish')
        this.tableDatas = res.data.data
        if (this.tableDatas && this.tableDatas.length > 0) {
          // 数据直接填进去
          this.setPeopleInfo(this.tableDatas[0])
        } else {
          this.$emit('clear')
          this.searchErrorHandle(isBlur)
        }
      }).catch(() => {
        this.loading = false
        this.$emit('loadFinish')
        this.searchErrorHandle(isBlur)
      })
    },
    setPeopleInfo(data) {
      this.$emit('currentChange', data)
      this.allData = data
      this.inputStr = this.allData.psnName
      this.oldStr = this.allData.psnName
      this.currentCodeStr = this.allData.psnNo
      this.$emit('changeCode', this.allData.psnNo)
      this.$emit('change', this.allData)
      this.$nextTick(() => {
        this.validateEvent()
      })
    },
    searchErrorHandle(isBlur) {
      if (isBlur) {
        this.reset()
      } else {
        this.reset(true)
      }
      this.visible = true
      this.validateEvent()
    },
    clickOutSide(val) {
      this.visible = false
    },
    reset(noLoading) {
      this.inputStr = ''
      this.oldStr = ''
      this.currentCodeStr = ''
      this.allData = {}
      if (!noLoading) {
        this.loading = false
      }
      this.$emit('changeCode', '')
      this.$emit('change', {})
    },
    inputBlur(val) {
      if (this.inputStr === this.oldStr) return
      if (this.oldStr && !this.loading) {
        this.inputStr = this.oldStr
      } else {
        this.reset()
      }
    },
    submitDataEvent() {
      if (this.inputStr === this.oldStr) return
      if (!this.inputStr) {
        this.reset()
        return
      }
      this.search()
    },
    clearEvent() {
      this.$emit('clear')
      this.reset()
    },
    readCardSuccess(obj) {
      if (obj.type === '01') { // 社保卡
        this.inputStr = obj.data.item_2
      } else if (obj.type === '02') { // 身份证
        this.inputStr = obj.data.idcard_no
      } else if (obj.type === '03') { // 电子凭证
        if (!obj.data.idNo) {
          this.$message.warning('未读取到用户信息，请检查您医保电子凭证是否正确！')
          return
        }
        this.inputStr = obj.data.idNo
      } else {
        return
      }
      this.search()
    }
  }
}
</script>

<style lang="scss" scoped>
.input-append{
  line-height: 0px;
  font-size: 20px
}
/deep/.el-icon-postcard{
  line-height: 0;
}
.error-msg{
  color: red;
  color: $--color-danger !important;
}
/deep/.el-input__suffix{
  display: flex;
  align-items: center;
}
</style>
