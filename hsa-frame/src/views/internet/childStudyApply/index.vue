<template>
  <div>
    <div class="box">
      <div class="box-header handle">
        <span class="box-title">家长基本信息（无需填写）</span>
      </div>
      <div class="box-body no-padding-top tableItem">
        <table-item
          :item-datas="applicantData"
          :form-datas="applicantForm"
        />
      </div>
      <div class="box-header handle">
        <span class="box-title">家长其他信息</span>
      </div>
      <div class="box-body no-padding-top">
        <FormItems :items-datas="itemDatas" :form-datas="itemForm" :is-grid="false" />
      </div>
      <div class="box-header handle">
        <span class="box-title">子女信息</span>
      </div>
      <div class="box-body no-padding-top">
        <FormItems :items-datas="otherDatas" :form-datas="otherForm" :is-grid="false" />
      </div>
      <div class="box-header handle">
        <span class="box-title">业务附件</span>
      </div>
      <div class="box-body no-padding-top">
        <div>上传列表</div>
        <div class="groupBtns">
          <MyButton type="submit" />
          <MyButton type="save" />
          <MyButton type="close" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tableItem from '@/views/components/PageLayers/table-items'
export default {
  components: {
    tableItem
  },
  data() {
    return {
      applicantData: [
        [
          { label: ' 家长姓名', prop: 'aa1' },
          { label: '性别', prop: 'aa2' },
          { label: '分类层次', prop: 'aa3' }
        ],
        [
          { label: '学历', prop: 'aa4' },
          { label: '学位', prop: 'aa5' },
          { label: '毕业院校', prop: 'aa6' }
        ],
        [
          { label: '工作单位', prop: 'aa7', colspan: 3 },
          { label: '毕业专业', prop: 'aa8' }
        ],
        [
          { label: '职务', prop: 'aa9' },
          { label: '联系电话', prop: 'aa10' },
          { label: '电子邮箱', prop: 'aa11' }
        ]
      ],
      applicantForm: {
        aa1: '',
        aa2: '',
        aa3: '',
        aa4: '',
        aa5: '',
        aa6: '',
        aa7: '',
        aa8: '',
        aa9: '',
        aa10: '',
        aa11: ''
      },
      itemDatas: [
        { label: '工作单位通讯地址', prop: 'bb1', type: 'input', span: 24 },
        { label: '现居住地通讯地址', prop: 'bb2', type: 'input', span: 24 },
        { label: '主要荣誉称号', prop: 'bb3', type: 'input', span: 24 },
        { label: '专长', prop: 'bb4', type: 'input', span: 24 },
        { label: '主要技术创新成果获奖情况', prop: 'bb5', type: 'textarea', placeholder: '（何年何月获何等级何种奖项）', rows: 4, autosize: false, span: 24 }
      ],
      itemForm: {
        bb1: '',
        bb2: '',
        bb3: '',
        bb4: '',
        bb5: ''
      },
      otherDatas: [
        { label: '子女姓名', prop: 'cc1', type: 'input' },
        { label: '性别', prop: 'cc2', type: 'select', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }], placeholder: '请选择' },
        { label: '出生日期', prop: 'cc3', type: 'date' },
        { label: '学籍号', prop: 'cc4', type: 'input' },
        { label: '原就读学校', prop: 'cc5', type: 'input', placeholder: '转学需填' },
        { label: '拟就读年级', prop: 'cc6', type: 'select', options: [{ label: '高一', value: 1 }], placeholder: '请选择' },
        { label: '拟就读学校1', prop: 'cc7', type: 'input' },
        { label: '拟就读学校2', prop: 'cc8', type: 'input' },
        { label: '拟就读学校3', prop: 'cc9', type: 'input' }
      ],
      otherForm: {
        cc1: '',
        cc2: '',
        cc3: '',
        cc4: '',
        cc5: '',
        cc6: '',
        cc7: '',
        cc8: '',
        cc9: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.groupBtns {
  margin: 50px 16px 0 16px;
  padding-bottom: 30px;
  text-align: right;
}
</style>
