<template>
  <div class="box houseSubsidiesApply">
    <box-title title-name="基本信息" />
    <Basic ref="basic" />
    <box-title title-name="购房及资金信息" />
    <House ref="house" />
    <box-title title-name="业务附件" />
    <Attachment ref="attachment" />
    <div class="footer">
      <my-button type="submit" :loading="save_loading" @click="save" />
      <my-button type="save" :loading="save_loading" @click="save" />
      <my-button type="close" />
    </div>
  </div>
</template>

<script>
import BoxTitle from '@/views/components/PageLayers/box-title'
import Basic from './components/basic'
import House from './components/house'
import Attachment from './components/attachment'
export default {
  components: {
    BoxTitle,
    Basic,
    House,
    Attachment
  },
  data() {
    return {
      save_loading: false

    }
  },
  mounted() {
    this.resetFields()
  },
  methods: {
    save() {
      if (!this.$refs.basic.validate()) return false
      if (!this.$refs.house.validate()) return false
    },
    resetFields() {
      this.$refs.basic.resetFields()
      this.$refs.house.resetFields()
    }

  }
}
</script>

<style lang='scss' scoped>
.houseSubsidiesApply {
  padding-top: 6px;
  height:auto;
  padding-bottom: 20px;
}
.footer {
  width: 100%;
  text-align: right;
  padding: 10px;
}

</style>
