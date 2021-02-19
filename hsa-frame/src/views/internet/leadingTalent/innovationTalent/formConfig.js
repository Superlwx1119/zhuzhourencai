import validator from '@/utils/el-validator'
export const baseItems = [ // 基础信息
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

export const detailItems = [ // 详情信息
  { label: '文化程度', prop: '文化程度', type: 'select', clearable: true },
  { label: '学位', prop: '学位', type: 'select', clearable: true },
  { label: '授予时间', prop: '授予时间', type: 'date', pickerOptions: { shortcuts: [] }},
  { label: '职称', prop: '职称', type: 'input' },
  { label: '职位', prop: '职位', type: 'input' },
  { label: '从事专业', prop: '从事专业', type: 'input' },
  { label: '通讯地址', prop: '通讯地址', type: 'input', span: 16 },
  { label: '邮编', prop: '邮编', type: 'input' },
  { label: '联系电话', prop: '联系电话', type: 'input' },
  { label: '电子邮箱', prop: '电子邮箱', type: 'input' }
]

export const detailRules = {
  姓名: [{ required: true, message: '请填写姓名', trigger: 'blur' }],
  文化程度: [{ required: true, message: '请选择文化程度', trigger: 'change' }],
  学位: [{ required: true, message: '请选择学位', trigger: 'change' }],
  授予时间: [{ required: true, message: '请选择授予时间', trigger: 'change' }],
  职称: [{ required: true, message: '请填写职称', trigger: 'blur' }],
  职位: [{ required: true, message: '请填写职位', trigger: 'blur' }],
  从事专业: [{ required: true, message: '请填写从事专业', trigger: 'blur' }],
  通讯地址: [{ required: true, message: '请填写通讯地址', trigger: 'blur' }],
  邮编: [{ required: true, validator: validator, regexp: 'postcode', trigger: 'blur' }],
  联系电话: [{ required: true, validator: validator, regexp: 'phone', trigger: 'blur' }],
  电子邮箱: [{ required: true, validator: validator, regexp: 'email', trigger: 'blur' }]
}

export const workItems = [ // 工作单位信息
  { label: '单位名称', prop: '单位名称', type: 'input' },
  { label: '单位地址', prop: '单位地址', type: 'input', span: 16 },
  { label: '户名', prop: '户名', type: 'input' },
  { label: '开户行', prop: '开户行', type: 'input' },
  { label: '账号', prop: '账号', type: 'input', maxLenght: 20 },
  { label: '单位联系人', prop: '单位联系人', type: 'input' },
  { label: '联系电话', prop: '联系电话', type: 'input' }
]

export const workRules = {
  单位名称: [{ required: true, message: '请填写单位名称', trigger: 'blur' }],
  单位地址: [{ required: true, message: '请填写单位地址', trigger: 'blur' }],
  户名: [{ required: true, message: '请填写户名', trigger: 'blur' }],
  开户行: [{ required: true, message: '请填写开户行', trigger: 'blur' }],
  账号: [{ required: true, validator: validator, regexp: 'number', trigger: 'blur' }],
  单位联系人: [{ required: true, message: '请填写单位联系人', trigger: 'blur' }],
  联系电话: [{ required: true, validator: validator, regexp: 'phone', trigger: 'blur' }]
}

export const columns = [ // 业绩成果
  { type: 'index', label: '序号', width: '55px' },
  { prop: '业绩成果形式', label: '业绩成果形式', minWidth: '125px' },
  { prop: '本人排名/总人数', label: '本人排名/总人数', align: 'center', minWidth: '155px' },
  { prop: '创新价值或经济、社会效益', label: '创新价值或经济、社会效益', align: 'center' },
  { type: 'operation', label: '操作', width: '100px' }
]
