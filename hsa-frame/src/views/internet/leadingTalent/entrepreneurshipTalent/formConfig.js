import validator from '@/utils/el-validator'
export const baseItems = [ // 个人基础信息
  { label: '姓名', prop: '姓名', type: 'input' },
  { label: '性别', prop: '性别', type: 'select', clearable: true },
  { label: '证件类型', prop: '证件类型', type: 'select', clearable: true },
  { label: '证件号码', prop: '证件号码', type: 'input' },
  { label: '出生日期', prop: '出生日期', type: 'date', pickerOptions: { shortcuts: [] }},
  { label: '籍贯', prop: '籍贯', type: 'input' },
  { label: '民族', prop: '民族', type: 'select', clearable: true },
  { label: '政治面貌', prop: '政治面貌', type: 'select', clearable: true }
]

export const baseRules = {
  姓名: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
  性别: [{ required: true, message: '请选择性别', trigger: 'change' }],
  证件类型: [{ required: true, message: '请选择证件类型', trigger: 'change' }],
  证件号码: [{ required: true, message: '请填写证件号码', trigger: 'blur' }],
  身份证号: [{ required: true, validator: validator, regexp: 'identityCard', trigger: 'blur' }],
  出生日期: [{ required: true, message: '请选择出生日期', trigger: 'change' }],
  籍贯: [{ required: true, message: '请填写籍贯', trigger: 'blur' }],
  民族: [{ required: true, message: '请选择民族', trigger: 'change' }],
  政治面貌: [{ required: true, message: '请选择政治面貌', trigger: 'change' }]
}

export const baseItemsBtm = [ // 基本信息下
  { label: '文化程度', prop: '文化程度', type: 'select', clearable: true },
  { label: '学位', prop: '学位', type: 'select', clearable: true },
  { label: '职称', prop: '职称', type: 'input' },
  { label: '从事专业领域', prop: '从事专业领域', type: 'input', span: 16 },
  { label: '职务', prop: '职务', type: 'input' },
  { label: '通讯地址', prop: '通讯地址', type: 'input', span: 16 },
  { label: '联系电话', prop: '联系电话', type: 'input' },
  { label: '单位联系人', prop: '单位联系人', type: 'input' },
  { label: '单位联系电话', prop: '单位联系电话', type: 'input' },
  { label: '电子邮箱', prop: '电子邮箱', type: 'input' },
  { label: '创业投资方式', prop: '创业投资方式', type: 'select', clearable: true },
  { label: '投资额(万元)', prop: '投资额', type: 'input' },
  { label: '持股比例', prop: '持股比例', type: 'input' }
]

export const baseRulesBtm = {
  文化程度: [{ required: true, message: '请选择文化程度', trigger: 'change' }],
  创业投资方式: [{ required: true, message: '请选择创业投资方式', trigger: 'change' }],
  学位: [{ required: true, message: '请选择学位', trigger: 'change' }],
  职称: [{ required: true, message: '请填写职称', trigger: 'blur' }],
  持股比例: [{ required: true, message: '请填写持股比例', trigger: 'blur' }],
  从事专业领域: [{ required: true, message: '请填写从事专业领域', trigger: 'blur' }],
  职务: [{ required: true, message: '请填写职务', trigger: 'blur' }],
  通讯地址: [{ required: true, message: '请填写通讯地址', trigger: 'blur' }],
  联系电话: [{ required: true, validator: validator, regexp: 'phoneAndTel', trigger: 'blur' }],
  身份证号: [{ required: true, validator: validator, regexp: 'identityCard', trigger: 'blur' }],
  单位联系人: [{ required: true, message: '请填写单位联系人', trigger: 'blur' }],
  单位联系电话: [{ required: true, validator: validator, regexp: 'phoneAndTel', trigger: 'blur' }],
  电子邮箱: [{ required: true, validator: validator, regexp: 'email', trigger: 'blur' }],
  投资额: [{ required: true, validator: validator, regexp: 'money', trigger: 'blur' }]
}

export const workItems = [ // 企业单位信息
  { label: '企业名称', prop: '企业名称', type: 'input', span: 16 },
  { label: '组织机构代码', prop: '组织机构代码', type: 'input' },
  { label: '法定代表人', prop: '法定代表人', type: 'input' },
  { label: '成立时间', prop: '成立时间', type: 'date', pickerOptions: { shortcuts: [] }},
  { label: '注册资金(万元)', prop: '注册资金(万元)', type: 'input' },
  { label: '户名', prop: '户名', type: 'input' },
  { label: '开户行', prop: '开户行', type: 'input' },
  { label: '账号', prop: '账号', type: 'input' },
  { label: '职工总数', prop: '职工总数', type: 'input' },
  { label: '研发人员总数', prop: '研发人员总数', type: 'input' },
  { label: '研发人员占比', prop: '研发人员占比', type: 'input' },
  { label: '授权专利', prop: '授权专利', type: 'input' },
  { label: '其中发明专利', prop: '其中发明专利', type: 'input' },
  { label: '发明专利占比', prop: '发明专利占比', type: 'input' }
]
export const columns = [ // 业绩成果
  { prop: '企业经营情况', label: '企业经营情况' },
  { prop: '2018年', label: '2018年', align: 'center' },
  { prop: '2019年', label: '2019年', align: 'center' },
  { prop: '2020年', label: '2020年', align: 'center' },
  { prop: '2021年(1月-6月)', label: '2021年(1月-6月)', align: 'center' }
]
