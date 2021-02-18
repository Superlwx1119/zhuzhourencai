<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {
      isIE11: false, // IE11
      isEdge: false,
      isIframe: false
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  created() {
    this.isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1
    this.isEdge = navigator.userAgent.indexOf('Edge') > -1
  },
  mounted() {
    if (this.isIE11) this.bodyWatch() // 弹出框在ie下无法拖动
    if (this.isEdge) {
      console.log(window.document.documentElement.scrollTop)
    }
    this.$nextTick(() => {
      if (top.location !== location) {
        this.isIframe = true
      } else {
        document.getElementsByClassName('app-main')[0].classList.add('height')
      }
    })
  },
  methods: {
    bodyWatch() {
      // 选择一个需要观察的节点
      const targetNode = window.document.body
      // 设置observer的配置选项
      const config = { attributes: true, attributeFilter: ['class'] }
      // 当节点发生变化时的需要执行的函数
      const callback = (mutationsList, observer) => {
        this.IEDialog()
      }
      // 创建一个observer示例与回调函数相关联
      const observer = new MutationObserver(callback)
      // 使用配置文件对目标节点进行观测
      observer.observe(targetNode, config)
    },
    IEDialog() {
      Array.from(document.querySelectorAll('.el-dialog')).forEach(item => {
        item.style.left = 0 + 'px'
        item.style.top = 0 + 'px'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  width: 100%;
  position: relative;
  overflow: auto;
}

.fixed-header + .app-main {
  padding-top: 50px;
}
.height {
  height: calc(100% - 98px);
}
.hasTagsView {
  .app-main {
    min-height: calc(100vh - 98px);
  }

  .fixed-header + .app-main {
    padding-top: 98px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
