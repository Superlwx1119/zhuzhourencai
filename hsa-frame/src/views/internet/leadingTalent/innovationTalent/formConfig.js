export const baseItems = [ // 基础信息
  { label: '姓名', prop: '姓名', type: 'input' },
  { label: '性别', prop: '性别', type: 'select' },
  { label: '证件类型', prop: '证件类型', type: 'select' },
  { label: '证件号码', prop: '证件号码', type: 'input' },
  { label: '出生日期', prop: '出生日期', type: 'date', pickerOptions: { shortcuts: [] }},
  { label: '籍贯', prop: '籍贯', type: 'input' },
  { label: '民族', prop: '民族', type: 'select' },
  { label: '政治面貌', prop: '政治面貌', type: 'select' }
]

export const detailItems = [ // 详情信息
  { label: '文化程度', prop: '文化程度', type: 'select' },
  { label: '学位', prop: '学位', type: 'select' },
  { label: '授予时间', prop: '授予时间', type: 'date', pickerOptions: { shortcuts: [] }},
  { label: '职称', prop: '职称', type: 'input' },
  { label: '职位', prop: '职位', type: 'input' },
  { label: '从事专业', prop: '从事专业', type: 'input' },
  { label: '通讯地址', prop: '通讯地址', type: 'input', span: 16 },
  { label: '邮编', prop: '邮编', type: 'input' },
  { label: '联系电话', prop: '联系电话', type: 'input' },
  { label: '电子邮箱', prop: '电子邮箱', type: 'input' }
]

export const workItems = [ // 工作单位信息
  { label: '单位名称', prop: '单位名称', type: 'input' },
  { label: '单位地址', prop: '单位地址', type: 'input', span: 16 },
  { label: '户名', prop: '户名', type: 'input' },
  { label: '开户行', prop: '开户行', type: 'input' },
  { label: '账号', prop: '账号', type: 'input' },
  { label: '单位联系人', prop: '单位联系人', type: 'input' },
  { label: '联系电话', prop: '联系电话', type: 'input' }
]
export const columns = [ // 业绩成果
  { type: 'index', label: '序号', width: '55px' },
  { prop: '业绩成果形式', label: '业绩成果形式', minWidth: '125px' },
  { prop: '本人排名/总人数', label: '本人排名/总人数', align: 'center', minWidth: '155px' },
  { prop: '创新价值或经济、社会效益', label: '创新价值或经济、社会效益', align: 'center' },
  { type: 'operation', label: '操作', width: '100px' }
]
