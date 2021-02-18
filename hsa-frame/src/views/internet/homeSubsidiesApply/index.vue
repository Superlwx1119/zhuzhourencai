<template>
  <div class="box HomeSubsidiesApply">
    <box-title title-name="基本信息" />
    <Basic ref="basic" />
    <box-title title-name="业务其他信息" />
    <Business ref="business" />
    <box-title title-name="高层次人才分类认定信息" />
    <Cognizance ref="cognizance" />
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
import Business from './components/business'
import Cognizance from './components/cognizance'
import Attachment from './components/attachment'

export default {
  components: {
    BoxTitle,
    Basic,
    Business,
    Cognizance,
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
      if (!this.$refs.business.validate()) return false
      if (!this.$refs.cognizance.validate()) return false
    },
    resetFields() {
      this.$refs.basic.resetFields()
      this.$refs.business.resetFields()
      this.$refs.cognizance.resetFields()
    }

  }
}
</script>

<style lang='scss' scoped>
.HomeSubsidiesApply {
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
