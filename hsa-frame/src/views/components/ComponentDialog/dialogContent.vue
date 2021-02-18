<!-- 弹框 内容，包含 -->
<template>
  <div class="content-wrapper">
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    flex: 1;
    // height: calc(100% - 308px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 16px 16px 0;
    box-sizing: border-box;
  }
  .footer{
    padding: 16px 16px 16px 0;
    font-size: 0;
    line-height: 1;
    -webkit-box-shadow: inset -1px -1px 5px rgba(0,0,0,0.1);
    box-shadow: inset -1px -1px 5px rgba(0,0,0,0.1);
    z-index: 10;

    text-align: right;
  }
}
</style>
