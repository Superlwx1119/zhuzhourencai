<!-- 抽屉 -->
<template>
  <el-drawer
    v-bind="$attrs"
    :visible="visible"
    v-on="$listeners"
    @opened="isShow = visible"
    @closed="isShow = visible"
  >
    <div v-show="isShow" class="drawer-wrapper">
      <div class="drawer-content">
        <slot />
      </div>
      <div class="drawer-footer">
        <slot name="footer" />
      </div>
    </div>

  </el-drawer>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-drawer__header{
    background-color: #3b71e8;
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 0;
}
/deep/.el-drawer__body{
  height: calc(100% - 48px);
}
.drawer-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.drawer-content{
  padding: 16px 16px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.drawer-footer{
    padding: 10px 10px 10px 0;
    font-size: 0;
    line-height: 1;
    -webkit-box-shadow: inset -1px -1px 5px rgba(0,0,0,0.1);
    box-shadow: inset -1px -1px 5px rgba(0,0,0,0.1);
    z-index: 10;
    text-align: right;
  }
</style>
