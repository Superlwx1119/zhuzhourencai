<template>
  <div class="dashboard-container">
    首页
    <div style="width: 400px; height: 400px;">
      <img
        width="100%"
        height="100%"
        :src="imgUrl"
        alt=""
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: { },
  data() {
    return {
      imgUrl: require('@/views/dashboard/dufu.gif'),
      currentRole: 'adminDashboard'
    }
  },
  computed: {

  },
  created() {

  }
}
</script>

<style scoped>
.dashboard-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
