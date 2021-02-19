<template>
  <div class="box" style="height:auto">
    <!-- 企业信息 -->
    <EnterpriseInfo />
    <!-- 团队基本信息 -->
    <BasicInfoTeam />
    <!-- 团队构成及合作基础 -->
    <TeamComposition />
    <!-- 学术兼职及在国内外重要学术会议做大会报告或特邀报告情况 -->
    <Reporting />
    <!-- 入选国家级、湖南省、株洲市人才项目情况 -->
    <ProjectSituation />
    <!-- 团队及负责人自我评价 -->
    <SelfEvaluation />
    <!-- 现有基础及团队发展规划 -->
    <DevelopPlan />
    <!-- 支撑保障 -->
    <Support />
  </div>
</template>

<script>
import EnterpriseInfo from './components/enterpriseInfo'
import BasicInfoTeam from './components/basicInfoTeam'
import TeamComposition from './components/teamComposition'
import Reporting from './components/reporting'
import ProjectSituation from './components/projectSituation'
import SelfEvaluation from './components/selfEvaluation'
import DevelopPlan from './components/developPlan'
import Support from './components/support'
export default {
  name: '',
  components: { EnterpriseInfo, BasicInfoTeam, TeamComposition, Reporting, ProjectSituation, SelfEvaluation, DevelopPlan, Support },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {

  }
}
</script>

<style lang = "scss" scoped>
</style>
