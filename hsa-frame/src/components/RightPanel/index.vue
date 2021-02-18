<template>
  <div ref="rightPanel" :class="{show:show}" class="rightPanel-container">
    <div class="rightPanel-background" @click="backgroundClick" />
    <div class="rightPanel">
      <div :class="buttomClass" :style="buttonStyle" @click="showClick">
        <!-- <i :class="show?'el-icon-close':'el-icon-s-order'" /> -->
        <svg-icon class="svgicon" :icon-class="show? 'cloose' : 'backlog'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { addClass, removeClass } from '@/utils'

export default {
  name: 'RightPanel',
  model: {
    prop: 'isOpen',
    event: 'change'
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: { // 设置了这个属性则buttonlocation不起效果
      default: 0,
      type: Number
    },
    buttonlocation: { // top, center, bottom
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme() {
      return this.$store.state.settings.theme
    },
    buttomClass() {
      if (this.buttonTop) {
        return 'handle-button'
      } else {
        return 'handle-button handle-button_' + this.buttonlocation
      }
    },
    buttonStyle() {
      if (this.buttonTop) {
        return {
          'top': this.buttonTop + 'px',
          'background-color': this.theme
        }
      } else {
        return {
          'background-color': this.theme
        }
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.show = true
      } else {
        this.show = false
      }
    },
    show(value) {
      if (value) {
        addClass(document.body, 'showRightPanel')
      } else {
        removeClass(document.body, 'showRightPanel')
      }
    }
  },
  mounted() {
    this.show = this.isOpen
    this.insertToBody()
  },
  beforeDestroy() {
    const elx = this.$refs.rightPanel
    elx.remove()
  },
  methods: {
    showClick() {
      this.show = !this.show
      this.$emit('change', this.show)
      if (this.show) {
        this.$emit('pageOpened')
      }
    },
    backgroundClick() {
      if (!this.clickNotClose) {
        this.show = false
        this.$emit('change', this.show)
      }
    },
    // addEventClick() {
    //   window.addEventListener('click', this.closeSidebar)
    // },
    closeSidebar(evt) {
      const parent = evt.target.closest('.rightPanel')
      if (!parent) {
        this.show = false
        window.removeEventListener('click', this.closeSidebar)
      }
    },
    insertToBody() {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
    }
  }
}
</script>

<style>
.showRightPanel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  // position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

@media only screen and (min-width: 760px) {
  .rightPanel {
    width: 766px;
  }
}

@media only screen and (min-width: 1050px) {
  .rightPanel {
    width: 1000px;
  }
}

@media only screen and (min-width: 1250px) {
  .rightPanel {
    width: 1200px;
  }
}
.rightPanel {
  // width: 1000px;
  height: 100vh;
  position: fixed;
  // position: absolute;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 12;
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .rightPanel-background {
    z-index: 11;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
   .rightPanel-items{
    height: 100%;
  }

}

.handle-button {
  width: 40px;
  height: 40px;
  position: absolute;
  left: -40px;
  text-align: center;
  font-size: 24px;
  border-radius: 50% 0 0 50% !important;
  // border-radius:50% !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 40px;
  background-color: #1b65b9 !important;
  display: flex;
  justify-content: center;
  align-items: center;
.svgicon{
  font-size: 28px;
}

}
.handle-button_top {
  top: 0;
}
.handle-button_bottom {
  bottom: 0;
}
.handle-button_center {
  top: 50%;
  transform: translate(0, -24px);
}
</style>
