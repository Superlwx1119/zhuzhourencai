<template>
  <div class="bottom-operate-wrapper">
    <slot name="tools" />
  </div>
</template>
<script>
export default {
  name: 'BottomFixed'
}
</script>
<style lang="scss" scoped>
  .bottom-operate-wrapper {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: -70px;
    padding: 10px 100px;
    text-align: right;
    font-size: 0;
    z-index: 1000;
    box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.12), 0 0 3px 0 rgba(0,0,0,0.04);
  }
</style>
