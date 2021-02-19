<template>
  <div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">基本信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :model="searchForm"
          :items-datas="itemDatas"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">详细信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :model="searchForm"
          :items-datas="itemDatas1"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">工作单位信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :model="searchForm"
          :items-datas="itemDatas2"
          :form-datas="searchForm"
          label-width="130px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">个人简历信息</span>
      </div>
      <div class="box-body ts">
        <form-items
          ref="ruleFrom"
          :model="searchForm"
          :items-datas="itemDatas3"
          :form-datas="searchForm"
          label-width="0px"
        />
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <span class="box-title">申报人近 5 年代表性业绩成果</span>
      </div>
      <div class="box-body ts">
        <ul class="textLine">
          <li>
            <span>1、业绩成果形式不限，包括科研项目/课题、论文或专著、科技奖励、专利及成果转化、新产品（含新品种）/新装置（装备）/新工艺/新材料开发、行业标准制定、科技咨询与服务实绩等;</span>
          </li>
          <li>
            <span>2、业绩成果基本信息按格式要求填写；</span>
          </li>
          <li>
            <span>3、业绩成果的创新价值或经济、社会效益描述要求内容详实具体、数据精准；</span>
          </li>
          <li>
            <span>4、所有的业绩成果等均须有相应附件做支撑，附件缺项漏项的成果不予认可;</span>
          </li>
        </ul>
        <div class="footer">
          <my-button title="增加业绩成果信息" style="margin-left: 10px;" type="primary" @click="iniSearch" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemDatas from '../../mixin/itemDatas'
export default {
  mixins: [itemDatas],
  data() {
    return {
      searchForm: {}
    }
  },
  methods: {
    iniSearch() {},
    reset() {}
  }

}
</script>

<style lang="scss" scoped>
  .footer{
      text-align: right;
  }
  .textLine{
      width: 80%;
      background-color: #ccc;
      padding: 10px;
        li{
     list-style: none;
      padding: 10px;
  }
  }
</style>

