<!-- 读卡获取人员信息 -->
<template>
  <el-dropdown trigger="click" :disabled="disabled">
    <span class="el-dropdown-link">
      <el-button slot="reference" :loading="loading" :disabled="disabled" class="input-append" title="点击读卡" icon="el-icon-postcard" />
      <iframe v-show="false" :src="src" />
    </span>

    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item,index) in cardType" :key="index" @click.native="readCards(item.value)">{{ item.label }}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

</template>

<script>
// import { readCard } from '@/utils/readCard'
import { getSysParamValueBcl } from '@/api/Common/Request'
export default {
  components: {
  },
  props: {
    allData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      src: '',
      loading: false,
      disabled: false,
      selCardType: '',
      cardType: [
        {
          label: '社保卡',
          value: '01'
        },
        {
          label: '身份证',
          value: '02'
        },
        {
          label: '电子凭证二维码',
          value: '03'
        }
      ]
    }
  },
  methods: {
    //   读卡
    readCards(type) {
      this.src = ''
      // this.disabled = true
      // this.selCardType = type
      // this.$emit('readCardStart')
      // readCard(type, this.consoleL)
    },
    // 读卡回调
    consoleL(res) {
      this.disabled = false
      this.$emit('readCardEnd')
      if (res) {
        if (res.type === 'noExe') {
          this.openOrDownloadExe()
        } else {
          if (!res.data) return
          this.$emit('finish', {
            data: res.data,
            type: this.selCardType
          })
        }
      }
    },
    // 下载应用
    openOrDownloadExe() {
      this.$confirm('未检测到本地服务，请检查是否启动本地服务！', '提示', {
        confirmButtonText: '已下载，点击启动',
        cancelButtonText: '未下载，点击下载',
        cancelButtonClass: 'el-button--primary',
        type: 'warning',
        distinguishCancelAndClose: true,
        showClose: true
      }).then((res) => {
        this.src = 'powersi://agent'
      }).catch((res) => {
        if (res === 'cancel') {
          getSysParamValueBcl({ paraCode: 'CARD_DOWN_NATIVE_URL' }).then(res => {
            if (res.data) {
              this.src = res.data
            } else {
              this.src = 'http://10.196.159.86:20000/readcard/native/NativeAgentSetup.exe'
            }
          }).catch(() => {})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.infor{
  cursor: pointer;
  font-size: 17px;
}
.el-dropdown-link{
  /deep/.el-button{
    padding: 10px;
  }
  /deep/.el-icon-postcard{
    font-size: 20px;
  }
}

</style>
