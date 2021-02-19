<template>
  <div>
    <div class="box">
      <div class="box-header handle">
        <span class="box-title">基本信息</span>
      </div>
      <div class="box-body no-padding-top tableItem">
        <FormItems :items-datas="itemDatas" :form-datas="itemForm" :is-grid="false" />
      </div>
      <div class="box-header handle">
        <span class="box-title">申请人家庭成员情况</span>
      </div>
      <div class="box-body no-padding-top">
        <my-table-view v-loading="loading" :columns="columns" :data="tableData" :is-configheader="false">
          <template slot="cc1" slot-scope="scope">
            <el-select v-model="scope.row.cc1" placeholder="请选择">
              <el-option
                v-for="item in options_1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template slot="cc2" slot-scope="scope">
            <el-input v-model="scope.row.cc2" />
          </template>
          <template slot="cc3" slot-scope="scope">
            <el-select v-model="scope.row.cc3" placeholder="请选择">
              <el-option
                v-for="item in options_2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template slot="cc4" slot-scope="scope">
            <el-select v-model="scope.row.cc4" placeholder="请选择">
              <el-option
                v-for="item in options_3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template slot="cc5" slot-scope="scope">
            <el-date-picker
              v-model="scope.row.cc5"
              type="date"
              placeholder="选择日期"
            />
          </template>
          <template slot="cc6" slot-scope="scope">
            <el-select v-model="scope.row.cc6" placeholder="请选择">
              <el-option
                v-for="item in options_4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
          <template slot="cc7" slot-scope="scope">
            <el-input v-model="scope.row.cc7" />
          </template>
          <template slot="cc8" slot-scope="scope">
            <el-input v-model="scope.row.cc8" />
          </template>
          <template slot="cc9" slot-scope="scope">
            <el-select v-model="scope.row.cc9" placeholder="请选择">
              <el-option
                v-for="item in options_5"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </template>
        </my-table-view>
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
export default {
  data() {
    return {
      loading: false,
      itemDatas: [
        { label: '姓名', prop: 'bb1', type: 'input' },
        { label: '证件类型', prop: 'bb2', type: 'select', options: [{ label: '身份证', value: 1 }], placeholder: '请选择' },
        { label: '证件号码', prop: 'bb3', type: 'input' },
        { label: '性别', prop: 'bb4', type: 'select', options: [{ label: '男', value: 1 }, { label: '女', value: 2 }], placeholder: '请选择' },
        { label: '最高学历', prop: 'bb5', type: 'select', options: [{ label: '本科', value: 1 }, { label: '小学', value: 2 }], placeholder: '请选择' },
        { label: '最高学位', prop: 'bb6', type: 'select', options: [{ label: '学士', value: 1 }, { label: '博士', value: 2 }], placeholder: '请选择' },
        { label: '毕业学校', prop: 'bb7', type: 'input' },
        { label: '是否双一流高校', prop: 'bb8', type: 'select', options: [{ label: '是', value: 1 }, { label: '否', value: 2 }], placeholder: '请选择' },
        { label: '学历类别', prop: 'bb9', type: 'select', options: [{ label: '全日制', value: 1 }, { label: '在职', value: 2 }], placeholder: '请选择' },
        { label: '所学专业', prop: 'bb10', type: 'input' },
        { label: '工作单位', prop: 'bb11', type: 'input' },
        { label: '现任职务', prop: 'bb12', type: 'input' },
        { label: '引进时间', prop: 'bb13', type: 'date' },
        { label: '职称（技术等级）', prop: 'bb14', type: 'input' },
        { label: '申请租期', prop: 'bb15', type: 'select', options: [{ label: '1年', value: 1 }, { label: '2年', value: 2 }], placeholder: '请选择' },
        { label: '申请对象类型', prop: 'bb16', type: 'select', options: [{ label: '中级以上职称专业技术人才', value: 1 }, { label: '2年', value: 2 }], placeholder: '请选择' },
        { label: '婚姻状况', prop: 'bb17', type: 'select', options: [{ label: '已婚', value: 1 }, { label: '未婚', value: 2 }], placeholder: '请选择' },
        { label: '户籍所在地', prop: 'bb18', type: 'input' },
        { label: '现住址', prop: 'bb19', type: 'textarea', span: 24 }

      ],
      itemForm: {
        bb1: '',
        bb2: '',
        bb3: '',
        bb4: '',
        bb5: '',
        bb6: '',
        bb7: '',
        bb8: '',
        bb9: '',
        bb10: '',
        bb11: '',
        bb12: '',
        bb13: '',
        bb14: '',
        bb15: '',
        bb16: '',
        bb17: '',
        bb18: '',
        bb19: ''
      },
      tableData: [{}, {}, {}, {}, {}],
      columns: [
        { label: '与申请人关系', prop: 'cc1', type: 'custom', slotName: 'cc1', width: '120px' },
        { label: '姓名', prop: 'cc2', type: 'custom', slotName: 'cc2', width: '100px' },
        { label: '性别', prop: 'cc3', type: 'custom', slotName: 'cc3', width: '120px' },
        { label: '婚姻状况', prop: 'cc4', type: 'custom', slotName: 'cc4', width: '120px' },
        { label: '出生年月', prop: 'cc5', type: 'custom', slotName: 'cc5', width: '160px' },
        { label: '学历', prop: 'cc6', type: 'custom', slotName: 'cc6', width: '120px' },
        { label: '工作学习单位', prop: 'cc7', type: 'custom', slotName: 'cc7', width: '300px' },
        { label: '户籍所在地', prop: 'cc8', type: 'custom', slotName: 'cc8', width: '250px' },
        { label: '是否申请共同居住', prop: 'cc9', type: 'custom', slotName: 'cc9', width: '140px' }
      ],
      options_1: [{ label: '母亲', value: '1' }],
      options_2: [{ label: '男', value: '1' }],
      options_3: [{ label: '已婚', value: '1' }],
      options_4: [{ label: '本科', value: '1' }],
      options_5: [{ label: '是', value: '1' }]
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
/deep/ .el-date-editor {
  width: 100%;
}
</style>
